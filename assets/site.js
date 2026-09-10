/* ============================================================
   사이트 전체 메뉴는 이 파일 한 곳에서만 관리합니다.
   새 도구를 만들면 아래 SECTIONS 의 items 에 한 줄만 추가하세요.
   상단·좌측·하단 메뉴에 자동으로 반영됩니다.
   ============================================================ */

var SITE = { name: "참새방앗간", tagline: "오늘 필요한 계산과 조회" };

var SECTIONS = [
  {
    id: "money", name: "금융계산기", home: "money.html",
    desc: "월급, 대출, 차량처럼 돈이 걸린 계산",
    items: [
      { href: "salary.html",    name: "연봉 실수령액",    desc: "세금과 4대보험 떼고 월 얼마" },
      { href: "car.html",       name: "차량 할부",        desc: "월 납입금과 총 비용" },
      { href: "loan.html",      name: "대출 이자",        desc: "상환방식별 월 상환액" },
      { href: "retire.html",    name: "퇴직금",           desc: "근무기간과 평균임금으로" },
      { href: "savings.html",   name: "예금·적금 이자",   desc: "세금 떼고 만기 수령액" },
      { href: "prepay.html",    name: "중도상환수수료",   desc: "미리 갚을 때 드는 돈" },
      { href: "jeonse.html",    name: "전월세 전환",      desc: "전세와 월세 바꿔보기" },
      { href: "insurance.html", name: "4대보험료",        desc: "근로자와 회사 부담액" },
      { href: "compound.html",  name: "복리 계산",        desc: "매달 넣으면 얼마가 되는지" }
    ]
  },
  {
    id: "estate", name: "부동산", home: "estate.html",
    desc: "집 살 때 드는 돈을 미리 계산",
    items: [
      { href: "acquisition.html", name: "취득세",      desc: "집 살 때 내는 세금" },
      { href: "ltv.html",         name: "대출 한도",   desc: "LTV와 DSR로 얼마까지" },
      { href: "broker.html",      name: "중개수수료",  desc: "법정 상한요율로 계산" }
    ]
  },
  {
    id: "date", name: "날짜계산기", home: "date.html",
    desc: "나이와 날짜를 한 번에",
    items: [
      { href: "birthday.html", name: "생년월일 종합",    desc: "생일 하나로 여러 답을 한 번에" },
      { href: "age.html",      name: "만 나이",          desc: "기준일을 정해서 계산" },
      { href: "dday.html",     name: "디데이",           desc: "남은 날과 지나온 날" },
      { href: "datecalc.html", name: "날짜 더하기·빼기", desc: "며칠 뒤가 언제인지" },
      { href: "baby.html",     name: "아기 100일·돌",    desc: "백일과 돌 날짜" }
    ]
  },
  {
    id: "health", name: "건강계산기", home: "health.html",
    desc: "몸 상태를 숫자로 확인",
    items: [
      { href: "bmi.html",     name: "BMI 체질량지수", desc: "키와 몸무게로 비만도" },
      { href: "bmr.html",     name: "기초대사량",     desc: "하루에 쓰는 최소 칼로리" },
      { href: "calorie.html", name: "하루 필요 칼로리", desc: "활동량까지 넣어서" },
      { href: "bp.html",      name: "혈압 단계 확인", desc: "학회 기준으로 어느 구간인지" },
      { href: "walk.html",    name: "걷기 칼로리 소모", desc: "얼마 걸으면 얼마가 소모되는지" }
    ]
  },
  {
    id: "lotto", name: "로또", home: "lotto.html",
    desc: "역대 당첨번호 조회와 번호 생성기",
    items: [
      { href: "lotto.html",      name: "역대 로또번호 조회", desc: "회차별 번호와 등수별 당첨금" },
      { href: "lotto-gen.html",  name: "로또번호 생성기", desc: "조건을 정해서 번호를 뽑습니다" },
      { href: "lotto-stat.html", name: "번호 통계",     desc: "출현 횟수와 미출현 기간" },
      { href: "lotto-my.html",   name: "내 번호",       desc: "저장해 두면 자동으로 대조" },
      { href: "lotto-tax.html",  name: "당첨금 실수령액", desc: "세금 떼고 얼마를 받는지" }
    ]
  },
  {
    id: "info", name: "정보나누기", home: "info.html",
    desc: "알아두면 도움이 되는 이야기",
    catOnly: true,
    cats: [
      { href: "info-money.html",  name: "금융",   desc: "보험료, 대출, 실업급여, 연말정산" },
      { href: "info-estate.html", name: "부동산", desc: "집 살 때 드는 돈, 대출 한도, 전세" },
      { href: "info-life.html",   name: "생활",   desc: "만 나이, 기초연금" },
      { href: "info-lotto.html",  name: "로또",   desc: "확률, 당첨금과 세금, 수령 방법" }
    ],
    items: [
      { g:"금융", d:"2026-09-08", href:"info-insurance.html", name:"4대보험 요율과 계산 방법", desc:"누가 얼마씩 내는지" },
      { g:"금융", d:"2026-09-08", href:"info-loan.html",      name:"대출 갚는 방식, 뭐가 유리할까", desc:"원리금균등과 원금균등" },
      { g:"금융", d:"2026-09-08", href:"info-jobless.html",   name:"실업급여 받는 조건과 기간", desc:"누가 얼마나 받는지" },
      { g:"금융", d:"2026-09-08", href:"info-yearend.html",   name:"연말정산에서 놓치기 쉬운 공제", desc:"직접 챙겨야 하는 것들" },
      { g:"부동산", d:"2026-09-08", href:"info-buyhome.html", name:"집 살 때 드는 돈 총정리", desc:"집값 말고 더 드는 비용" },
      { g:"부동산", d:"2026-09-08", href:"info-dsr.html",     name:"DSR과 LTV, 대출 한도를 정하는 두 가지", desc:"둘 중 낮은 쪽이 한도" },
      { g:"부동산", d:"2026-09-08", href:"info-jeonse.html",  name:"전세 계약할 때 확인할 것", desc:"보증금을 지키는 순서" },
      { g:"생활", d:"2026-09-08", href:"info-age.html",       name:"만 나이 제도, 무엇이 바뀌었나", desc:"연 나이를 쓰는 곳은 어디인지" },
      { g:"생활", d:"2026-09-08", href:"info-pension.html",   name:"기초연금 받는 조건", desc:"만 65세면 다 받나" },
      { g:"로또", d:"2026-09-07", href:"guide-odds.html",     name:"1등 확률 814만분의 1은 어느 정도일까", desc:"등수별 확률 계산" },
      { g:"로또", d:"2026-09-07", href:"guide-prize.html",    name:"당첨금은 왜 회차마다 다를까", desc:"당첨금과 세금" },
      { g:"로또", d:"2026-09-07", href:"guide-stats.html",    name:"많이 나온 번호는 다음에도 잘 나올까", desc:"통계를 읽는 법" },
      { g:"로또", d:"2026-09-07", href:"guide-claim.html",    name:"당첨됐다면 어디서 어떻게 받을까", desc:"기한과 준비물" }
    ]
  }
];

