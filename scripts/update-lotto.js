/* 동행복권에서 회차 정보를 받아 data/draws.json 을 갱신합니다.
   매주 토요일 밤 GitHub Actions 가 자동으로 실행합니다.

   2026-09-15 고침:
   - 예전에는 접속이 막혀도 "아직 추첨 전"으로 처리하고 조용히 끝냈습니다.
     그래서 실패해도 초록색으로 표시되어 아무도 몰랐습니다.
   - 이제 받아온 내용을 그대로 기록하고, 받아오기 자체가 실패하면
     작업을 빨간색으로 끝냅니다(exit 1). 그래야 눈에 보입니다. */

const fs = require('fs');
const path = require('path');

const OUT_JSON = path.join(__dirname, '..', 'data', 'draws.json');
const OUT_JS   = path.join(__dirname, '..', 'assets', 'lotto-data.js');
const API = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'ko-KR,ko;q=0.9',
  'Referer': 'https://www.dhlottery.co.kr/gameResult.do?method=byWin'
};

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

/* 돌려주는 값
   {ok:true,  data:{...}}  정상으로 받아왔습니다
   {ok:true,  data:null }  서버가 "그런 회차 없다"고 했습니다 (아직 추첨 전)
   {ok:false, why:'...' }  못 받아왔습니다 (막힘·오류) — 실패로 처리합니다 */
async function fetchDraw(no){
  let why = '';
  for (let t = 1; t <= 3; t++) {
    try {
      const res = await fetch(API + no, { headers: HEADERS });
      const text = await res.text();

      if (!res.ok) {
        why = 'HTTP ' + res.status;
        console.log('  [' + t + '번째] ' + why + ' / 받은 내용 앞부분: ' + text.slice(0,120).replace(/\s+/g,' '));
        await sleep(1500);
        continue;
      }

      let j;
      try {
        j = JSON.parse(text);
      } catch (e) {
        why = 'JSON이 아닌 답이 왔습니다 (차단 페이지일 수 있음)';
        console.log('  [' + t + '번째] ' + why + ' / 받은 내용 앞부분: ' + text.slice(0,200).replace(/\s+/g,' '));
        await sleep(1500);
        continue;
      }

      if (j && j.returnValue === 'success') return { ok:true, data:j };

      console.log('  서버 응답: ' + JSON.stringify(j).slice(0,200));
      return { ok:true, data:null };

    } catch (e) {
      why = '연결 실패: ' + e.message;
      console.log('  [' + t + '번째] ' + why);
      await sleep(1500);
    }
  }
  return { ok:false, why: why };
}

function toRow(j){
  const n = [j.drwtNo1, j.drwtNo2, j.drwtNo3, j.drwtNo4, j.drwtNo5, j.drwtNo6]
    .map(Number).sort(function(a, b){ return a - b; });
  return {
    drwNo: j.drwNo,
    date:  j.drwNoDate,
    n: n, b: Number(j.bnusNo),
    w1: Number(j.firstPrzwnerCo || 0),
    w1amt: Number(j.firstWinamnt || 0),
    sales: Number(j.totSellamnt || 0)
  };
}

/* 1회 추첨일이 2002-12-07(토)이므로, 그 뒤 지난 주 수 + 1 이 대략 최신 회차입니다. */
function expectedDrawNo(){
  const first = Date.UTC(2002, 11, 7);
  return Math.floor((Date.now() - first) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

(async () => {
  let draws = [];
  try { draws = JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')); } catch (e) {}
  const have = new Set(draws.map(function(d){ return d.drwNo; }));
  let next = draws.length ? Math.max.apply(null, draws.map(function(d){ return d.drwNo; })) + 1 : 1;

  const expect = expectedDrawNo();
  console.log('현재 보유 회차:', draws.length, '/ 다음 조회:', next);
  console.log('날짜로 따진 예상 최신 회차:', expect);

  let added = 0;
  let failed = null;

  while (true) {
    const r = await fetchDraw(next);

    if (!r.ok) { failed = next + '회를 받아오지 못했습니다 — ' + r.why; break; }

    if (!r.data) {
      console.log(next + '회는 서버에 아직 없습니다.');
      if (next <= expect - 1) {
        failed = next + '회는 날짜로 보면 이미 추첨된 회차인데 서버가 없다고 답했습니다. 차단이 의심됩니다.';
      }
      break;
    }

    if (!have.has(r.data.drwNo)) {
      draws.push(toRow(r.data));
      added++;
      console.log('추가:', r.data.drwNo, r.data.drwNoDate);
    }
    next++;
    await sleep(400);
    if (added > 60) break;
  }

  if (added) {
    draws.sort(function(a, b){ return a.drwNo - b.drwNo; });
    fs.writeFileSync(OUT_JSON, JSON.stringify(draws));

    const compact = draws.map(function(d){ return [d.drwNo, d.date].concat(d.n, [d.b, d.w1, d.w1amt]); });
    const head = '/* 로또 회차 데이터 (실제) · [회차,날짜,n1~n6,보너스,1등 게임수,1등 1게임당 금액] */\nvar LOTTO_RAW = ';
    fs.writeFileSync(OUT_JS, head + JSON.stringify(compact) + ';\n');
    console.log(added + '개 회차를 추가했습니다. 이제 ' + draws.length + '회까지 있습니다.');
  } else {
    console.log('새 회차가 없습니다.');
  }

  if (failed) {
    console.error('');
    console.error('=== 문제가 있습니다 ===');
    console.error(failed);
    console.error('동행복권이 해외 접속을 막고 있을 수 있습니다.');
    process.exit(1);
  }
})();
