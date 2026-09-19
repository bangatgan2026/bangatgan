/* 로또 회차를 받아 data/draws.json 과 assets/lotto-data.js 를 갱신합니다.
   매주 토요일 밤 GitHub Actions 가 자동으로 실행합니다.

   2026-09-15 고침 (출처 교체):
   - 동행복권이 프로그램 접속을 전면 차단했습니다. 해외 IP만이 아니라
     서울(Vercel icn1)에서도 로그인 페이지만 돌아옵니다.
   - 그래서 공개 미러 두 곳에서 받아옵니다. 둘 다 깃허브에 있으므로
     깃허브 액션에서 막힘 없이 받을 수 있습니다.
   - 두 곳의 당첨번호가 서로 다르면 넣지 않고 빨간색으로 실패시킵니다.
     한 곳이 틀려도 우리 사이트에 틀린 번호가 올라가지 않게 하려는 것입니다.

   출처
     A. https://raw.githubusercontent.com/uriseozz/lotto-data/main/lotto.json
        1회부터 최신까지. 등수별 상세까지 들어 있음
     B. https://raw.githubusercontent.com/smok95/lotto/master/results/all.json
        262회부터 최신까지

   ※ api/lotto.js (Vercel 중계기)는 출처가 막혀 쓰지 않습니다.
      나중에 동행복권이 다시 열리면 그 파일만 고쳐 되살릴 수 있습니다. */

const fs = require('fs');
const path = require('path');

const OUT_JSON = path.join(__dirname, '..', 'data', 'draws.json');
const OUT_JS   = path.join(__dirname, '..', 'assets', 'lotto-data.js');

const SRC_A = 'https://raw.githubusercontent.com/uriseozz/lotto-data/main/lotto.json';
const SRC_B = 'https://raw.githubusercontent.com/smok95/lotto/master/results/all.json';

async function getJson(url, name){
  for (let t = 1; t <= 3; t++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'bangatgan-lotto-updater' } });
      const text = await res.text();
      if (!res.ok) {
        console.log('  [' + name + ' ' + t + '번째] HTTP ' + res.status + ' / ' + text.slice(0,150).replace(/\s+/g,' '));
        await new Promise(function(r){ setTimeout(r, 2000); });
        continue;
      }
      return JSON.parse(text);
    } catch (e) {
      console.log('  [' + name + ' ' + t + '번째] ' + e.message);
      await new Promise(function(r){ setTimeout(r, 2000); });
    }
  }
  return null;
}

/* 두 출처의 모양이 달라서 우리 모양으로 맞춥니다 */
function normA(j){
  const m = new Map();
  ((j && j.rounds) || []).forEach(function(r){
    m.set(Number(r.id), {
      drwNo: Number(r.id),
      date:  String(r.draw_date).slice(0,10),
      n: [r.n1,r.n2,r.n3,r.n4,r.n5,r.n6].map(Number).sort(function(a,b){ return a-b; }),
      b: Number(r.bonus),
      w1: Number(r.first_winners || 0),
      w1amt: Number(r.first_prize_each || 0),
      w2: Number(r.second_winners || 0),
      w2amt: Number(r.second_prize_each || 0),
      w3: Number(r.third_winners || 0),
      w3amt: Number(r.third_prize_each || 0),
      w4: Number(r.fourth_winners || 0),
      w4amt: Number(r.fourth_prize_each || 0),
      w5: Number(r.fifth_winners || 0),
      w5amt: Number(r.fifth_prize_each || 0),
      sales: Number(r.total_sales || 0)
    });
  });
  return m;
}
function normB(list){
  const m = new Map();
  (list || []).forEach(function(r){
    const dv = r.divisions || [];
    const d1 = dv[0] || {};
    m.set(Number(r.draw_no), {
      drwNo: Number(r.draw_no),
      date:  String(r.date).slice(0,10),
      n: (r.numbers || []).map(Number).sort(function(a,b){ return a-b; }),
      b: Number(r.bonus_no),
      w1: Number(d1.winners || 0),
      w1amt: Number(d1.prize || 0),
      w2: Number((dv[1] || {}).winners || 0),
      w2amt: Number((dv[1] || {}).prize || 0),
      w3: Number((dv[2] || {}).winners || 0),
      w3amt: Number((dv[2] || {}).prize || 0),
      w4: Number((dv[3] || {}).winners || 0),
      w4amt: Number((dv[3] || {}).prize || 0),
      w5: Number((dv[4] || {}).winners || 0),
      w5amt: Number((dv[4] || {}).prize || 0),
      sales: Number(r.total_sales_amount || 0)
    });
  });
  return m;
}

