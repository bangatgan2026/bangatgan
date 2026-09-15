const PAGE = 'https://www.dhlottery.co.kr/gameResult.do?method=byWin&drwNo=';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
  'Referer': 'https://www.dhlottery.co.kr/common.do?method=main'
};

function onlyDigits(s){ return Number(String(s).replace(/[^0-9]/g, '')); }

function parsePage(html, no) {
  const balls = [];
  const re = /ball_645[^>]*>\s*(\d{1,2})\s*</g;
  let m;
  while ((m = re.exec(html)) !== null) balls.push(Number(m[1]));

  if (balls.length < 7) return { error: 'numbers not found', found: balls.length };

  const n = balls.slice(0, 6);
  const bonus = balls[6];

  for (const x of n.concat([bonus])) {
    if (!(x >= 1 && x <= 45)) return { error: 'number out of range', balls: balls.slice(0, 7) };
  }

  const d = html.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!d) return { error: 'date not found' };
  const date = d[1] + '-' + ('0' + d[2]).slice(-2) + '-' + ('0' + d[3]).slice(-2);

  let w1 = 0, w1amt = 0;
  const rows = html.split(/<tr[^>]*>/);
  for (const row of rows) {
    if (!/>\s*1등\s*</.test(row)) continue;
    const cells = row.split(/<\/td>/).map(function (c) {
      return c.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    }).filter(function (c) { return c.length; });
    const nums = cells.map(onlyDigits).filter(function (v) { return !isNaN(v); });
    if (nums.length >= 4) { w1 = nums[2]; w1amt = nums[3]; }
    break;
  }

  return {
    returnValue: 'success',
    drwNo: no,
    drwNoDate: date,
    drwtNo1: n[0], drwtNo2: n[1], drwtNo3: n[2],
    drwtNo4: n[3], drwtNo5: n[4], drwtNo6: n[5],
    bnusNo: bonus,
    firstPrzwnerCo: w1,
    firstWinamnt: w1amt,
    totSellamnt: 0
  };
}

export default async function handler(req, res) {
  const no = parseInt(req.query.no, 10);

  if (!no || no < 1 || no > 9999) {
    res.status(400).json({ error: 'wrong draw number' });
    return;
  }

  try {
    const r = await fetch(PAGE + no, { headers: HEADERS });
    const html = await r.text();

    if (!r.ok) {
      res.status(502).json({ error: 'http error', status: r.status, body: html.slice(0, 300) });
      return;
    }

    const shown = html.match(/(\d{1,4})\s*회\s*당첨결과/);
    if (shown && Number(shown[1]) !== no) {
      res.setHeader('Cache-Control', 's-maxage=60');
      res.status(200).json({ returnValue: 'fail', asked: no, shown: Number(shown[1]) });
      return;
    }

    const out = parsePage(html, no);

    if (out.error) {
      res.status(502).json({ error: out.error, detail: out, body: html.slice(0, 400) });
      return;
    }

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=86400');
    res.status(200).json(out);

  } catch (e) {
    res.status(502).json({ error: 'fetch failed', detail: String(e && e.message) });
  }
}