/* ---------- 공용 도구 ---------- */
var U = {
  won: function (v) { return Math.round(v).toLocaleString() + "원"; },
  manwon: function (v) {
    v = Math.round(v);
    if (Math.abs(v) >= 100000000) {
      var eok = Math.floor(v / 100000000), rest = Math.round((v % 100000000) / 10000);
      return eok + "억" + (rest ? " " + rest.toLocaleString() + "만" : "") + "원";
    }
    if (Math.abs(v) >= 10000) return Math.round(v / 10000).toLocaleString() + "만원";
    return v.toLocaleString() + "원";
  },
  comma: function (el) {
    if (!el) return;
    el.addEventListener("input", function () {
      var pos = el.value.length - el.selectionStart;
      var n = el.value.replace(/[^0-9]/g, "");
      el.value = n ? Number(n).toLocaleString() : "";
      var np = el.value.length - pos;
      try { el.setSelectionRange(np, np); } catch (e) {}
    });
  },
  num: function (el) { return Number(String(el.value).replace(/[^0-9.-]/g, "")) || 0; },
  saveState: function (obj) {
    try {
      var q = Object.keys(obj).map(function (k) { return k + "=" + encodeURIComponent(obj[k]); }).join("&");
      history.replaceState(null, "", location.pathname + "?" + q);
    } catch (e) {}
  },
  loadState: function () {
    var o = {};
    location.search.replace(/^\?/, "").split("&").forEach(function (p) {
      if (!p) return;
      var i = p.indexOf("="); if (i < 0) return;
      o[p.slice(0, i)] = decodeURIComponent(p.slice(i + 1));
    });
    return o;
  },
  store: {
    get: function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  },
  toast: function (msg) {
    var t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("on");
    clearTimeout(U._tt); U._tt = setTimeout(function () { t.classList.remove("on"); }, 1800);
  }
};

