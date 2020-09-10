const mentorsSubmit = [
  {
    name: "정진호",
    gender: "남",
    univ: "서울대 생명과학부 20학번",
    high: "휘문고등학교 졸업",
    method: "정시 전형",
    eng: "jinho",
    oneWord: "휘문고에서 내신과 정시를 완벽하게 준비한 진호 멘토님",
    mentoring: ["수시 정시 동시", "학습법 전문", "슬럼프 극복"],
    // label 0: 모집중, 1: 마감임박
    label: 1,
    //labelNum 몇자리 남았어요에 들어가는 숫자 (모집중이나 마감임박이나 다 써줘야함)
    labelNum: 4,
    // sort 1:휘문고, 2:숙명여고, 3:단대부고, 4:개포고, 5:진선여고, 6:그외
    sort: 1,
  },

  {
    name: "유현우",
    gender: "남",
    univ: "연세대 도시공학과 20학번",
    high: "현대고등학교 졸업",
    method: "특기자 전형",
    eng: "hyunwoo",
    oneWord: "학생부를 완벽하게 준비한 현우 멘토님",
    mentoring: ["멘탈 관리", "진로 설정", "수시 전문"],
    label: 0,
    labelNum: 7,
    sort: 6,
  },

  {
    name: "오선빈",
    gender: "여",
    univ: "서울대 수의예과 19학번",
    high: "진선여자고등학교 졸업",
    method: "수시 일반 전형",
    eng: "sunbin",
    oneWord: "학생을 진심으로 도와주는 선빈 멘토님",
    mentoring: ["과목별 공부법", "멘탈 관리", "진선여고 내신"],
    label: 1,
    labelNum: 3,
    sort: 5,
  },

  {
    name: "김예나",
    gender: "여",
    univ: "연세대 건축공학과 18학번",
    high: "경기여자고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "yena",
    oneWord: "스스로 공부하는 습관으로 전교 3등으로 졸업한 예나 멘토님",
    mentoring: ["경기여고 내신", "진로 설정", "슬럼프 극복"],
    label: 1,
    labelNum: 2,
    sort: 6,
  },

  {
    name: "김태형",
    gender: "남",
    univ: "연세대 전기전자공학부 20학번",
    high: "휘문고등학교 졸업",
    method: "논술 전형",
    eng: "taehyung",
    oneWord: "급격한 성적 상승을 약속하는 태형 멘토님",
    mentoring: ["논술 전문", "성적 상승", "학습 습관 관리"],
    label: 1,
    labelNum: 3,
    sort: 1,
  },

  {
    name: "조예은",
    gender: "여",
    univ: "서울대 미학과 19학번",
    high: "은광여자고등학교 졸업",
    method: "수시 일반 전형",
    eng: "yeeun",
    oneWord:
      "스스로 학생부를 채워 서울대 연세대 고려대를 동시 합격한 예은 멘토님",
    mentoring: ["SKY 동시 합격", "은광여고 내신", "진로 설정"],
    label: 0,
    labelNum: 4,
    sort: 6,
  },

  {
    name: "임채현",
    gender: "남",
    univ: "연세대 중어중문학과 20학번",
    high: "개포고등학교 졸업",
    method: "정시 전형",
    eng: "chaehyun",
    oneWord: "냉정하게 현실을 알려주지만 누구보다 따뜻한 채현 멘토님",
    mentoring: ["엄격한 코치", "성적 상승", "전문적인"],
    label: 0,
    labelNum: 5,
    sort: 4,
  },

  {
    name: "김민영",
    gender: "여",
    univ: "고려대 경영학과 20학번",
    high: "숙명여자고등학교 졸업",
    method: "학교장 추천 전형",
    eng: "minyoung",
    oneWord: "부모님 도움 없이 스스로 입시를 해낸 민영 멘토님",
    mentoring: ["자기 주도 학습", "숙명여고 내신", "동기 부여"],
    label: 0,
    labelNum: 4,
    sort: 2,
  },

  {
    name: "정현진",
    gender: "여",
    univ: "서울대 기계공하전공 19학번",
    high: "숙명여자고등학교 졸업",
    method: "수시 일반 전형",
    eng: "hyunjin",
    oneWord: "효율적인 공부법으로 서울대와 카이스트를 동시 합격한 현진 멘토님",
    mentoring: ["숙명여고 이과", "진로 설정", "효율적인 공부"],
    label: 1,
    labelNum: 3,
    sort: 2,
  },

  {
    name: "장하연",
    gender: "여",
    univ: "연세대 실내건축학과 19학번",
    high: "숙명여자고등학교 졸업",
    method: "정시 전형",
    eng: "hayeon",
    oneWord:
      "고등학교 생활을 후회없이, 성공적으로 보낼 수 있도록 도와주는 하연 멘토님",
    mentoring: ["성적 상승", "숙명여고 정시", "학교 생활"],
    label: 0,
    labelNum: 3,
    sort: 2,
  },

  {
    name: "유다영",
    gender: "여",
    univ: "연세대 경제학과 19학번",
    high: "숙명여자고등학교 졸업",
    method: "논술 전형",
    eng: "dayoung",
    oneWord: "방향성과 지름길을 알려주는 다영 멘토님",
    mentoring: ["이과 문과 전향", "효율적인 공부", "언니 같은 멘토"],
    label: 1,
    labelNum: 2,
    sort: 2,
  },

  {
    name: "허나연",
    gender: "여",
    univ: "고려대 한문학과 20학번",
    high: "진선여자고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "nayeon",
    oneWord: "코로나로 인한 슬럼프를 극복하게 해주는 나연 멘토님",
    mentoring: ["슬럼프 극복", "진선여고 내신", "성적 급상승"],
    label: 1,
    labelNum: 3,
    sort: 5,
  },

  {
    name: "염지윤",
    gender: "여",
    univ: "서울대 윤리교육과 20학번",
    high: "개포고등학교 졸업",
    method: "학생부 교과 전형",
    eng: "jiyoon",
    oneWord:
      "선택과 집중으로 1학년 내신 2.87이었던 개포고 학생부를 완벽하게 해결한 지윤 멘토님",
    mentoring: ["개포고 내신", "성적 급상승", "학생부 전문"],
    label: 0,
    labelNum: 4,
    sort: 4,
  },

  {
    name: "이시연",
    gender: "남",
    univ: "서울대 농경제사회학부 20학번",
    high: "중산고등학교 졸업",
    method: "정시 전형",
    eng: "siyeon",
    oneWord: "모든 과목 공부법을 완벽하게 알려주는 시연 멘토님",
    mentoring: ["과목별 공부법", "중산고 내신", "성적 상승 곡선"],
    label: 0,
    labelNum: 4,
    sort: 6,
  },

  {
    name: "고혜준",
    gender: "여",
    univ: "서울대 의예과 20학번",
    high: "대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "hyejun",
    oneWord: "슬럼프를 극복해 서울대 의대에 진학한 혜준 멘토님",
    mentoring: ["서울대 의대", "슬럼프 극복", "과목별 공부법"],
    label: 1,
    labelNum: 2,
    sort: 6,
  },

  {
    name: "이서택",
    gender: "남",
    univ: "고려대 경영학과 20학번",
    high: "단대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "seotack",
    oneWord: "단대부고의 내신과 학생부를 완벽하게 해결해주는 서택 멘토님",
    mentoring: ["단대부고 내신", "학생부 전문", "친 형 같은"],
    label: 1,
    labelNum: 2,
    sort: 3,
  },

  {
    name: "옥승환",
    gender: "남",
    univ: "연세대 경영학과 20학번",
    high: "단대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "seunghwan",
    oneWord: "친근한 형처럼 다가가지만, 확실하게 알려주는 승환 멘토님",
    mentoring: ["정시 수시 동시", "단대부고 내신", "과목별 학습법"],
    label: 1,
    labelNum: 1,
    sort: 3,
  },

  {
    name: "박상하",
    gender: "남",
    univ: "연세대 의예과 20학번",
    high: "휘문고등학교 졸업",
    method: "정시 전형",
    eng: "sangha",
    oneWord: "휘문고에서 정시와 수시 모두로 의예과에 진학한 상하 멘토님",
    mentoring: ["연세대 의대", "정시 수시 동시", "학습 습관 관리"],
    label: 1,
    labelNum: 3,
    sort: 1,
  },
];

