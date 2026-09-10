/* 동행복권에서 회차 정보를 받아 data/draws.json 을 갱신합니다.
   매주 토요일 밤 GitHub Actions 가 자동으로 실행합니다. */
const fs = require('fs');
const path = require('path');

const OUT_JSON = path.join(__dirname, '..', 'data', 'draws.json');
const OUT_JS   = path.join(__dirname, '..', 'assets', 'lotto-data.js');
const API = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

async function fetchDraw(no){
  for (let t = 0; t < 3; t++) {
    try {
      const res = await fetch(API + no, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const j = await res.json();
      if (j && j.returnValue === 'success') return j;
      return null;                      /* 아직 추첨 전 */
    } catch (e) {
      await sleep(1200);
    }
  }
  return null;
}

function toRow(j){
  const n = [j.drwtNo1, j.drwtNo2, j.drwtNo3, j.drwtNo4, j.drwtNo5, j.drwtNo6]
    .map(Number).sort((a, b) => a - b);
  return {
    drwNo: j.drwNo,
    date:  j.drwNoDate,
    n, b: Number(j.bnusNo),
    w1: Number(j.firstPrzwnerCo || 0),
    w1amt: Number(j.firstWinamnt || 0),
    sales: Number(j.totSellamnt || 0)
  };
}

(async () => {
  let draws = [];
  try { draws = JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')); } catch (e) {}
  const have = new Set(draws.map(d => d.drwNo));
  let next = draws.length ? Math.max(...draws.map(d => d.drwNo)) + 1 : 1;

  console.log('현재 보유 회차:', draws.length, '/ 다음 조회:', next);

  let added = 0;
  while (true) {
    const j = await fetchDraw(next);
    if (!j) { console.log(next + '회는 아직 없습니다. 종료합니다.'); break; }
    if (!have.has(j.drwNo)) { draws.push(toRow(j)); added++; console.log('추가:', j.drwNo, j.drwNoDate); }
    next++;
    await sleep(300);
    if (added > 60) break;              /* 안전장치 */
  }

  if (!added) { console.log('새 회차가 없습니다.'); return; }

  draws.sort((a, b) => a.drwNo - b.drwNo);
  fs.writeFileSync(OUT_JSON, JSON.stringify(draws));

  /* 화면에서 쓰는 압축 형식으로 다시 씁니다 */
  const compact = draws.map(d => [d.drwNo, d.date, ...d.n, d.b, d.w1, d.w1amt]);
  const js = fs.readFileSync(OUT_JS, 'utf8');
  const head = js.slice(0, js.indexOf('var LOTTO_RAW = ')) + 'var LOTTO_RAW = ';
  const tail = js.slice(js.indexOf(';\nvar LOTTO = {'));
  fs.writeFileSync(OUT_JS, head + JSON.stringify(compact) + tail);

  console.log('갱신 완료. 새로 추가된 회차:', added, '/ 전체:', draws.length);
})();