/* ---------- 공통 렌더링 ---------- */
(function () {
  "use strict";
  var cur = document.body.dataset.section || "";
  var page = (location.pathname.split("/").pop() || "index.html");
  var sec = SECTIONS.filter(function (s) { return s.id === cur; })[0];
  var item = sec ? sec.items.filter(function (i) { return i.href === page; })[0] : null;

  function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  /* ===== 상단 (하위 메뉴 펼침) ===== */
  var gnb = SECTIONS.map(function (s) {
    var sub = "";
    var list = s.catOnly ? s.cats : s.items;
    list.forEach(function (it) {
      var n = "";
      if (s.catOnly) {
        var c = s.items.filter(function (x) { return x.g === it.name; }).length;
        n = ' <em>' + c + '</em>';
      }
      sub += '<a href="' + it.href + '"><b>' + esc(it.name) + n + '</b><span>' + esc(it.desc) + '</span></a>';
    });
    return '<div class="gitem' + (s.id === cur ? ' on' : '') + '' + '">' +
      '<a class="glink" href="' + s.home + '">' + esc(s.name) +
      '<svg class="cv" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></a>' +
      '<div class="drop"><div class="dropin' + '' + '">' + sub + '</div></div></div>';
  }).join("");

  document.body.insertBefore(h(
    '<header class="topbar"><div class="topin">' +
      '<a class="brand" href="index.html"><span class="bird"></span><b>참새<em>방앗간</em></b></a>' +
      '<nav class="gnb" id="gnb">' + gnb + '</nav>' +
      '<button class="menubtn" id="menubtn" aria-label="메뉴 열기">' +
      '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '</div></header>'
  ), document.body.firstChild);

  if (sec && page === sec.home) {
    var g = document.querySelector(".gitem.on");
    if (g) g.classList.add("nodrop");
  }

  document.getElementById("menubtn").onclick = function () {
    document.getElementById("gnb").classList.toggle("open");
  };
  [].forEach.call(document.querySelectorAll(".gitem > .glink"), function (a) {
    a.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width:900px)").matches) {
        e.preventDefault();
        a.parentNode.classList.toggle("open");
      }
    });
  });

  /* ===== 뒤로 가기 줄 ===== */
  var main = document.querySelector("main");
  if (main && sec) {
    var backHref = (page === sec.home) ? "index.html" : sec.home;
    var backName = (page === sec.home) ? "홈" : sec.name;
    if (sec.catOnly && item) {
      var c2 = sec.cats.filter(function (c) { return c.name === item.g; })[0];
      if (c2) { backHref = c2.href; backName = sec.name + " · " + c2.name; }
    }
    main.insertBefore(h(
      '<div class="crumb">' +
        '<a class="back" href="' + backHref + '">' + esc(backName) +
        (page === sec.home ? '' : ' 목록') + '</a>' +
        (item ? '<span class="sep">›</span><span class="here">' + esc(item.name) + '</span>' : '') +
      '</div>'
    ), main.firstChild);
  }

  /* ===== 좌측 ===== */
  var sideEl = document.querySelector("aside.side");
  if (sideEl && sec) {
    var links = "";
    if (sec.catOnly) {
      /* 지금 보고 있는 글의 분류를 찾습니다 */
      var here = sec.items.filter(function (x) { return x.href === page; })[0];
      var curCat = here ? here.g : (
        { "info-money.html":"금융", "info-estate.html":"부동산",
          "info-life.html":"생활", "info-lotto.html":"로또" }[page] || null);
      sec.cats.forEach(function (c) {
        var on = (c.name === curCat);
        links += '<a href="' + c.href + '"' + (on ? ' class="on"' : '') + '>' + esc(c.name) + '</a>';
        if (on) {
          sec.items.filter(function (x) { return x.g === c.name; }).forEach(function (x) {
            links += '<a class="sub' + (x.href === page ? ' on' : '') + '" href="' + x.href + '">' +
              esc(x.name) + '</a>';
          });
        }
      });
    } else {
      sec.items.forEach(function (it) {
        links += '<a href="' + it.href + '"' + (it.href === page ? ' class="on"' : '') + '>' + esc(it.name) + '</a>';
      });
    }
    sideEl.innerHTML = '<div class="sidebox"><h3>' + esc(sec.name) + '</h3>' + links + '</div>' + sideEl.innerHTML;
  }

  /* 운영자 채널 (왼쪽 목록 아래) */
  if (sideEl) {
    sideEl.insertAdjacentHTML("beforeend",
      '<div class="sidebox chbox"><h3>운영자 채널</h3>' +
      '<a class="ch" href="https://blog.naver.com/qnssh_zmfrl" target="_blank" rel="noopener">' +
        '<span class="ic nv">N</span><span><b>힐링마스터</b><em>4060 건강·생활 정보 블로그</em></span></a>' +
      '<a class="ch" href="https://www.youtube.com/@JapHakDaSik777" target="_blank" rel="noopener">' +
        '<span class="ic yt"><svg viewBox="0 0 24 24"><path d="M9 8l7 4-7 4z"/></svg></span>' +
        '<span><b>잡학다식의 지식창고</b><em>생활 정보 유튜브</em></span></a>' +
      '</div>');
  }

  function renderFav() {
    if (!sideEl) return;
    var old = sideEl.querySelector(".favbox");
    if (old) old.remove();
    var favs = U.store.get("favs", []);
    if (!favs.length) return;
    var all = [];
    SECTIONS.forEach(function (s) { s.items.forEach(function (i) { all.push(i); }); });
    var list = favs.map(function (f) {
      var it = all.filter(function (i) { return i.href === f; })[0];
      if (!it) return "";
      return '<span class="favrow' + (it.href === page ? ' cur' : '') + '">' +
        '<a href="' + it.href + '"' + (it.href === page ? ' class="on"' : '') + '>' + esc(it.name) + '</a>' +
        '<button class="favdel" data-href="' + it.href + '" title="빼기" aria-label="빼기">×</button></span>';
    }).join("");
    var box = h('<div class="sidebox favbox"><h3>자주 쓰는 것</h3>' + list + '</div>');
    sideEl.insertBefore(box, sideEl.firstChild);
    [].forEach.call(box.querySelectorAll(".favdel"), function (b) {
      b.onclick = function (e) {
        e.preventDefault(); e.stopPropagation();
        var f = U.store.get("favs", []), i = f.indexOf(b.dataset.href);
        if (i > -1) { f.splice(i, 1); U.store.set("favs", f); }
        renderFav();
        var fb = document.getElementById("fabFav");
        if (fb) fb.classList.toggle("act", U.store.get("favs", []).indexOf(page) > -1);
        U.toast("자주 쓰는 것에서 뺐습니다");
      };
    });
  }
  renderFav();

  /* 홈에는 좌측 목록이 없으므로 카드로 보여 줍니다 */
  (function homeFav(){
    if (sideEl || page !== "index.html") return;
    var favs = U.store.get("favs", []);
    if (!favs.length) return;
    var all = [];
    SECTIONS.forEach(function (s) { s.items.forEach(function (i) { all.push(i); }); });
    var cards = favs.map(function (f) {
      var it = all.filter(function (i) { return i.href === f; })[0];
      return it ? '<a href="' + it.href + '"><b>' + esc(it.name) + '</b><span>' + esc(it.desc) + '</span></a>' : "";
    }).join("");
    if (!cards) return;
    var m = document.querySelector("main");
    if (!m) return;
    var card = h('<div class="card"><h2>자주 쓰는 것</h2><div class="toolgrid">' + cards + '</div></div>');
    var first = m.querySelector(".card");
    if (first) m.insertBefore(card, first); else m.appendChild(card);
  })();

  /* ===== 날짜 입력 =====
     달력에서 고르거나, 19960909처럼 여덟 자리를 그대로 칠 수 있습니다.
     원래의 input[type=date]는 값 보관용으로 숨겨 두고, 기존 계산 코드는 그대로 씁니다. */
  (function () {
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var iso = function (d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
    var today = new Date();
    var far = new Date(today.getFullYear() + 30, 11, 31);

    [].forEach.call(document.querySelectorAll('input[type="date"]'), function (dt) {
      if (!dt.getAttribute("min")) dt.setAttribute("min", "1900-01-01");
      if (!dt.getAttribute("max")) {
        dt.setAttribute("max", dt.dataset.max === "today" ? iso(today) : iso(far));
      }

      var box = dt.parentElement;                 /* .inbox */
      var wrap = document.createElement("div");
      wrap.className = "dateln";

      var txt = document.createElement("input");
      txt.type = "text";
      txt.className = "datetxt";
      txt.setAttribute("inputmode", "numeric");
      txt.setAttribute("placeholder", "1996-09-09");
      txt.setAttribute("autocomplete", "off");

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "datebtn";
      btn.setAttribute("aria-label", "달력에서 고르기");
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9">' +
        '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';

      box.insertBefore(wrap, dt);
      wrap.appendChild(txt);
      wrap.appendChild(btn);
      dt.classList.add("datehide");

      /* 숫자만 남겨 1996-09-09 꼴로 다듬습니다 */
      function shape(v) {
        var n = String(v).replace(/[^0-9]/g, "").slice(0, 8);
        if (n.length > 6) return n.slice(0, 4) + "-" + n.slice(4, 6) + "-" + n.slice(6);
        if (n.length > 4) return n.slice(0, 4) + "-" + n.slice(4);
        return n;
      }
      function valid(v) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
        var a = v.split("-"), y = +a[0], m = +a[1], d = +a[2];
        if (m < 1 || m > 12 || d < 1 || d > 31) return false;
        var dd = new Date(y, m - 1, d);
        return dd.getFullYear() === y && dd.getMonth() === m - 1 && dd.getDate() === d;
      }

      txt.addEventListener("input", function () {
        var before = txt.value, pos = txt.selectionStart;
        txt.value = shape(before);
        if (pos === before.length) txt.selectionStart = txt.selectionEnd = txt.value.length;
        if (valid(txt.value)) {
          dt.value = txt.value;
          txt.classList.remove("bad");
        } else {
          dt.value = "";
          txt.classList.toggle("bad", txt.value.length === 10);
        }
      });
      txt.addEventListener("blur", function () {
        if (txt.value && !valid(txt.value)) txt.classList.add("bad");
      });

      btn.addEventListener("click", function () {
        if (typeof dt.showPicker === "function") { try { dt.showPicker(); return; } catch (e) {} }
        dt.classList.remove("datehide");
        dt.focus();
        dt.click();
      });

      dt.addEventListener("change", function () {
        if (dt.value) { txt.value = dt.value; txt.classList.remove("bad"); }
        dt.classList.add("datehide");
      });

      if (dt.value) txt.value = dt.value;
    });

    /* 직접 칠 수 있다는 것을 모르는 분이 많아 한 줄 안내를 답니다 */
    var first = document.querySelector('input[type="date"]');
    if (first) {
      var card = first.closest(".card");
      var btn = card && card.querySelector("button.btn");
      if (card && btn && !card.querySelector(".datetip")) {
        var tip = h('<div class="tipbox datetip">달력에서 고르거나, <b>19960909</b>처럼 숫자 여덟 자리를 그대로 쳐도 됩니다.</div>');
        btn.parentNode.insertBefore(tip, btn);
      }
    }
  })();

  /* ===== 오류 신고 줄 (도구 페이지 본문 맨 아래) ===== */
  (function () {
    var m = document.querySelector("main");
    if (!m || !item) return;
    var h1 = document.querySelector("h1");
    var pageName = h1 ? h1.textContent.trim() : (item.name || "");
    var subj = encodeURIComponent("[참새방앗간] " + pageName + " — 의견 보내기");
    var body = encodeURIComponent(
      "어떤 점이 이상한지, 또는 무엇이 있으면 좋겠는지 편하게 적어 주세요.\n\n" +
      "페이지: " + pageName + "\n" +
      "주소: " + location.href + "\n\n" +
      "내용:\n"
    );
    m.appendChild(h(
      '<div class="report">' +
        '<span>계산이 이상하거나 정보가 틀렸나요. 이런 기능이 있으면 좋겠다는 의견도 좋습니다. 읽고 반영하겠습니다.</span>' +
        '<a href="mailto:escort2023@naver.com?subject=' + subj + '&body=' + body + '">의견 보내기</a>' +
        '<em>escort2023@naver.com</em>' +
      '</div>'
    ));
  })();

  /* ===== 하단 ===== */
  var fcols = SECTIONS.map(function (s) {
    var list = s.catOnly ? s.cats : s.items;
    return '<div><h4>' + esc(s.name) + '</h4>' +
      list.map(function (it) { return '<a href="' + it.href + '">' + esc(it.name) + '</a>'; }).join("") +
      '</div>';
  }).join("");

  document.body.appendChild(h(
    '<footer><div class="footin">' +
      '<div class="fcols">' + fcols + '</div>' +
      '<div class="fnote">' +
        '<a href="about.html">사이트 소개</a><a href="privacy.html">개인정보처리방침</a>' +
        '<a href="terms.html">이용약관</a><a href="contact.html">문의하기</a>' +
        '<a href="https://blog.naver.com/qnssh_zmfrl" target="_blank" rel="noopener">운영자 블로그</a>' +
        '<a href="https://www.youtube.com/@JapHakDaSik777" target="_blank" rel="noopener">유튜브</a>' +
        '<div style="margin-top:12px">계산 결과는 참고용 추정치입니다. 실제 금액은 개인의 조건과 관련 법령에 따라 달라질 수 있으므로, ' +
        '중요한 판단은 해당 기관이나 전문가의 확인을 거치시기 바랍니다.<br>' +
        '로또 관련 정보는 공개된 과거 당첨 결과이며, 다음 회차 결과와 관련이 없고 당첨을 보장하지 않습니다. 복권 구매는 만 19세 이상만 가능합니다.</div>' +
      '</div>' +
    '</div></footer>'
  ));

  /* ===== 떠 있는 버튼 (모든 페이지) ===== */
  {
    document.body.appendChild(h(
      '<div class="fab">' +
        (item ? '<button id="fabFav" title="즐겨찾기"><svg viewBox="0 0 24 24">' +
          '<path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z"/></svg>' +
          '<em>즐겨찾기</em></button>' : '') +
        '<button id="fabShare" title="공유"><svg viewBox="0 0 24 24">' +
          '<path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M12 15V3M8 7l4-4 4 4"/></svg>' +
          '<em>공유</em></button>' +
        '<button id="fabBack" title="이전 페이지"><svg viewBox="0 0 24 24">' +
          '<path d="M15 6l-6 6 6 6"/></svg><em>이전</em></button>' +
        '<button id="fabTop" title="맨 위로"><svg viewBox="0 0 24 24">' +
          '<path d="M6 15l6-6 6 6"/></svg><em>맨 위로</em></button>' +
      '</div>'
    ));

    var favBtn = document.getElementById("fabFav");
    function syncFav() {
      if (favBtn) favBtn.classList.toggle("act", U.store.get("favs", []).indexOf(page) > -1);
    }
    syncFav();
    if (favBtn) favBtn.onclick = function () {
      var favs = U.store.get("favs", []), i = favs.indexOf(page);
      if (i > -1) {
        favs.splice(i, 1);
        U.store.set("favs", favs);
        U.toast("자주 쓰는 것에서 뺐습니다");
      } else {
        favs.push(page);
        U.store.set("favs", favs);
        U.toast("왼쪽 '자주 쓰는 것'에 담았습니다");
      }
      syncFav(); renderFav();
      /* 저장이 안 되는 환경이면 알려 줍니다 */
      if (U.store.get("favs", null) === null) {
        U.toast("이 브라우저에서는 저장되지 않습니다");
      }
    };

    document.getElementById("fabShare").onclick = function () {
      var url = location.href;
      var title = item.name + " · 참새방앗간";
      function fallback() { showShareBox(title, url); }
      try {
        if (navigator.share) {
          navigator.share({ title: document.title, text: title, url: url })
            .then(function () {})
            .catch(function (e) { if (!e || e.name !== "AbortError") fallback(); });
          return;
        }
        if (navigator.clipboard && location.protocol !== "file:") {
          navigator.clipboard.writeText(url)
            .then(function () { U.toast("주소를 복사했습니다"); })
            .catch(fallback);
          return;
        }
      } catch (e) {}
      fallback();
    };

    /* 공유가 막힌 환경에서는 주소를 직접 보여 줍니다 */
    function showShareBox(title, url) {
      var old = document.getElementById("sharebox");
      if (old) old.remove();
      var box = document.createElement("div");
      box.id = "sharebox";
      box.className = "sharebox";
      box.innerHTML =
        '<div class="sbin">' +
          '<h3>주소 공유하기</h3>' +
          '<p>아래 주소를 길게 눌러 복사하시면 됩니다.</p>' +
          '<textarea readonly rows="3"></textarea>' +
          '<div class="sbbtn">' +
            '<button class="btn ghost sm" id="sbCopy">복사하기</button>' +
            '<button class="btn sm" id="sbClose">닫기</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(box);
      var ta = box.querySelector("textarea");
      ta.value = url;
      box.onclick = function (e) { if (e.target === box) box.remove(); };
      document.getElementById("sbClose").onclick = function () { box.remove(); };
      document.getElementById("sbCopy").onclick = function () {
        ta.select();
        ta.setSelectionRange(0, 99999);
        var ok = false;
        try { ok = document.execCommand("copy"); } catch (e) {}
        U.toast(ok ? "복사했습니다" : "주소를 길게 눌러 직접 복사해 주세요");
      };
    }
    document.getElementById("fabTop").onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    document.getElementById("fabBack").onclick = function () {
      if (history.length > 1) history.back();
      else location.href = sec ? sec.home : "index.html";
    };
  }
})();


