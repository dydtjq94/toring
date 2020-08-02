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
    title: "교육청도 궁금해하는 가장 쉽게 공부하는 공부법",
    label: 0,
  },

  {
    name: "김태경",
    gender: "여",
    univ: "고려대 미디어학부 18학번",
    high: "명덕외고 (영어과) 졸",
    onePick: "진로 및 입시 관련 강연",
    eng: "taekyung",
    mentoring: [1, 2, 3],
    oneWord: "동기부여 • 목표설정 전문 태경 멘토님",
    title: "학습, 진로, 동기부여 세 가지를 한번에 잡는 자기 성찰 공부법",
    label: 1,
  },
  {
    name: "허다원",
    gender: "여",
    univ: "연세대 경영학과 20학번",
    high: "일반고 졸 / 내신 1.06",
    onePick: "완벽한 준비로 서류 100%전형 수석 입학",
    eng: "dawon",
    mentoring: [1, 2, 3],
    oneWord: "하나하나 꼼꼼하게 챙겨주는 다원 멘토님",
    title: "학교 생활 열심히 해서 학생부 100%로 연세대 수석입학하는 비법",
    label: 0,
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
    title: "고등학교가 고민될 땐 영재고와 일반고를 모두 다녀본 저에게 오세요",
    label: 1,
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
    title: "중하위권에서 상위권 성적 상승은 무조건 저만 믿고 오시면 됩니다",
    label: 0,
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
    title: "치열한 환경 속에서 꾸준하게 슬럼프를 이겨내는 방법",
    label: 1,
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
    title: "꼴지가 서울대에 갈 수 있었던 방법",
    label: 0,
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
    title: "남들보다 시간이 부족한 사람에게 적절한 가장 효율적인 공부법",
    label: 0,
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
    title: "공부의 목적을 찾고 꿈을 찾아 평범한 중학생에서 전교 1등 되기",
    label: 0,
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
    title: "중학교 52%로 졸업해 연세대학교 수석으로 입학하는 비법",
    label: 0,
  },
  {
    name: "김민하",
    gender: "여",
    univ: "서울대 자유전공학부 19학번",
    high: "부산국제외고 졸",
    onePick: "수능 수학 • 영어 만점",
    eng: "minha",
    mentoring: [1, 2, 3],
    oneWord: "학습법을 같이 고민하고 찾아주는 민하 멘토님",
    title: "각자 성향에 맞는 학습법을 찾고 서울대에 진학하기",
    label: 0,
  },
  {
    name: "오상흔",
    gender: "여",
    univ: "고려대 경영학과 19학번",
    high: "비평준화 일반고 졸",
    onePick: "수시 • 정시 모두 준비 가능",
    eng: "sangheun",
    mentoring: [1, 2, 3],
    oneWord: "짧은 시간에 100% 성적을 올려주는 상흔 멘토님",
    title: "수시와 정시 두 마리 토끼를 모두 잡는 비법",
    label: 0,
  },
];

const kyumin = {
  name: "김규민",
  gender: "남",
  univ: "서울대 의예과 19학번",
  high: "백영고 (일반고) 졸",
  onePick: "서울대 의대 수시 수석 입학",
  eng: "kyumin",
  mentoring: [1, 2, 3],
  oneWord: "운동선수에서 서울대 의대 수석이 된 규민 멘토님",
  title: "고등학교 1학년부터 공부해서 서울대 의대 수석이 되는 방법",
  label: 1,
};

// 멘토 리스트

const result = document.querySelector(".result");
const resultPage = document.querySelector(".result__page__wrap");
const all2 = document.querySelector(".all2");

const mentorLen = mentors.length;

const temp = location.href.split("?");
const forResult = parseInt(temp[1].split(":")[1], 10);
let resultNum = 0;

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

let randomNum1 = Math.floor(Math.random() * mentorLen);
let randomNum2 = Math.floor(Math.random() * mentorLen);

for (var i = 0; i < 20; i++) {
  if (
    randomNum1 !== randomNum2 &&
    resultNum !== randomNum2 &&
    resultNum !== randomNum1
  ) {
    console.log(resultNum, randomNum1, randomNum2);
    break;
  }
  console.log(resultNum, randomNum1, randomNum2);
  randomNum2 = Math.floor(Math.random() * mentorLen);
  randomNum1 = Math.floor(Math.random() * mentorLen);
  console.log(resultNum, randomNum1, randomNum2);
}

const a = Math.random() * mentorLen;