function same(a, b){
  return a.b === b.b && a.n.join(',') === b.n.join(',') && a.date === b.date;
}

/* 번호 모양 검사 — 1~45 서로 다른 6개, 보너스 1개, 날짜 모양 */
function sane(d){
  if (!d || !Array.isArray(d.n) || d.n.length !== 6) return false;
  if (new Set(d.n).size !== 6) return false;
  if (!d.n.every(function(x){ return Number.isInteger(x) && x >= 1 && x <= 45; })) return false;
  if (!Number.isInteger(d.b) || d.b < 1 || d.b > 45 || d.n.indexOf(d.b) !== -1) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d.date)) return false;
  return true;
}

/* 추첨은 토요일 20:45(한국) = 11:45 UTC 입니다. 그 뒤로 몇 시간 지났는지 */
function hoursSinceDraw(date){
  const t = Date.parse(date + 'T11:45:00Z');
  if (isNaN(t)) return 0;
  return (Date.now() - t) / 3600000;
}

/* 1회 추첨일이 2002-12-07(토)이므로, 그 뒤 지난 주 수 + 1 이 대략 최신 회차입니다. */
function expectedDrawNo(){
  const first = Date.UTC(2002, 11, 7);
  return Math.floor((Date.now() - first) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

(async function(){
  let draws = [];
  try { draws = JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')); } catch (e) {}
  const have = new Set(draws.map(function(d){ return d.drwNo; }));
  const mine = draws.length ? Math.max.apply(null, draws.map(function(d){ return d.drwNo; })) : 0;

  console.log('현재 보유 회차:', draws.length, '/ 가장 최근:', mine);

  const both = await Promise.all([ getJson(SRC_A, 'A'), getJson(SRC_B, 'B') ]);
  const ja = both[0], jb = both[1];
  if (!ja && !jb) {
    console.error('두 출처 모두 받아오지 못했습니다.');
    process.exit(1);
  }

  const A = ja ? normA(ja) : new Map();
  const B = jb ? normB(jb) : new Map();
  const maxA = A.size ? Math.max.apply(null, Array.from(A.keys())) : 0;
  const maxB = B.size ? Math.max.apply(null, Array.from(B.keys())) : 0;
  console.log('출처 A 최신:', maxA, '/ 출처 B 최신:', maxB);

  const expect = expectedDrawNo();
  console.log('날짜로 따진 예상 최신 회차:', expect);

  let added = 0;
  let failed = null;

  /* 최근 3회차를 두 출처와 다시 맞춰 봅니다.
     한 곳만 보고 넣은 회차가 나중에 틀린 것으로 드러나면 여기서 잡힙니다.
     고치지는 않고 크게 알리기만 합니다. 사람이 보고 판단할 일입니다. */
  draws.slice(-3).forEach(function(d){
    [['A', A.get(d.drwNo)], ['B', B.get(d.drwNo)]].forEach(function(pair){
      const src = pair[1];
      if (!src) return;
      if (src.n.join(',') !== d.n.join(',') || src.b !== d.b || src.date !== d.date) {
        failed = '이미 넣은 ' + d.drwNo + '회가 출처 ' + pair[0] + '와 다릅니다. 사람이 확인해야 합니다.\n' +
                 '  우리: ' + d.date + ' ' + d.n.join(',') + ' +' + d.b + '\n' +
                 '  출처: ' + src.date + ' ' + src.n.join(',') + ' +' + src.b;
      }
    });
  });
  if (failed) {
    console.error('');
    console.error('=== 문제가 있습니다 ===');
    console.error(failed);
    process.exit(1);
  }

  for (let no = mine + 1; no <= Math.max(maxA, maxB); no++) {
    if (have.has(no)) continue;
    const a = A.get(no), b = B.get(no);

    if (a && b) {
      if (!same(a, b)) {
        failed = no + '회에서 두 출처의 번호가 다릅니다. 넣지 않았습니다.\n' +
                 '  A: ' + a.date + ' ' + a.n.join(',') + ' +' + a.b + '\n' +
                 '  B: ' + b.date + ' ' + b.n.join(',') + ' +' + b.b;
        break;
      }
      draws.push(a);
      added++;
      console.log('추가:', no, a.date, a.n.join(','), '+' + a.b,
                  '/ 1등 ' + a.w1 + '명 ' + a.w1amt.toLocaleString() + '원');
      continue;
    }

    /* 한 곳에만 있는 경우.
       추첨 직후에는 한쪽 미러가 늦을 수 있으니 처음에는 기다립니다.
       그런데 한쪽이 몇 주씩 안 올라오는 일도 있어서, 추첨 후 3시간이 지나면
       한 곳만 보고도 넣습니다. 대신 아래 두 가지로 안전을 지킵니다.
         · 넣기 전에 번호 모양을 검사합니다 (sane)
         · 다음 실행 때 최근 회차를 두 출처와 다시 맞춰 봅니다 (recheck) */
    const one = a || b;
    if (!one) break;
    if (!sane(one)) {
      failed = no + '회 번호 모양이 이상해서 넣지 않았습니다: ' + JSON.stringify(one);
      break;
    }
    if (hoursSinceDraw(one.date) < 3) {
      console.log(no + '회는 한 곳에만 있고 추첨 직후입니다. 다음 실행 때 다시 봅니다. (A:' + !!a + ' / B:' + !!b + ')');
      break;
    }
    draws.push(one);
    added++;
    console.log('추가(한 곳만):', no, one.date, one.n.join(','), '+' + one.b,
                '/ 출처 ' + (a ? 'A' : 'B') + ' 단독. 다음 실행 때 다시 맞춰 봅니다');
    continue;
  }

  /* 날짜상 이미 나왔어야 할 회차가 양쪽 어디에도 없으면 알려야 합니다 */
  if (!failed && Math.max(maxA, maxB) < expect - 1) {
    failed = '예상 최신 회차는 ' + expect + '인데 두 출처 모두 ' +
             Math.max(maxA, maxB) + '회에서 멈춰 있습니다. 출처가 끊겼는지 확인이 필요합니다.';
  }

  if (added) {
    draws.sort(function(a, b){ return a.drwNo - b.drwNo; });
    fs.writeFileSync(OUT_JSON, JSON.stringify(draws));

    /* 중요: 이 파일에는 회차 목록 말고도 공 그리기·금액 표시·등수 판정 같은
       기능이 함께 들어 있습니다. 파일을 통째로 새로 쓰면 그 기능이 전부 지워져
       로또 페이지가 통째로 먹통이 됩니다. (2026-09-15에 실제로 확인했습니다)
       그래서 LOTTO_RAW 배열 한 곳만 갈아끼웁니다. */
    /* [회차,날짜,n1~n6,보너스, 1등게임수,1등금액, 2등…, 3등…, 4등…, 5등…] 19칸 */
    const compact = draws.map(function(d){
      return [d.drwNo, d.date].concat(d.n, [d.b,
        d.w1||0, d.w1amt||0, d.w2||0, d.w2amt||0, d.w3||0, d.w3amt||0,
        d.w4||0, d.w4amt||0, d.w5||0, d.w5amt||0]);
    });
    let js = fs.readFileSync(OUT_JS, 'utf8');
    const m = js.match(/var LOTTO_RAW = (\[[\s\S]*?\]);/);
    if (!m) {
      console.error('lotto-data.js 에서 LOTTO_RAW 를 찾지 못했습니다. 덮어쓰지 않고 멈춥니다.');
      process.exit(1);
    }
    js = js.replace(m[1], JSON.stringify(compact));
    fs.writeFileSync(OUT_JS, js);
    console.log(added + '개 회차를 추가했습니다. 이제 ' + draws.length + '회까지 있습니다.');
  } else {
    console.log('새 회차가 없습니다.');
  }

  if (failed) {
    console.error('');
    console.error('=== 문제가 있습니다 ===');
    console.error(failed);
    process.exit(1);
  }
})();