/* ---------- 선택 상자를 버튼으로 바꿔 줍니다 (어두운 화면에서 잘 보이도록) ---------- */
(function(){
  function toButtons(sel){
    if(!sel || sel.dataset.done) return;
    sel.dataset.done = "1";
    var wrap = document.createElement("div");
    wrap.className = "pick" + (sel.options.length > 3 ? " col" : "");
    var opts = [].map.call(sel.options, function(o){ return o; });
    opts.forEach(function(o){
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = o.textContent;
      b.dataset.value = o.value;
      if (o.selected) b.className = "on";
      b.onclick = function(){
        sel.value = o.value;
        [].forEach.call(wrap.children, function(c){ c.classList.remove("on"); });
        b.classList.add("on");
        sel.dispatchEvent(new Event("change", { bubbles: true }));
      };
      wrap.appendChild(b);
    });
    var box = sel.closest(".inbox") || sel;
    box.parentNode.replaceChild(wrap, box);
    wrap.appendChild(sel);
    sel.style.display = "none";
  }
  document.addEventListener("DOMContentLoaded", function(){
    convert();
  });
  function convert(){
    [].forEach.call(document.querySelectorAll("select"), function(sel){
      /* 항목이 적은 선택만 버튼으로. 연도·월·일처럼 긴 목록은 그대로 둡니다 */
      if (sel.id === "selDraw" || sel.options.length > 6) return;
      toButtons(sel);
    });
  }
  if (document.readyState !== "loading") convert();
})();

