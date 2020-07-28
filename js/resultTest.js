// 멘토 리스트

const mentors = [
  {
    name: "박나영",
    gender: "여",
    univ: "서울대 수의예과 19학번",
    high: "다사고 (기숙형 공립고)",
    onePick: "국어, 영어, 수학, 암기과목 학습법 멘토링",
    eng: "nayoung",
    mentoring: [1, 2, 3],
    oneWord: "과목별 학습방법을 완벽하게 알려주는 나영 멘토님",
  },
  {
    name: "김규민",
    gender: "남",
    univ: "서울대 의예과 19학번",
    high: "백영고 (일반고) 졸",
    onePick: "서울대 의대 수시 수석 입학",
    eng: "kyumin",
    mentoring: [1, 2, 3],
    oneWord: "최상위권을 위한 서울 의대 수석 규민 멘토님",
  },
  {
    name: "김태경",
    gender: "여",
    univ: "고려대 미디어학부 18학번",
    high: "명덕외고 (영어과) 졸",
    onePick: "미디어 진학 전문 멘토링 가능",
    eng: "taekyung",
    mentoring: [1, 2, 3],
    oneWord: "미디어/언론 입시 전문 태경 멘토님",
  },
  {
    name: "허다원",
    gender: "여",
    univ: "연세대 경영학과 20학번",
    high: "일반고 졸 / 내신 1.06",
    onePick: "서류 100%전형 수석 입학",
    eng: "dawon",
    mentoring: [1, 2, 3],
    oneWord: "하나하나 꼼곰하게 챙겨주는 다원 멘토님",
  },
  {
    name: "이현서",
    gender: "여",
    univ: "연세대 의예과 20학번",
    high: "서울영재고 - 정신여고",
    onePick: "중등 수학, 물리, 화학 올림피아드 수상",
    eng: "hyunseo",
    mentoring: [1, 2, 3],
    oneWord: "영재고에서 일반고로 경험이 풍부한 현서 멘토님",
  },
  {
    name: "장세민",
    gender: "여",
    univ: "서울대 수의예과 19학번",
    high: "하나고 (전국구 자사고)",
    onePick: "생기부 나이스 기준 44장",
    eng: "saemin",
    mentoring: [1, 2, 3],
    oneWord: "멘탈관리 전문가 세민 멘토님",
  },
  {
    name: "유승연",
    gender: "여",
    univ: "고려대 경영학과 19학번",
    high: "대원외고 (특목고)",
    onePick: "현재 대치동 거주",
    eng: "seungyeon",
    mentoring: [1, 2, 3],
    oneWord: "학습의 방향을 알려주는 승연 멘토님",
  },
  {
    name: "김태린",
    gender: "남",
    univ: "서울대 화학과",
    high: "한국과학영재학교",
    onePick: "콴다 S+ 랭크, 답변수 약 1만개, 평균 평점 4.8",
    eng: "taelin",
    mentoring: [1, 2, 3],
    oneWord: "최고의 동기부여를 제공해주는 태린 멘토님",
  },
  {
    name: "김시원",
    gender: "남",
    univ: "연세대 경영학과 17학번",
    high: "서라벌고 졸",
    onePick: "문과 멘토링 경험 다수",
    eng: "siwon",
    mentoring: [1, 2, 3],
    oneWord: "효율적인 공부법을 제공해주는 시원 멘토님",
  },
  {
    name: "이승지",
    gender: "여",
    univ: "연세대 경영학과 20학번",
    high: "명덕외고 졸",
    onePick: "명덕외고 전교 1등 졸업",
    eng: "seungji",
    mentoring: [1, 2, 3],
    oneWord: "공부의 목적을 찾아 전교 1등이 된 승지 멘토님",
  },
  {
    name: "지현준",
    gender: "남",
    univ: "연세대 산업공학과 15학번",
    high: "경기고 졸",
    onePick: "고등학생 멘토링 100회 이상 진행",
    eng: "hyunjun",
    mentoring: [1, 2, 3],
    oneWord: "100% 변화를 가져다주는 멘토링 현준 대표님",
  },
  {
    name: "김민하",
    gender: "여",
    univ: "서울대 자유전공학부 19학번",
    high: "부산국제외고 졸",
    onePick: "수능 수학 • 영어 만점",
    eng: "minha",
    mentoring: [1, 2, 3],
    oneWord: "성향에 맞는 학습법을 같이 고민하고 찾아주는 민하 멘토님",
  },
];

// 멘토 리스트

const result = document.querySelector(".result");
const resultPage = document.querySelector(".result__page__wrap");
const all2 = document.querySelector(".all2");

const mentorLen = mentors.length;

const temp = location.href.split("?");
const forResult = parseInt(temp[1].split(":")[1], 10);
const resultNum = 0;

