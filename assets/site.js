/* ============================================================
   사이트 전체 메뉴는 이 파일 한 곳에서만 관리합니다.
   새 도구를 만들면 아래 SECTIONS 의 items 에 한 줄만 추가하세요.
   새 글은 정보나누기 items 맨 위에 한 줄 추가하고 t:"연결할계산기.html" 을 적으면
   그 계산기 아래 '관련 글' 목록에 자동으로 맨 앞에 붙습니다.
   상단·좌측·하단 메뉴에 자동으로 반영됩니다.
   ============================================================ */

var SITE = { name: "참새방앗간", tagline: "오늘 필요한 계산과 조회" };

var SECTIONS = [
  {
    id: "money", name: "금융계산기", home: "money.html",
    desc: "월급, 대출, 차량처럼 돈이 걸린 계산",
    items: [
      { href: "salary.html",    name: "연봉계산기",    desc: "세금과 4대보험 떼고 월 얼마" },
      { href: "car.html",       name: "차량할부계산기",        desc: "월 납입금과 총 비용" },
      { href: "loan.html",      name: "대출이자계산기",        desc: "상환방식별 월 상환액" },
      { href: "retire.html",    name: "퇴직금계산기",           desc: "근무기간과 평균임금으로" },
      { href: "savings.html",   name: "적금이자계산기",   desc: "세금 떼고 만기 수령액" },
      { href: "prepay.html",    name: "중도상환수수료 계산기",   desc: "미리 갚을 때 드는 돈" },
      { href: "jeonse.html",    name: "전월세 전환율 계산기",      desc: "전세와 월세 바꿔보기" },
      { href: "insurance.html", name: "4대보험 계산기",        desc: "근로자와 회사 부담액" },
      { href: "compound.html",  name: "복리계산기",        desc: "매달 넣으면 얼마가 되는지" },
      { href: "vat.html",       name: "부가세 계산기",           desc: "공급가액과 합계금액을 갈라서" },
      { href: "cartax.html",    name: "자동차세 계산기",         desc: "배기량과 연식으로, 취득세까지" }
    ]
  },
  {
    id: "estate", name: "부동산", home: "estate.html",
    desc: "집 살 때 드는 돈을 미리 계산",
    items: [
      { href: "acquisition.html", name: "취득세 계산기",      desc: "집 살 때 내는 세금" },
      { href: "ltv.html",         name: "주택담보대출 계산기",   desc: "LTV와 DSR로 얼마까지" },
      { href: "broker.html",      name: "부동산 중개수수료 계산기",  desc: "법정 상한요율로 계산" },
      { href: "pyeong.html",      name: "평수 계산기",   desc: "제곱미터와 평을 서로 바꾸기" }
    ]
  },
  {
    id: "date", name: "날짜계산기", home: "date.html",
    desc: "나이와 날짜를 한 번에",
    items: [
      { href: "birthday.html", name: "생년월일 계산기",    desc: "생일 하나로 여러 답을 한 번에" },
      { href: "age.html",      name: "만나이계산기",          desc: "오늘 기준으로 몇 살인지" },
      { href: "dday.html",     name: "디데이계산기",           desc: "남은 날과 지나온 날" },
      { href: "datecalc.html", name: "날짜 더하기·빼기 계산기", desc: "며칠 뒤가 언제인지" },
      { href: "baby.html",     name: "아기 100일 계산기",    desc: "백일과 돌 날짜" }
    ]
  },
  {
    id: "health", name: "건강계산기", home: "health.html",
    desc: "몸 상태를 숫자로 확인",
    items: [
      { href: "bmi.html",     name: "BMI 계산기", desc: "키와 몸무게로 비만도" },
      { href: "bmr.html",     name: "기초대사량 계산기",     desc: "하루에 쓰는 최소 칼로리" },
      { href: "calorie.html", name: "칼로리 계산기", desc: "활동량까지 넣어서" },
      { href: "bp.html",      name: "혈압 계산기", desc: "학회 기준으로 어느 구간인지" },
      { href: "walk.html",    name: "걷기 칼로리 계산기", desc: "얼마 걸으면 얼마가 소모되는지" }
    ]
  },
  {
    id: "lotto", name: "로또", home: "lotto.html",
    desc: "역대 당첨번호 조회와 번호 생성기",
    items: [
      { href: "lotto.html",      name: "로또당첨번호 조회", desc: "회차별 번호와 등수별 당첨금" },
      { href: "lotto-gen.html",  name: "로또번호 생성기", desc: "조건을 정해서 번호를 뽑습니다" },
      { href: "lotto-stat.html", name: "로또번호 통계",     desc: "출현 횟수와 미출현 기간" },
      { href: "lotto-my.html",   name: "내 로또번호 저장",       desc: "저장해 두면 자동으로 대조" },
      { href: "lotto-tax.html",  name: "로또 당첨금 계산기", desc: "세금 떼고 얼마를 받는지" }
    ]
  },
  {
    id: "info", name: "정보나누기", home: "info.html",
    desc: "알아두면 도움이 되는 이야기",
    catOnly: true,
    cats: [
      { href: "info-money.html",  name: "금융",   desc: "보험료, 대출, 부가세, 연말정산" },
      { href: "info-estate.html", name: "부동산", desc: "집 살 때 드는 돈, 평수, 대출 한도, 전세" },
      { href: "info-life.html",   name: "생활",   desc: "만 나이, 기초연금" },
      { href: "info-lotto.html",  name: "로또",   desc: "확률, 당첨금과 세금, 수령 방법" }
    ],
    items: [
      { g:"금융", d:"2026-10-09", t:"compound.html,savings.html", href:"info-compound-cycle.html", name:"복리 적금 연복리 월복리 차이, 이자 주기가 수익에 미치는 실전 비교", desc:"1,000만원 10년, 월복리가 연복리보다 105,884원 많습니다" },
      { g:"금융", d:"2026-10-09", t:"loan.html", href:"info-loan-term.html", name:"대출 상환기간 이자 차이 비교, 기간 길어지면 총이자는 얼마나 늘어날까?", desc:"3억 20년→40년, 월 약 56만 원 줄고 총이자 약 1억 7,600만 원 늘어납니다" },
      { g:"금융", d:"2026-10-09", t:"car.html", href:"info-car-down.html", name:"자동차 할부 선수금 이자 차이 비교, 선수금 비율에 따른 월 납입금 총정리", desc:"4,000만 원 차, 선수금 30%면 0%보다 총이자 약 175만 원 적습니다" },
      { g:"부동산", d:"2026-10-09", t:"ltv.html", href:"info-ltv-rate.html", name:"규제지역 LTV 40% vs 비규제지역 70%, 5억 집 살 때 내 돈 얼마 필요할까?", desc:"5억 집, 내 돈 3억 원 vs 1억 5,000만 원" },
      { g:"금융", d:"2026-10-08", t:"salary.html", href:"info-minwage-2027.html", name:"2027년 최저임금 시급 10,700원 확정: 월급 환산액과 실수령액 정리", desc:"시급 10,700원, 월 환산 2,236,300원, 월 실수령액 약 1,986,018원" },
      { g:"생활", d:"2026-10-08", t:"bmi.html", href:"info-bmi-table.html", name:"키별 정상 체중 표와 BMI 계산법: 대한비만학회 기준 정리", desc:"키 170cm 정상 체중 53.5~66.2kg, 키별 표준 체중과 정상 범위" },
      { g:"금융", d:"2026-10-08", t:"loan.html", href:"info-loan-rate.html", name:"대출금리 0.5%p 차이, 3억 주담대 월 상환액과 총이자는 얼마나 달라질까?", desc:"3억 30년, 금리 0.5%p 오르면 월 +88,861원, 총이자 +3,199만 원" },
      { g:"금융", d:"2026-10-08", t:"salary.html", href:"info-raise-net.html", name:"연봉 500만원 인상되면 월급 실수령액은 얼마나 늘어날까?", desc:"500만 원 인상 시 월 실수령액 +317,546원, 인상분의 약 76%" },
      { g:"금융", d:"2026-10-08", t:"salary.html", href:"info-meal-allowance.html", name:"식대 비과세 20만원에 따른 연봉별 실수령액 차이와 조건 총정리", desc:"월 비과세 20만 원이면 연봉 5,000만 원 기준 월 47,578원 차이" },
      { g:"금융", d:"2026-10-07", t:"cartax.html", href:"info-car-acq-tax.html", name:"자동차 취득세 계산법 총정리: 부가세 제외 금액부터 감면 혜택까지", desc:"광고 가격 3,300만 원 신차 취득세 210만 원, 경차·전기차 감면 계산" },
      { g:"금융", d:"2026-10-07", t:"jeonse.html", href:"info-jeonse-deduction.html", name:"전세대출 이자 연말정산 절세 팁: 원리금 상환액 40% 소득공제 계산법", desc:"이자만 내도 상환액의 40%, 청약저축과 합쳐 연 400만 원 한도" },
      { g:"금융", d:"2026-10-07", t:"cartax.html", href:"info-ev-cartax.html", name:"전기차 자동차세 13만원의 비밀: 2,000cc 내연기관 자동차세와 10년 유지비 실제 비교", desc:"10년 합계 전기차 130만 원, 2,000cc 약 426만 4천 원" },
      { g:"금융", d:"2026-10-07", t:"salary.html", href:"info-pension-credit.html", name:"연금저축 IRP 세액공제 한도 및 환급액 계산 방법 (연 900만원 최적 활용법)", desc:"연금저축 600만 원 + IRP 300만 원, 최대 148만 5천 원을 돌려받습니다" },
      { g:"부동산", d:"2026-10-06", t:"broker.html", href:"info-broker-rent.html", name:"월세 중개수수료 계산법: 환산보증금 공식과 상한요율 한눈에 보기", desc:"월세 5만 원이 오르면 환산보증금은 500만 원 늘어납니다" },
      { g:"금융", d:"2026-10-06", t:"insurance.html", href:"info-nps-rate.html", name:"국민연금 보험료율 인상으로 내 월급 얼마 줄까? 월 300만원 실수령액 변화 계산", desc:"2033년까지 매년 0.5%포인트씩 오릅니다" },
      { g:"금융", d:"2026-10-06", t:"cartax.html", href:"info-cartax-prepay.html", name:"자동차세 연납 할인 혜택 총정리: 1월부터 9월까지 공제율 및 절세 금액 비교", desc:"1월에 내면 약 4.58%, 9월에 내면 약 1.25% 공제" },
      { g:"부동산", d:"2026-10-06", t:"acquisition.html", href:"info-multi-home-tax.html", name:"다주택자 취득세 중과 세율 총정리: 2주택 8%·3주택 12% 적용 기준", desc:"같은 6억 집이 660만 원에서 7,440만 원으로" },
      { g:"금융", d:"2026-10-06", t:"salary.html", href:"info-income-tax.html", name:"월급 소득세 계산 방법: 연봉별 실수령액과 부양가족 감면 혜택 정리", desc:"연봉은 3.3배인데 소득세는 약 30배입니다" },
      { g:"금융", d:"2026-10-06", t:"jeonse.html", href:"info-rent-credit.html", name:"월세 세액공제 조건부터 환급액 계산까지 한눈에 알아보기", desc:"월세의 15~17%를 최대 170만 원까지 돌려받습니다" },
      { g:"금융", d:"2026-10-06", t:"salary.html", href:"info-medical-credit.html", name:"연말정산 의료비 세액공제 조건부터 공제율까지 한눈에 보기", desc:"총급여의 3%를 넘은 의료비의 15%를 돌려받습니다" },
      { g:"부동산", d:"2026-10-06", t:"pyeong.html", href:"info-officetel-area.html", name:"오피스텔 전용률의 비밀: 아파트와 실평수 차이 나는 결정적 이유", desc:"같은 30평인데 실평수가 6평 차이납니다" },
      { g:"생활", d:"2026-10-06", t:"birthday.html", href:"info-birthday.html", name:"살아온 날 계산법: 내가 태어난 지 며칠째인지 10000일 기념일 확인하는 법", desc:"1만 일은 만 27세 무렵에 옵니다" },
      { g:"생활", d:"2026-10-06", t:"datecalc.html", href:"info-datecalc.html", name:"날짜 더하기 계산법: '한 달 뒤'와 '30일 뒤'가 다른 이유", desc:"1월 31일에서 한 달 뒤는 2월 28일입니다" },
      { g:"생활", d:"2026-10-05", t:"dday.html", href:"info-dday.html", name:"디데이 계산법 총정리: 기념일 100일 세는 법과 당일 포함 기준", desc:"같은 100일인데 하루가 달라지는 이유" },
      { g:"생활", d:"2026-10-05", t:"walk.html", href:"info-walk.html", name:"걷기 1만보 칼로리 계산: 체중별 소모량과 속도별 걸리는 시간 완벽 정리", desc:"체중 60kg과 80kg은 98kcal 차이가 납니다" },
      { g:"생활", d:"2026-10-05", t:"calorie.html", href:"info-calorie.html", name:"하루 필요 칼로리 계산법: 성별·활동량별 권장 칼로리 완벽 정리", desc:"활동량에 따라 하루 860kcal 차이가 납니다" },
      { g:"생활", d:"2026-10-05", t:"bmr.html", href:"info-bmr.html", name:"기초대사량 계산법 총정리: 성별·나이·체중별 평균과 공식 비교", desc:"나이가 들면 10년에 57kcal씩 줄어듭니다" },
      { g:"금융", d:"2026-10-05", t:"car.html", href:"info-car.html", name:"자동차 할부 이자 계산법: 3,000만 원 대출 시 기간·금리별 총이자 비교", desc:"기간이 길면 이자가 191만 원 늘어납니다" },
      { g:"금융", d:"2026-10-04", t:"savings.html", href:"info-interest-tax.html", name:"예적금 이자소득세 15.4% 계산법과 상호금융 1.4% 저율과세 절세 꿀팁", desc:"조합원이면 세율이 다릅니다" },
      { g:"생활", d:"2026-10-04", t:"bmi.html", href:"info-bmi.html", name:"BMI 아시아 태평양 기준 차이점: 서양 기준과 다른 비만 판정 수치 총정리", desc:"기준이 두 개입니다" },
      { g:"금융", d:"2026-10-04", t:"prepay.html", href:"info-prepay.html", name:"대출 중도상환수수료 계산법과 2026년 인하 기준 비교 가이드", desc:"3년만 지나면 0원입니다" },
      { g:"금융", d:"2026-10-04", t:"salary.html", href:"info-salary.html", name:"연봉 5천만원인데 월급이 353만원인 이유", desc:"세전과 실수령의 거리" },
      { g:"생활", d:"2026-10-04", t:"bp.html", href:"info-bp.html", name:"혈압 120에 80은 정상이 아닙니다", desc:"정상의 조건은 '그리고'" },
      { g:"금융", d:"2026-10-03", t:"compound.html", href:"info-compound.html", name:"복리와 단리, 10년이면 얼마나 벌어지나", desc:"1천만원에 80만원 차이" },
      { g:"부동산", d:"2026-10-03", t:"broker.html", href:"info-broker.html", name:"집값 1천만원 차이로 중개수수료가 94만원 갈립니다", desc:"구간이 바뀌는 지점" },
      { g:"금융", d:"2026-10-02", t:"vat.html", href:"info-vat-split.html", name:"부가세 계산에서 1원이 틀리는 이유", desc:"1.1로 나누면 안 됩니다" },
      { g:"생활", d:"2026-10-02", t:"baby.html", href:"info-baby.html", name:"아기 백일과 돌은 세는 법이 다릅니다", desc:"하나는 99일 뒤, 하나는 1년 뒤" },
      { g:"금융", d:"2026-10-01", t:"cartax.html", href:"info-cartax.html", name:"같은 차인데 자동차세가 다른 이유", desc:"배기량과 차령이 가릅니다" },
      { g:"부동산", d:"2026-10-01", t:"acquisition.html", href:"info-acquisition.html", name:"6억 집과 6억 1천만원 집, 취득세가 다릅니다", desc:"구간이 바뀌는 지점" },
      { g:"금융", d:"2026-09-27", t:"vat.html", href:"info-vat-oct.html",   name:"10월 부가세 예정고지 총정리: 개인사업자 납부액 계산부터 가산세 방지 팁", desc:"미리 내고 1월에 뺍니다" },
      { g:"부동산", d:"2026-09-27", t:"pyeong.html", href:"info-pyeong.html",  name:"아파트 평수 계산법 완벽 정리: 84㎡가 34평이 되는 전용면적·공급면적의 비밀", desc:"재는 범위가 다릅니다" },
      { g:"금융", d:"2026-09-15", t:"savings.html", href:"info-savings.html",    name:"적금 이자가 생각보다 적은 이유와 예금 차이 총정리", desc:"48만원이 아닙니다" },
      { g:"금융", d:"2026-09-15", t:"retire.html", href:"info-retire.html",     name:"퇴직금 회사 계산과 내 계산이 다른 이유: 상여금과 연차수당 계산법", desc:"상여금과 연차수당을 빼먹으면" },
      { g:"부동산", d:"2026-09-15", t:"jeonse.html", href:"info-jeonse-rate.html", name:"전월세 전환율 계산법 총정리: 전세 3억을 월세로 바꿀 때 월세 얼마일까?", desc:"전환율 상한은 5%" },
      { g:"금융", d:"2026-09-11", t:"salary.html", href:"info-yearend-plan.html", name:"연말정산 준비는 12월 31일 전에 끝내야 하는 이유: 홈택스 미리보기 활용법", desc:"2월은 서류만 내는 날" },
      { g:"금융", d:"2026-09-08", t:"insurance.html", href:"info-insurance.html", name:"2026년 4대보험 요율 개정 총정리: 국민연금 인상과 월급 300만 원 실수령액 변화", desc:"국민연금이 28년 만에 올랐습니다" },
      { g:"금융", d:"2026-09-08", t:"loan.html", href:"info-loan.html",      name:"원리금균등 vs 원금균등 차이 비교, 나에게 유리한 대출 상환방식은?", desc:"원리금균등과 원금균등" },
      { g:"금융", d:"2026-09-08", t:"insurance.html", href:"info-jobless.html",   name:"실업급여 조건 총정리: 고용보험 180일 계산법부터 자발적 퇴사 예외까지", desc:"보수 받은 날만 셉니다" },
      { g:"금융", d:"2026-09-08", t:"salary.html", href:"info-yearend.html",   name:"연말정산 공제 절세 전략: 신용카드 25% 법칙부터 놓치기 쉬운 부양가족 조건까지", desc:"체크카드가 두 배입니다" },
      { g:"부동산", d:"2026-09-08", t:"acquisition.html", href:"info-buyhome.html", name:"6억 아파트 집 살 때 드는 부대비용 총정리: 취득세부터 등기 비용까지", desc:"집값의 1.8%" },
      { g:"부동산", d:"2026-09-08", t:"ltv.html", href:"info-dsr.html",     name:"DSR LTV 차이 총정리: 집값과 소득으로 결정되는 대출 한도의 비밀", desc:"연소득 40%의 벽" },
      { g:"부동산", d:"2026-09-08", t:"jeonse.html", href:"info-jeonse.html",  name:"전세 계약할 때 주의사항 총정리: 전입신고 대항력 시점부터 등기부등본 확인법까지", desc:"효력은 다음 날 0시부터" },
      { g:"생활", d:"2026-09-08", t:"age.html", href:"info-age.html",       name:"만 나이 계산법 총정리: 세는나이·연나이 차이점과 술·담배 연나이 예외 기준", desc:"태어나면 0세입니다" },
      { g:"생활", d:"2026-09-08", t:"age.html", href:"info-pension.html",   name:"기초연금 수급 조건 완벽 정리: 소득인정액 계산법부터 부부감액 예방법까지", desc:"재산도 소득으로 환산합니다" },
      { g:"로또", d:"2026-09-07", t:"lotto.html,lotto-gen.html,lotto-stat.html", href:"guide-odds.html",     name:"로또 1등 확률 계산법: 814만 분의 1 수학적 구조와 조합 원리 분석", desc:"45개 중 6개 고르기" },
      { g:"로또", d:"2026-09-07", t:"lotto.html,lotto-my.html,lotto-tax.html", href:"guide-prize.html",    name:"로또 1등 당첨금 세금 계산법: 20억 당첨 시 실제 수령하는 실수령액은 얼마일까?", desc:"3억을 넘으면 33%" },
      { g:"로또", d:"2026-09-07", t:"lotto-gen.html,lotto-stat.html,lotto-my.html", href:"guide-stats.html",    name:"로또 번호 통계 분석: 1,244회 출현 횟수로 보는 수학적 무작위성", desc:"무작위라서 생기는 흔들림" },
      { g:"로또", d:"2026-09-07", t:"lotto.html,lotto-my.html,lotto-tax.html", href:"guide-claim.html",    name:"로또 당첨금 수령방법 완벽 정리: 금액별 수령 장소와 필수 준비물", desc:"금액에 따라 가는 곳이 다릅니다" }
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
  /* 구글 애널리틱스로 "이 버튼이 눌렸다"를 보냅니다.
     gtag 가 없는 환경(광고차단·오프라인)에서도 오류가 나지 않도록 감쌉니다.
     쓰는 법: U.track("share_click", { page: "loan.html" }) */
  track: function (name, params) {
    try {
      if (typeof gtag !== "function") return;
      var p = params || {};
      p.page_path = location.pathname.replace(/^\//, "") || "index.html";
      gtag("event", name, p);
    } catch (e) {}
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
      '<a class="brand" href="index.html">' +
        '<svg class="bird" viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">' +
          '<defs><radialGradient id="bgd" cx="34%" cy="28%">' +
            '<stop offset="0" stop-color="#FFE063"/><stop offset="46%" stop-color="#FBC400"/>' +
            '<stop offset="100%" stop-color="#D79B00"/></radialGradient></defs>' +
          '<circle cx="13" cy="13" r="13" fill="url(#bgd)"/>' +
          '<circle cx="13" cy="13" r="13" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1"/>' +
        '</svg>' +
        '<b>참새<em>방앗간</em></b></a>' +
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
        U.track("favorite_remove", { tool: (item ? item.name : page) });
      } else {
        favs.push(page);
        U.store.set("favs", favs);
        U.toast("왼쪽 '자주 쓰는 것'에 담았습니다");
        U.track("favorite_add", { tool: (item ? item.name : page) });
      }
      syncFav(); renderFav();
      /* 저장이 안 되는 환경이면 알려 줍니다 */
      if (U.store.get("favs", null) === null) {
        U.toast("이 브라우저에서는 저장되지 않습니다");
      }
    };

    document.getElementById("fabShare").onclick = function () {
      var url = location.href;
      /* 홈·소개처럼 도구가 아닌 화면에는 item이 없습니다. 없으면 문서 제목을 씁니다 */
      var h1 = document.querySelector("h1");
      var title = item ? item.name + " · 참새방앗간"
                : (h1 ? h1.textContent.trim() + " · 참새방앗간" : document.title);
      U.track("share_click", { tool: (item ? item.name : (h1 ? h1.textContent.trim() : page)) });
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
    "info-salary.html": '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7 10v4M17 10v4"/>',
    "info-bp.html": '<path d="M12 20s-7-4.5-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.5-7 9-7 9z"/><path d="M4 13h4l1.5-3 2 6 1.5-3h5"/>',
    "info-cartax.html": '<path d="M4 16v-3l2-5h12l2 5v3"/><path d="M4 16h16v3h-3v-3M7 19H4v-3"/><circle cx="7.5" cy="16.5" r="1"/><circle cx="16.5" cy="16.5" r="1"/>',
    "info-acquisition.html": '<path d="M4 10l8-6 8 6v10H4z"/><path d="M12 12v5M10 14h4"/>',
    "info-vat-split.html": '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M12 15v3"/>',
    "info-baby.html": '<rect x="3" y="10" width="18" height="11" rx="2"/><path d="M12 10V6M9 6a3 3 0 013-3 3 3 0 013 3M3 15h18"/>',
    "info-compound.html": '<path d="M3 18l5-6 4 3 6-8"/><path d="M14 7h5v5"/>',
    "info-broker.html": '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><circle cx="12" cy="10" r="1.5"/>',
    "info-prepay.html": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "info-bmi.html": '<path d="M4 8h16l1 12H3z"/><path d="M8 8V6a4 4 0 018 0v2"/><path d="M12 12v4M10 14h4"/>',
    "info-minwage-2027.html": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "info-bmi-table.html": '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8"/><path d="M12 8v4"/>',
    "info-loan-rate.html": '<path d="M4 20V10l8-6 8 6v10z"/><path d="M9 20v-6h6v6"/><path d="M12 9v2"/>',
    "info-raise-net.html": '<path d="M4 18l6-6 4 4 6-8"/><path d="M15 8h5v5"/>',
    "info-meal-allowance.html": '<path d="M4 3v8a3 3 0 003 3v7"/><path d="M7 3v6"/><path d="M10 3v8a3 3 0 01-3 3"/><path d="M18 3c-2 2-3 5-3 8h3v10"/>',
    "info-car-acq-tax.html": '<path d="M3 15l2-6h14l2 6"/><path d="M3 15h18v4H3z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
    "info-jeonse-deduction.html": '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/>',
    "info-ev-cartax.html": '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    "info-compound-cycle.html": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M8 4l-2 2M16 4l2 2"/>',
    "info-loan-term.html": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8 15h8"/>',
    "info-car-down.html": '<path d="M5 16l1.5-5a2 2 0 011.9-1.4h7.2a2 2 0 011.9 1.4L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r=".8"/><circle cx="16.5" cy="18" r=".8"/>',
    "info-ltv-rate.html": '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-5h6v5"/><path d="M9 13h6"/>',
    "info-pension-credit.html": '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    "info-officetel-area.html": '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
    "info-medical-credit.html": '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v10M7 12h10"/>',
    "info-rent-credit.html": '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 14h6M9 17h6"/>',
    "info-income-tax.html": '<circle cx="12" cy="12" r="9"/><path d="M8 9l1.5 6 2.5-5 2.5 5L16 9M7 12h10"/>',
    "info-multi-home-tax.html": '<path d="M3 11l5-4 5 4"/><path d="M4.5 10v8h7v-8"/><path d="M11 8l5-4 5 4"/><path d="M12.5 7v11h7V7"/>',
    "info-cartax-prepay.html": '<path d="M5 16l1.5-5a2 2 0 011.9-1.4h7.2a2 2 0 011.9 1.4L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r=".8"/><circle cx="16.5" cy="18" r=".8"/><path d="M12 3v4M10 5h4"/>',
    "info-nps-rate.html": '<path d="M3 7h16a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M3 7l12-3v3"/><circle cx="17" cy="13.5" r="1"/>',
    "info-broker-rent.html": '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    "info-birthday.html": '<path d="M4 11h16v9H4z"/><path d="M12 11v9M4 15.5h16"/><path d="M12 11c-2-3-5-3-5-1s3 1 5 1zM12 11c2-3 5-3 5-1s-3 1-5 1z"/>',
    "info-datecalc.html": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5"/>',
    "info-dday.html": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    "info-walk.html": '<path d="M8 4c-2 0-3 2-3 4 0 3 2 4 3 7v3h3v-3c0-3 1-4 1-7 0-2-1-4-4-4z"/><path d="M16 9c-1.5 0-2.5 1.5-2.5 3 0 2.5 1.5 3.5 2 5.5v2h2.5v-2c0-2.5 1-3 1-5.5 0-1.5-1-3-3-3z"/>',
    "info-calorie.html": '<path d="M7 3v8M5 3v5a2 2 0 004 0V3"/><path d="M7 11v10"/><path d="M17 3c-2 1-3 4-3 7h3v11"/>',
    "info-bmr.html": '<path d="M12 3s5 4 5 9a5 5 0 01-10 0c0-5 5-9 5-9z"/><path d="M12 20v-5"/>',
    "info-car.html": '<path d="M5 16l1.5-5a2 2 0 011.9-1.4h7.2a2 2 0 011.9 1.4L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r=".8"/><circle cx="16.5" cy="18" r=".8"/>',
    "info-interest-tax.html": '<path d="M3 7h18v12H3z"/><path d="M3 11h18M7 15h4"/>',
    "info-vat-oct.html":     '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M12 15v3"/>',
    "info-pyeong.html":      '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M11 10v10M15 14h3"/>',
    "info-savings.html":     '<path d="M3 7h18v12H3z"/><path d="M3 11h18M7 15h4"/>',
    "info-retire.html":      '<path d="M4 20v-2a5 5 0 015-5h6a5 5 0 015 5v2"/><circle cx="12" cy="7" r="4"/>',
    "info-jeonse-rate.html": '<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/>',
    "vat.html":       '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    "cartax.html":    '<path d="M4 16v-3l2-5h12l2 5v3"/><path d="M4 16h16v3h-3v-3M7 19H4v-3"/><circle cx="7.5" cy="16.5" r="1"/><circle cx="16.5" cy="16.5" r="1"/>',
    "pyeong.html":    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M11 10v10"/>',
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
    "info-yearend-plan.html":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15l2 2 4-4"/>',
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

/* ============================================================
   어떤 버튼이 실제로 눌리는지 기록합니다 (구글 애널리틱스)

   페이지마다 코드를 넣지 않고, 문서 전체에서 클릭을 한 번에 받아
   버튼의 id 를 보고 종류를 가립니다. 새 계산기를 만들 때
   실행 버튼 id 를 'go' 로 두면 따로 손댈 필요가 없습니다.
   ============================================================ */
(function () {
  /* id → 보낼 사건 이름 */
  var MAP = {
    go:       "calc_run",      goA:  "calc_run",   goB: "calc_run",
    goSum:    "calc_run",
    goFast:   "lotto_draw_fast",
    btnCopy:  "lotto_copy",    btnSave: "lotto_save",
    btnClear: "lotto_clear",   btnWipe: "lotto_wipe"
  };

  function toolName() {
    var page = (location.pathname.split("/").pop() || "index.html");
    if (typeof SECTIONS !== "undefined") {
      for (var i = 0; i < SECTIONS.length; i++) {
        var it = SECTIONS[i].items;
        for (var j = 0; j < it.length; j++) if (it[j].href === page) return it[j].name;
      }
    }
    return page;
  }

  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!b) return;

    var name = MAP[b.id];

    /* 로또 번호 뽑기 버튼은 페이지마다 id 가 'go' 라서 따로 가립니다 */
    if (b.id === "go" && b.classList.contains("gbtn")) name = "lotto_draw";

    if (!name) return;
    U.track(name, { tool: toolName() });
  }, true);
})();

/* ============================================================
   첫 화면 그림: 좁은 화면에서 방앗간이 잘리지 않게 합니다

   그림은 세로에 맞춰 확대되므로(slice), 상자가 세로로 길어지면
   좌우가 잘려 나갑니다. 글자가 많을수록 상자가 길어져 더 잘립니다.
   방앗간은 오른쪽 끝(x 636~806)에 있어서 폰에서는 통째로 잘렸습니다.

   고치는 방법: 폰에서는 자르는 기준을 가운데(xMid)가 아니라
   오른쪽(xMax)으로 바꾸고, viewBox 오른쪽 끝을 840으로 당깁니다.
   그러면 잘리는 쪽은 왼쪽 하늘이 되고, 방앗간은 늘 오른쪽에 남습니다.
   ★ 가운데로 옮기지 말 것. 방앗간은 오른쪽 구석에 있어야 합니다.

   ★ 719px 은 style.css 와 반드시 같아야 합니다. 한쪽만 고치면
     참새가 안 보이는 자리를 날아다니게 됩니다.
   ============================================================ */
(function () {
  var WIDE   = { vb: "0 0 900 260", par: "xMidYMid slice" };  /* 넓은 화면: 그림 전체 */
  var NARROW = { vb: "0 0 840 260", par: "xMaxYMid slice" };  /* 좁은 화면: 오른쪽에 붙임 */

  function fit() {
    var svg = document.querySelector(".heroart");
    if (!svg) return;
    var m = window.matchMedia("(max-width:719px)").matches ? NARROW : WIDE;
    if (svg.getAttribute("viewBox") !== m.vb) svg.setAttribute("viewBox", m.vb);
    if (svg.getAttribute("preserveAspectRatio") !== m.par) svg.setAttribute("preserveAspectRatio", m.par);
  }

  document.addEventListener("DOMContentLoaded", fit);
  if (document.readyState !== "loading") fit();
  window.addEventListener("resize", fit);
})();

/* ---------- 계산기 아래 '관련 글' 목록 (검색 + 번호 넘기기) ----------
   정보나누기 items 에서 t 가 이 계산기와 같은 글을 모아 최신순으로 보여줍니다.
   글이 하나도 없는 계산기에는 아무것도 붙이지 않습니다. */
(function () {
  "use strict";
  var PER = 20;
  var page = (location.pathname.split("/").pop() || "index.html");
  var main = document.querySelector("main");
  if (!main || typeof SECTIONS === "undefined") return;

  var posts = [], isTool = false;
  SECTIONS.forEach(function (s) {
    if (s.id !== "info" && s.items.some(function (x) { return x.href === page; })) isTool = true;
    if (s.id !== "info") return;
    s.items.forEach(function (it, i) {
      if (!it.t) return;
      var ts = String(it.t).split(",").map(function (x) { return x.trim(); });
      if (ts.indexOf(page) < 0) return;
      posts.push({ it: it, i: i });
    });
  });
  if (!isTool) return;
  posts.sort(function (a, b) {
    return a.it.d < b.it.d ? 1 : a.it.d > b.it.d ? -1 : a.i - b.i;
  });
  posts = posts.map(function (p) { return p.it; });

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function norm(t) { return String(t).toLowerCase().replace(/\s+/g, " ").trim(); }

  var card = document.createElement("div");
  card.className = "card rposts";
  card.id = "rposts";
  card.innerHTML =
    '<h2>관련 글 <span class="rcount" id="rcount"></span></h2>' +
    '<div class="rsearch"><input type="search" id="rq" placeholder="글 제목으로 찾기 (예: 연말정산, 세금)" ' +
    'autocomplete="off" enterkeyhint="search" aria-label="관련 글 검색"></div>' +
    '<div class="postlist" id="rlist"></div>' +
    '<div class="rempty" id="rempty" hidden>검색어와 맞는 글이 없습니다. 다른 단어로 찾아보세요.</div>' +
    '<nav class="pager" id="rpager" aria-label="글 목록 페이지"></nav>';
  main.appendChild(card);

  if (!posts.length) {
    card.querySelector(".rsearch").hidden = true;
  }
  var $q = card.querySelector("#rq"), $list = card.querySelector("#rlist"),
      $pager = card.querySelector("#rpager"), $empty = card.querySelector("#rempty"),
      $count = card.querySelector("#rcount");
  var cur = 1, shown = posts;

  function render(scroll) {
    var pages = Math.max(1, Math.ceil(shown.length / PER));
    if (cur > pages) cur = pages;
    var from = (cur - 1) * PER;
    $list.innerHTML = shown.slice(from, from + PER).map(function (it) {
      return '<a class="post rrow" href="' + esc(it.href) + '"><b>' + esc(it.name) +
        '</b><i>' + esc(it.d.slice(2).replace(/-/g, ".")) + '</i></a>';
    }).join("");
    $empty.hidden = shown.length > 0;
    if (!posts.length) $empty.textContent = "이 계산기와 관련된 글을 준비하고 있습니다.";
    $count.textContent = !posts.length ? "" : shown.length === posts.length ? posts.length + "편" : shown.length + "/" + posts.length + "편";
    var h = "";
    if (pages > 1) {
      if (cur > 1) h += '<button type="button" data-p="' + (cur - 1) + '">‹ 이전</button>';
      for (var n = 1; n <= pages; n++)
        h += '<button type="button" data-p="' + n + '"' + (n === cur ? ' class="on" aria-current="page"' : "") + ">" + n + "</button>";
      if (cur < pages) h += '<button type="button" data-p="' + (cur + 1) + '">다음 ›</button>';
    }
    $pager.innerHTML = h;
    if (scroll) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $q.addEventListener("input", function () {
    var words = norm($q.value).split(" ").filter(Boolean);
    shown = !words.length ? posts : posts.filter(function (it) {
      var hay = norm(it.name + " " + (it.desc || "") + " " + it.g);
      return words.every(function (w) { return hay.indexOf(w) >= 0; });
    });
    cur = 1; render(false);
  });
  $pager.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-p]");
    if (!b) return;
    cur = Number(b.dataset.p); render(true);
  });
  render(false);
})();