/* ---------- 빈칸 안내 ---------- */
U.man = function(el){ return (Number(String(el.value).replace(/[^0-9.]/g,'')) || 0) * 10000; };

/* 만원 단위 칸에 원 단위로 넣은 것 같으면 알려 줍니다 */
U.manOk = function(el, name){
  var v = Number(String(el.value).replace(/[^0-9.]/g,'')) || 0;
  if (v >= 10000000) {   /* 만원 단위로 1천만(=1천억) 이상이면 잘못 넣었을 가능성이 큼 */
    var guess = Math.round(v / 10000);
    U.toast(name + "은(는) 만원 단위입니다. " + guess.toLocaleString() + " 정도가 맞는지 확인해 주세요");
    var box = el.closest(".inbox");
    if (box) { box.classList.add("warn"); el.focus();
      setTimeout(function(){ box.classList.remove("warn"); }, 3000); }
    return false;
  }
  return true;
};

U.need = function(el, name){
  var v = String(el.value || "").replace(/[^0-9.]/g, "");
  if (!v || Number(v) === 0) {
    U.toast(name + "을(를) 입력해 주세요");
    var box = el.closest(".inbox");
    if (box) {
      box.classList.add("warn");
      el.focus();
      setTimeout(function(){ box.classList.remove("warn"); }, 2200);
    }
    return false;
  }
  return true;
};
U.needDate = function(el, name){
  if (!el.value) {
    U.toast(name + "을(를) 입력해 주세요");
    var box = el.closest(".inbox");
    if (box) { box.classList.add("warn"); el.focus();
      setTimeout(function(){ box.classList.remove("warn"); }, 2200); }
    return false;
  }
  return true;
};