if (forResult === 111) {
  resultNum = 0;
} else if (forResult === 112) {
  resultNum = 7;
} else if (forResult === 113) {
  resultNum = 1;
} else if (forResult === 121) {
  resultNum = 2;
} else if (forResult === 122) {
  resultNum = 4;
} else if (forResult === 123) {
  resultNum = 5;
} else if (forResult === 211) {
  resultNum = 8;
} else if (forResult === 212) {
  resultNum = 3;
} else if (forResult === 213) {
  resultNum = 6;
} else if (forResult === 221) {
  resultNum = 9;
} else if (forResult === 222) {
  resultNum = 10;
} else if (forResult === 223) {
  resultNum = 11;
}

const randomNum1 = Math.floor(Math.random() * mentorLen);
let randomNum2 = Math.floor(Math.random() * mentorLen);
if (randomNum1 === randomNum2) {
  console.log(randomNum1, randomNum2);
  randomNum2 = Math.floor(Math.random() * mentorLen);
}

const a = Math.random() * mentorLen;

console.log(randomNum1, randomNum2);

function handleResult() {
  result.innerHTML = `<div class="result__comment">toring이 추천하는 아이에 맞는 멘토님</div>
  <a class="simple__a" href="${mentors[resultNum].eng}.html">
    <div class="simple">
      <div class="simple__img">
        <img src="img/${mentors[resultNum].eng}.jpeg" class="rec__img" />
      </div>
      <div class="simple__content">
        <div class="simple__badge">
          <div class="simple__pro">pro</div>
        </div>
        <div class="simple__badge">
          <div class="simple__study">
            학습방법
          </div>
          <div class="simple__consult">입시상담</div>
        </div>
  
        <div class="content__column">${mentors[resultNum].name} 멘토님 (${mentors[resultNum].gender})</div>
        <div class="content__column">
          <i class="fas fa-graduation-cap"></i>${mentors[resultNum].univ}
        </div>
        <div class="content__column">
          <i class="fas fa-school"></i>${mentors[resultNum].high}
        </div>
        <div class="content__column">
          <i class="fas fa-book-open"></i>${mentors[resultNum].onePick}
        </div>
      </div>
      <div class="content__column__detail">
        자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </a>
  <div class="select1"></div>
  <div class="select2"></div>`;

  const select1 = document.querySelector(".select1");
  const select2 = document.querySelector(".select2");
  console.log(select1);

  select1.innerHTML = `<div class="result__comment">${mentors[randomNum1].oneWord}</div>
  <a class="simple__a" href="${mentors[randomNum1].eng}.html">
    <div class="simple">
      <div class="simple__img">
        <img src="img/${mentors[randomNum1].eng}.jpeg" class="rec__img" />
      </div>
      <div class="simple__content">
        <div class="simple__badge">
          <div class="simple__pro">pro</div>
        </div>
        <div class="simple__badge">
          <div class="simple__study">
            학습방법
          </div>
          <div class="simple__consult">입시상담</div>
        </div>
  
        <div class="content__column">${mentors[randomNum1].name} 멘토님 (${mentors[randomNum1].gender})</div>
        <div class="content__column">
          <i class="fas fa-graduation-cap"></i>${mentors[randomNum1].univ}
        </div>
        <div class="content__column">
          <i class="fas fa-school"></i>${mentors[randomNum1].high}
        </div>
        <div class="content__column">
          <i class="fas fa-book-open"></i>${mentors[randomNum1].onePick}
        </div>
      </div>
      <div class="content__column__detail">
        자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </a>`;

  select2.innerHTML = `<div class="result__comment">${mentors[randomNum2].oneWord}</div>
  <a class="simple__a" href="${mentors[randomNum2].eng}.html">
    <div class="simple">
      <div class="simple__img">
        <img src="img/${mentors[randomNum2].eng}.jpeg" class="rec__img" />
      </div>
      <div class="simple__content">
        <div class="simple__badge">
          <div class="simple__pro">pro</div>
        </div>
        <div class="simple__badge">
          <div class="simple__study">
            학습방법
          </div>
          <div class="simple__consult">입시상담</div>
        </div>
  
        <div class="content__column">${mentors[randomNum2].name} 멘토님 (${mentors[randomNum2].gender})</div>
        <div class="content__column">
          <i class="fas fa-graduation-cap"></i>${mentors[randomNum2].univ}
        </div>
        <div class="content__column">
          <i class="fas fa-school"></i>${mentors[randomNum2].high}
        </div>
        <div class="content__column">
          <i class="fas fa-book-open"></i>${mentors[randomNum2].onePick}
        </div>
      </div>
      <div class="content__column__detail">
        자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </a>`;

  handleResultAni();
}

function handleResultAni() {
  setTimeout(function () {
    result.classList.remove("none");
    result.classList.add("trans2");
    resultPage.classList.remove("none");
    resultPage.classList.add("trans2");
    all2.classList.remove("none");
    all2.classList.add("trans2");
  }, 200);
}

function init() {
  handleResult();
}

init();