const submitUpper = document.querySelector(`.submit__upper`);

const temp = decodeURI(location.href);
console.log(temp);
const name = temp.split(":")[2];
console.log(name);

const major = parseInt(temp.split(":")[1].split("?")[1], 10);

let resultNum = 0;
let i = 0;

for (;;) {
  if (mentorsSubmit[i].name === name) {
    resultNum = i;
    break;
  }
  i++;
}

console.log(resultNum);

submitUpper.innerHTML = `<div class="submit__upper__column">
<img
  class="submit__mentor__img"
  src="./img/${mentorsSubmit[resultNum].eng}.jpeg"
  alt=""
/>
</div>
<div class="submit__upper__column">
<div class="submit__column">
  <div class="submit__price">
    <div class="submit__name__title">멘토링 진행 멘토</div>
    <input
      type="text"
      name="mentor"
      class="submit__mentor"
      placeholder="학생 이름"
      value="${mentorsSubmit[resultNum].name} 멘토님"
      readonly
    />
  </div>
</div>
<div class="submit__univ">
  <div class="submit__school">
    <div class="submit__name__title">멘토님 대학교</div>
    <div class="submit__class">
연세대
    </div>
  </div>
  <div class="submit__school">
    <div class="submit__name__title">출신 고등학교</div>
    <div class="submit__class">
휘문고 졸
    </div>
  </div>
</div>
</div>`;