/* ---------- 목록이 긴 선택은 직접 그린 창으로 바꿉니다 (브라우저 기본 목록은 어두운 화면에서 안 보임) ---------- */
(function(){
  function build(sel){
    if(!sel || sel.dataset.picker) return;
    sel.dataset.picker = "1";
    var box = sel.closest(".inbox");
    var host = document.createElement("div");
    host.className = "dsel";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dselbtn";
    var cur = sel.options[sel.selectedIndex];
    btn.innerHTML = '<span>' + (cur ? cur.textContent : '') + '</span>' +
      '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
    var list = document.createElement("div");
    list.className = "dsellist";
    [].forEach.call(sel.options, function(o){
      var it = document.createElement("button");
      it.type = "button";
      it.textContent = o.textContent;
      it.dataset.value = o.value;
      if (o.selected) it.className = "on";
      it.onclick = function(e){
        e.stopPropagation();
        sel.value = o.value;
        [].forEach.call(list.children, function(c){ c.classList.remove("on"); });
        it.classList.add("on");
        btn.firstChild.textContent = o.textContent;
        close();
        sel.dispatchEvent(new Event("change", { bubbles: true }));
      };
      list.appendChild(it);
    });
    function open(){
      closeAll();
      host.classList.add("open");
      var on = list.querySelector(".on");
      if (on) list.scrollTop = on.offsetTop - list.clientHeight / 2 + on.clientHeight / 2;
    }
    function close(){ host.classList.remove("open"); }
    btn.onclick = function(e){
      e.stopPropagation();
      if (host.classList.contains("open")) close(); else open();
    };
    host.appendChild(btn);
    host.appendChild(list);
    if (box) { box.parentNode.replaceChild(host, box); }
    else { sel.parentNode.insertBefore(host, sel); }
    host.appendChild(sel);
    sel.style.display = "none";
    /* 값이 코드로 바뀌어도 표시가 따라가도록 */
    sel.addEventListener("change", function(){
      var o = sel.options[sel.selectedIndex];
      if (o) {
        btn.firstChild.textContent = o.textContent;
        [].forEach.call(list.children, function(c){
          c.classList.toggle("on", c.dataset.value === sel.value);
        });
      }
    });
  }
  function closeAll(){
    [].forEach.call(document.querySelectorAll(".dsel.open"), function(d){ d.classList.remove("open"); });
  }
  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeAll(); });

  function run(){
    [].forEach.call(document.querySelectorAll("select"), function(sel){
      if (sel.dataset.done) return;      /* 이미 버튼으로 바뀐 것은 건너뜀 */
      if (sel.options.length <= 6) return;
      build(sel);
    });
  }
  document.addEventListener("DOMContentLoaded", run);
  if (document.readyState !== "loading") run();
  /* 페이지 스크립트가 나중에 목록을 채우는 경우를 위해 한 번 더 */
  setTimeout(run, 60);
  setTimeout(run, 400);
})();