function handleResult() {
  result.innerHTML = `
  <div class="result__title">아이와 가장 잘 맞는 멘토링이에요!</div>
  <div class="result__comment">${mentors[resultNum].oneWord}</div>
    <a class="simple__a" >
      <div class="simple">
        <div class="simple__img">
          <img src="img/${mentors[resultNum].eng}.jpeg" class="rec__img" />
        </div>
        <div class="simple__content">

    
          <div class="content__column">${mentors[resultNum].name} 멘토님 (${
    mentors[resultNum].gender
  })</div>
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
        
      </div>
      <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
      <span class="title__mentoring">[1:1 멘토링]</span>
      ${
        mentors[resultNum].label === 0
          ? `<div class="title__mentoring__ing">모집중</div>`
          : mentors[resultNum].label === 1
          ? `<div class="title__mentoring__complete">마감임박</div>`
          : `<div class="title__mentoring__end">마감</div>`
      }
    </div>${mentors[resultNum].title}
      <div class="content__column__detail">
          멘토링 자세히 보기 <i class="fas fa-chevron-right"></i>
        </div>
</div>
    </a>
    <button class="test__button">제발되라</button>
  <div class="result__title">토링 대표 멘토링이에요!</div>

    <div class="select3"></div>
  <div class="result__title">이런 멘토링은 어때요?</div>

    <div class="select1"></div>
    <div class="select2"></div>`;

  const select1 = document.querySelector(".select1");
  const select2 = document.querySelector(".select2");
  const select3 = document.querySelector(".select3");
  console.log(select1);

  select1.innerHTML = `<div class="result__comment">${
    mentors[randomNum1].oneWord
  }</div>
  <a class="simple__a" href="mentordetail.html?${
    "name" + ":" + mentors[randomNum1].eng
  }">
      <div class="simple">
        <div class="simple__img">
          <img src="img/${mentors[randomNum1].eng}.jpeg" class="rec__img" />
        </div>
        <div class="simple__content">
          
    
          <div class="content__column">${mentors[randomNum1].name} 멘토님 (${
    mentors[randomNum1].gender
  })</div>
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
       
      </div>
      <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
      <span class="title__mentoring">[1:1 멘토링]</span>
      ${
        mentors[randomNum1].label === 0
          ? `<div class="title__mentoring__ing">모집중</div>`
          : mentors[randomNum1].label === 1
          ? `<div class="title__mentoring__complete">마감임박</div>`
          : `<div class="title__mentoring__end">마감</div>`
      }
    </div>${mentors[randomNum1].title}
      <div class="content__column__detail">
          멘토링 자세히 보기 <i class="fas fa-chevron-right"></i>
        </div>
</div>
    </a>`;

  select2.innerHTML = `<div class="result__comment">${
    mentors[randomNum2].oneWord
  }</div>
  <a class="simple__a" href="mentordetail.html?${
    "name" + ":" + mentors[randomNum2].eng
  }">
      <div class="simple">
        <div class="simple__img">
          <img src="img/${mentors[randomNum2].eng}.jpeg" class="rec__img" />
        </div>
        <div class="simple__content">
    
          <div class="content__column">${mentors[randomNum2].name} 멘토님 (${
    mentors[randomNum2].gender
  })</div>
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
        
      </div>
      <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
      <span class="title__mentoring">[1:1 멘토링]</span>
      ${
        mentors[randomNum2].label === 0
          ? `<div class="title__mentoring__ing">모집중</div>`
          : mentors[randomNum2].label === 1
          ? `<div class="title__mentoring__complete">마감임박</div>`
          : `<div class="title__mentoring__end">마감</div>`
      }
    </div>${mentors[randomNum2].title}
      <div class="content__column__detail">
          멘토링 자세히 보기 <i class="fas fa-chevron-right"></i>
        </div>
</div>
    </a>`;

  select3.innerHTML = `<div class="result__comment">${kyumin.oneWord}</div>
  <a class="simple__a" href="mentordetail.html?${"name" + ":" + kyumin.eng}">
      <div class="simple">
        <div class="simple__img">
          <img src="img/${kyumin.eng}.jpeg" class="rec__img" />
        </div>
        <div class="simple__content">
          
    
          <div class="content__column">${kyumin.name} 멘토님 (${
    kyumin.gender
  })</div>
          <div class="content__column">
            <i class="fas fa-graduation-cap"></i>${kyumin.univ}
          </div>
          <div class="content__column">
            <i class="fas fa-school"></i>${kyumin.high}
          </div>
          <div class="content__column">
            <i class="fas fa-book-open"></i>${kyumin.onePick}
          </div>
        </div>
        
      </div>
      <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
  <span class="title__mentoring">[1:1 멘토링]</span>
  ${
    kyumin.label === 0
      ? `<div class="title__mentoring__ing">모집중</div>`
      : kyumin.label === 1
      ? `<div class="title__mentoring__complete">마감임박</div>`
      : `<div class="title__mentoring__end">마감</div>`
  }
</div>
      [1:1 멘토링] ${kyumin.title}
      <div class="content__column__detail">
          멘토링 자세히 보기 <i class="fas fa-chevron-right"></i>
        </div>
</div>
    </a>`;

  handleResultAni();

  // setTimeout(function () {
  //   location.href =
  //     "mentordetail.html?" + "name" + ":" + mentors[resultNum].eng;
  // }, 1000);

  const testResult = document.querySelector(`.mentor__class__title`);
  const testResult2 = document.querySelector(`.simple__img`);
  const testResult3 = document.querySelector(`.simple__content`);
  console.log(testResult);
  testResult.addEventListener("click", handleTestResult);
  testResult2.addEventListener("click", handleTestResult);
  testResult3.addEventListener("click", handleTestResult);
  function handleTestResult() {
    location.href =
      "mentordetail.html?" + "name" + ":" + mentors[resultNum].eng;
    console.log("click");
    // setTimeout(function () {
    //   location.href =
    //     "mentordetail.html?" + "name" + ":" + mentors[resultNum].eng;
    // }, 1000);
  }
}

function handleResultAni() {
  setTimeout(function () {
    result.classList.remove("none");
    result.classList.add("trans2");
    resultPage.classList.remove("none");
    resultPage.classList.add("trans2");
    // all2.classList.remove("none");
    // all2.classList.add("trans2");
  }, 200);
}

function init() {
  handleResult();
}

init();
