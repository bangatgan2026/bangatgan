const API = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
  'Referer': 'https://www.dhlottery.co.kr/gameResult.do?method=byWin',
  'X-Requested-With': 'XMLHttpRequest'
};

export default async function handler(req, res) {
  const no = parseInt(req.query.no, 10);

  if (!no || no < 1 || no > 9999) {
    res.status(400).json({ error: 'wrong draw number' });
    return;
  }

  try {
    const r = await fetch(API + no, { headers: HEADERS });
    const text = await r.text();

    if (!r.ok) {
      res.status(502).json({ error: 'http error', status: r.status, body: text.slice(0, 300) });
      return;
    }

    let j;
    try {
      j = JSON.parse(text);
    } catch (e) {
      res.status(502).json({ error: 'not json (blocked)', status: r.status, body: text.slice(0, 300) });
      return;
    }

    if (j && j.returnValue === 'success') {
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=86400');
    } else {
      res.setHeader('Cache-Control', 's-maxage=60');
    }

    res.status(200).json(j);

  } catch (e) {
    res.status(502).json({ error: 'fetch failed', detail: String(e && e.message) });
  }
}