const form = document.querySelector(".submitForm");
const submitName = document.querySelector(`.submit__name`);
const submitTel = document.querySelector(`.submit__tel`);
const submitStu = document.querySelector(`.submit__student`);
const submitCon = document.querySelector(`.submit__content`);
const submitBtn = document.querySelector(".submit__submit");
const submitBtnPar = document.querySelector(`.submit__button`);
const blackLoading = document.querySelector(".black__loading");
const thx = document.querySelector(`#thx`);

submitBtn.disabled = true;
let s1 = "";
let s2 = "";
let s3 = "";
let s4 = "";
function handleNameChange() {
  console.dir(submitName.value);
  s1 = submitName.value;
  let setI = setInterval(function () {
    console.log(s1, s2, s3, s4);
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 1000);
}

function handleTelChange() {
  console.dir(submitTel.value);
  s2 = submitTel.value;
}

function handleStuChange() {
  console.dir(submitStu.value);
  s3 = submitStu.value;
}

function handleConChange() {
  console.dir(submitCon.value);
  s4 = submitCon.value;
  let setI = setInterval(function () {
    console.log(s1, s2, s3, s4);
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 800);
}

function handleConClick() {
  s4 = "yes";
  let setI = setInterval(function () {
    console.log(s1, s2, s3, s4);
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 800);
}

submitName.addEventListener("change", handleNameChange);
submitTel.addEventListener("change", handleTelChange);
submitStu.addEventListener("change", handleStuChange);
submitCon.addEventListener("change", handleConChange);
submitCon.addEventListener("click", handleConClick);

console.dir(thx.style.display);

function handleSubmit() {
  setTimeout(function () {
    blackLoading.classList.remove("none");
    console.log(blackLoading.classList);
  }, 1);
  setTimeout(function () {
    blackLoading.style.opacity = 1;
  }, 10);

  setTimeout(function () {
    blackLoading.classList.add("none");
  }, 10000);

  let link = setInterval(function () {
    if (thx.style.display === "block") {
      blackLoading.style.opacity = 0;
      submitBtnPar.style.opacity = 0;

      setTimeout(function () {
        blackLoading.classList.add("none");
      }, 310);
      setTimeout(function () {
        location.href = "thankyou.html?" + name;
      }, 500);
      clearInterval(link);
    }
  }, 200);
}

function init() {
  submitBtnPar.addEventListener("click", handleSubmit);
}

init();