/* ---------- 도구 카드에 아이콘 넣기 ---------- */
(function(){
  var P = window.__ICONS = {
    /* 금융 */
    "salary.html":    '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
    "car.html":       '<path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v5h-3M6 18H3v-5M3 13h18"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>',
    "loan.html":      '<path d="M3 9l9-6 9 6M5 9v11h14V9M9 20v-6h6v6"/>',
    "retire.html":    '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><circle cx="12.5" cy="15" r="3"/>',
    "savings.html":   '<path d="M12 3v18M8 7h6a3 3 0 010 6H9a3 3 0 000 6h7"/>',
    "prepay.html":    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "jeonse.html":    '<path d="M4 10l8-6 8 6v10H4z"/><path d="M9 20v-6h6v6"/><path d="M2 12l10-7 10 7"/>',
    "insurance.html": '<path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    "compound.html":  '<path d="M3 18l5-6 4 3 6-8"/><path d="M14 7h5v5"/>',
    /* 부동산 */
    "acquisition.html":'<path d="M4 10l8-6 8 6v10H4z"/><path d="M12 12v5M10 14h4"/>',
    "ltv.html":       '<path d="M3 20h18M6 20V9l6-5 6 5v11"/><path d="M9 20v-5h6v5"/>',
    "broker.html":    '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><circle cx="12" cy="10" r="1.5"/>',
    /* 날짜 */
    "birthday.html":  '<rect x="3" y="10" width="18" height="11" rx="2"/><path d="M12 10V6M9 6a3 3 0 013-3 3 3 0 013 3M3 15h18"/>',
    "age.html":       '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    "dday.html":      '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M9 15h6"/>',
    "datecalc.html":  '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18M9 14h6M12 12v5"/>',
    "baby.html":      '<circle cx="12" cy="9" r="5"/><path d="M9 8.5h.01M15 8.5h.01M10 11.5a3 3 0 004 0"/><path d="M5 21c1.5-4 4-6 7-6s5.5 2 7 6"/>',
    /* 건강 */
    "bmi.html":       '<path d="M3 12h4l2-6 3 12 3-9 2 3h4"/>',
    "bmr.html":       '<path d="M12 3s5 4 5 9a5 5 0 01-10 0c0-5 5-9 5-9z"/><path d="M12 20v-5"/>',
    "calorie.html":   '<path d="M12 3c3 4 6 5 6 9a6 6 0 01-12 0c0-2 1-3 2-4 1 2 2 2 2 0 0-2 1-4 2-5z"/>',
    "bp.html":        '<path d="M3 12h4l2-4 3 8 2-4h7"/><path d="M20 6v4M18 8h4"/>',
    "walk.html":      '<circle cx="13" cy="4" r="2"/><path d="M11 21l2-6-3-3 1-5 3 3 3 1M10 12l-3 3-1 6"/>',
    /* 로또 */
    "lotto.html":     '<circle cx="9" cy="9" r="5"/><circle cx="16" cy="15" r="5"/>',
    "lotto-gen.html": '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    "lotto-stat.html":'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    "lotto-my.html":  '<path d="M6 3h12v18l-6-4-6 4z"/>',
    "lotto-tax.html": '<path d="M12 3v18M8 7h6a3 3 0 010 6H9a3 3 0 000 6h7"/>',
    /* 정보 */
    "info-insurance.html":'<path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    "info-loan.html":'<path d="M3 9l9-6 9 6M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
    "info-jobless.html":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>',
    "info-yearend.html":'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
    "info-buyhome.html":'<path d="M4 10l8-6 8 6v10H4z"/><path d="M12 12v5M10 14h4"/>',
    "info-dsr.html":'<path d="M3 20h18M6 20V9l6-5 6 5v11"/><path d="M9 20v-5h6v5"/>',
    "info-jeonse.html":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 10h10M7 14h6"/>',
    "info-age.html":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    "info-pension.html":'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-5 4.5-7 8-7s6.5 2 8 7"/>',
    "guide-odds.html":'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.5 2-2.5 3.5M12 17h.01"/>',
    "guide-prize.html":'<path d="M12 3v18M8 7h6a3 3 0 010 6H9a3 3 0 000 6h7"/>',
    "guide-stats.html":'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    "guide-claim.html":'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>'
  };
  function icon(href){
    var d = P[href];
    if (!d) return "";
    return '<span class="tico"><svg viewBox="0 0 24 24">' + d + '</svg></span>';
  }
  function decorate(){
    [].forEach.call(document.querySelectorAll(".toolgrid a, .next a"), function(a){
      if (a.dataset.ico) return;
      var href = (a.getAttribute("href") || "").split("?")[0];
      var svg = icon(href);
      if (!svg) return;
      a.dataset.ico = "1";
      a.classList.add("hasico");
      a.insertAdjacentHTML("afterbegin", svg);
    });
  }
  document.addEventListener("DOMContentLoaded", decorate);
  if (document.readyState !== "loading") decorate();
  setTimeout(decorate, 100);
  setTimeout(decorate, 500);
  /* 계산 후 새로 그려지는 추천 카드도 처리 */
  var mo = new MutationObserver(function(){ decorate(); });
  document.addEventListener("DOMContentLoaded", function(){
    var t = document.querySelector("#nextTools");
    if (t) mo.observe(t, { childList: true });
  });
})();


/* ---------- 페이지 제목 옆에 아이콘과 빛을 넣습니다 ---------- */
(function(){
  var TONE = { money:"#E3B75B", estate:"#5FC9C0", date:"#7FA9F0", health:"#7FD06A", lotto:"#F0A64E", info:"#B49BE8" };
  function run(){
    var h1 = document.querySelector("main > .page-h");
    if (!h1 || h1.dataset.deco) return;
    var sec = document.body.dataset.section || "";
    var page = (location.pathname.split("/").pop() || "index.html");
    var ico = document.querySelector('.tico');   /* 아이콘 정의는 카드 쪽과 공유 */
    var svg = "";
    var card = document.querySelector('a[href^="' + page + '"] .tico svg');
    /* 카드가 없는 페이지를 위해 아이콘 표를 다시 참조 */
    if (window.__ICONS && window.__ICONS[page]) svg = window.__ICONS[page];
    h1.dataset.deco = "1";
    var wrap = document.createElement("div");
    wrap.className = "pagehead";
    wrap.style.setProperty("--tone", TONE[sec] || "#E3B75B");
    h1.parentNode.insertBefore(wrap, h1);
    var lead = h1.nextElementSibling;
    wrap.appendChild(h1);
    if (lead && lead.classList.contains("page-lead")) wrap.appendChild(lead);
    if (svg) {
      wrap.insertAdjacentHTML("beforeend",
        '<span class="phico"><svg viewBox="0 0 24 24">' + svg + '</svg></span>');
    }
  }
  document.addEventListener("DOMContentLoaded", run);
  if (document.readyState !== "loading") run();
  setTimeout(run, 120);
})();
