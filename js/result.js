// 멘토 리스트

const mentors = [
  {
    name: "정진호",
    gender: "남",
    univ: "서울대 생명과학부 20학번",
    high: "휘문고등학교 졸업",
    method: "정시 전형",
    eng: "jinho",
    oneWord: "휘문고에서 내신과 정시를 완벽하게 준비한 진호 멘토님",
    label: 0,
  },

  {
    name: "유현우",
    gender: "남",
    univ: "연세대 도시공학과 20학번",
    high: "현대고등학교 졸업",
    method: "특기자 전형",
    eng: "hyunwoo",
    oneWord: "학생부를 완벽하게 준비한 현우 멘토님",
    label: 0,
  },

  {
    name: "오선빈",
    gender: "여",
    univ: "서울대 수의예과 19학번",
    high: "진선여자고등학교 졸업",
    method: "수시 일반 전형",
    eng: "sunbin",
    oneWord: "학생을 진심으로 도와주는 선빈 멘토님",
    label: 0,
  },

  {
    name: "김예나",
    gender: "여",
    univ: "연세대 건축공학과 18학번",
    high: "경기여자고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "yena",
    oneWord: "스스로 공부하는 습관으로 전교 3등으로 졸업한 예나 멘토님",
    label: 0,
  },

  {
    name: "김태형",
    gender: "남",
    univ: "연세대 전기전자공학부 20학번",
    high: "휘문고등학교 졸업",
    method: "논술 전형",
    eng: "taehyung",
    oneWord: "급격한 성적 상승을 약속하는 태형 멘토님",
    label: 0,
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
    label: 0,
  },

  {
    name: "임채현",
    gender: "남",
    univ: "연세대 중어중문학과 20학번",
    high: "개포고등학교 졸업",
    method: "정시 전형",
    eng: "chaehyun",
    oneWord: "냉정하게 현실을 알려주지만 누구보다 따뜻한 채현 멘토님",
    label: 0,
  },

  {
    name: "김민영",
    gender: "여",
    univ: "고려대 경영학과 20학번",
    high: "숙명여자고등학교 졸업",
    method: "학교장 추천 전형",
    eng: "minyoung",
    oneWord: "부모님 도움 없이 스스로 입시를 해낸 민영 멘토님",
    label: 0,
  },

  {
    name: "정현진",
    gender: "여",
    univ: "서울대 기계항공공학부 19학번",
    high: "숙명여자고등학교 졸업",
    method: "수시 일반 전형",
    eng: "hyunjin",
    oneWord: "효율적인 공부법으로 서울대와 카이스트를 동시 합격한 현진 멘토님",
    label: 0,
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
    label: 0,
  },

  {
    name: "유다영",
    gender: "여",
    univ: "연세대 경제학과 19학번",
    high: "숙명여자고등학교 졸업",
    method: "논술 전형",
    eng: "dayoung",
    oneWord: "방향성과 지름길을 알려주는 다영 멘토님",
    label: 0,
  },

  {
    name: "허나연",
    gender: "여",
    univ: "고려대 한문학과 20학번",
    high: "진선여자고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "nayeon",
    oneWord: "코로나로 인한 슬럼프를 극복하게 해주는 나연 멘토님",
    label: 0,
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
    label: 0,
  },

  {
    name: "이시연",
    gender: "남",
    univ: "서울대 농경제사회학부 20학번",
    high: "중산고등학교 졸업",
    method: "정시 전형",
    eng: "siyeon",
    oneWord: "모든 과목 공부법을 완벽하게 알려주는 시연 멘토님",
    label: 0,
  },

  {
    name: "고혜준",
    gender: "여",
    univ: "서울대 의예과 20학번",
    high: "중대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "hyejun",
    oneWord: "슬럼프를 극복해 서울대 의대에 진학한 혜준 멘토님",
    label: 0,
  },

  {
    name: "이서택",
    gender: "남",
    univ: "고려대 경영학과 20학번",
    high: "단대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "seotack",
    oneWord: "단대부고의 내신과 학생부를 완벽하게 해결해주는 서택 멘토님",
    label: 0,
  },

  {
    name: "옥승환",
    gender: "남",
    univ: "연세대 경영학과 20학번",
    high: "단대부고등학교 졸업",
    method: "학생부 종합 전형",
    eng: "seunghwan",
    oneWord: "친근한 형처럼 다가가지만, 확실하게 알려주는 승환 멘토님",
    label: 0,
  },

  {
    name: "박상하",
    gender: "남",
    univ: "연세대 의예과 20학번",
    high: "휘문고등학교 졸업",
    method: "정시 전형",
    eng: "sangha",
    oneWord: "휘문고에서 정시와 수시 모두로 의예과에 진학한 상하 멘토님",
    label: 0,
  },
];

// 멘토 리스트

const result = document.querySelector(".result");
const resultPage = document.querySelector(".result__page__wrap");

const mentorLen = mentors.length;

const temp = location.href.split("?");
const forResult = parseInt(temp[1].split(":")[1], 10);
let resultNum = 0;
const school = temp[1].split(":")[1];
const schoolResult = parseInt(school.split(``)[0], 10);

let resultTemp = "";
let resultNum3 = "";
let resultNum2 = "";
let resultNum1 = "";

if (schoolResult === 1) {
  resultTemp = 3;
  resultSchool = "휘문고";
  resultNum1 = 0;
  resultNum2 = 4;
  resultNum3 = 17;
} else if (schoolResult === 3) {
  resultTemp = 0;
  resultSchool = "단대부고";
  resultNum1 = 15;
  resultNum2 = 16;
} else if (schoolResult === 4) {
  resultTemp = 0;
  resultSchool = "개포고";
  resultNum1 = 6;
  resultNum2 = 12;
} else if (schoolResult === 5) {
  resultTemp = 0;
  resultSchool = "진선여고";
  resultNum1 = 2;
  resultNum2 = 11;
} else if (schoolResult === 2) {
  resultTemp = 1;
  resultSchool = "숙명여고";
  resultNum1 = 8;
  resultNum2 = 10;
  resultNum3 = 9;
  resultNum4 = 7;
} else if (schoolResult === 6) {
  resultTemp = 2;
}

let randomNum1 = Math.floor(Math.random() * mentorLen);
let randomNum2 = Math.floor(Math.random() * mentorLen);
let randomNum3 = Math.floor(Math.random() * mentorLen);
let randomNum4 = Math.floor(Math.random() * mentorLen);

for (var i = 0; i < 40; i++) {
  if (
    randomNum1 !== randomNum2 &&
    resultNum1 !== randomNum2 &&
    resultNum1 !== randomNum1 &&
    resultNum2 !== randomNum2 &&
    resultNum2 !== randomNum1 &&
    resultNum3 !== randomNum1 &&
    resultNum3 !== randomNum2 &&
    randomNum1 !== randomNum3 &&
    randomNum1 !== randomNum4 &&
    randomNum2 !== randomNum3 &&
    randomNum2 !== randomNum4 &&
    randomNum3 !== randomNum4
  ) {
    console.log(
      resultNum1,
      resultNum2,
      resultNum3,
      randomNum1,
      randomNum2,
      randomNum3,
      randomNum4
    );
    break;
  }
  randomNum2 = Math.floor(Math.random() * mentorLen);
  randomNum1 = Math.floor(Math.random() * mentorLen);
  randomNum3 = Math.floor(Math.random() * mentorLen);
  randomNum4 = Math.floor(Math.random() * mentorLen);
  console.log(
    resultNum1,
    resultNum2,
    resultNum3,
    randomNum1,
    randomNum2,
    randomNum3,
    randomNum4
  );
}

const a = Math.random() * mentorLen;

function handleResult() {
  if (resultTemp === 0) {
    result.innerHTML = `
    <div class="new__result">
    <div class="result__title">${resultSchool} 출신 멘토들</div>
    <div class="result__comment">
${mentors[resultNum1].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum1].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum1].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum1].name} 멘토님 (${
      mentors[resultNum1].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum1].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum1].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum1].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum1].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum1].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment ">
${mentors[resultNum2].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum2].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum2].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum2].name} 멘토님 (${
      mentors[resultNum2].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum2].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum2].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum2].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum2].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum2].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    
  </div>
  <div class="result__title">강남 8학군 출신 멘토들</div>
  <div class="select1"></div>
  <div class="select2"></div>

`;
  } else if (resultTemp === 1) {
    result.innerHTML = `
    <div class="new__result">
    <div class="result__title">${resultSchool} 출신 멘토들</div>
    <div class="result__comment">
${mentors[resultNum1].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum1].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum1].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum1].name} 멘토님 (${
      mentors[resultNum1].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum1].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum1].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum1].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum1].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum1].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment">
${mentors[resultNum2].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum2].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum2].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum2].name} 멘토님 (${
      mentors[resultNum2].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum2].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum2].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum2].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum2].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum2].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment">
${mentors[resultNum3].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum3].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum3].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum3].name} 멘토님 (${
      mentors[resultNum3].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum3].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum3].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum3].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum3].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum3].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment">
${mentors[resultNum4].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum4].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum4].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum4].name} 멘토님 (${
      mentors[resultNum4].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum4].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum4].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum4].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum4].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum4].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>`;
  } else if (resultTemp === 2) {
    result.innerHTML = `
    <div class="new__result">
    <div class="result__title">강남 8학군 출신 멘토들</div>
    <div class="result__comment">
    ${mentors[randomNum1].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum1].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum1].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum1].name} 멘토님 (${
      mentors[randomNum1].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum1].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum1].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum1].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum1].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum1].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="result__comment">
    ${mentors[randomNum2].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum2].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum2].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum2].name} 멘토님 (${
      mentors[randomNum2].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum2].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum2].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum2].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum2].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum2].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="result__comment">
    ${mentors[randomNum3].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum3].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum3].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum3].name} 멘토님 (${
      mentors[randomNum3].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum3].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum3].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum3].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum3].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum3].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="result__comment">
    ${mentors[randomNum4].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum4].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum4].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum4].name} 멘토님 (${
      mentors[randomNum4].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum4].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum4].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum4].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum4].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum4].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>`;
  } else if (resultTemp === 3) {
    result.innerHTML = `
    <div class="new__result">
    <div class="result__title">${resultSchool} 출신 멘토들</div>
    <div class="result__comment">
${mentors[resultNum1].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum1].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum1].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum1].name} 멘토님 (${
      mentors[resultNum1].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum1].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum1].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum1].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum1].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum1].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment">
${mentors[resultNum2].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum2].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum2].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum2].name} 멘토님 (${
      mentors[resultNum2].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum2].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum2].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum2].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum2].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum2].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="result__comment">
${mentors[resultNum3].oneWord}
    </div>
    <div class="nr__upper ${mentors[resultNum3].eng}">
      <div class="nr__column">
        <img src="./img/${
          mentors[resultNum3].eng
        }.jpeg" alt="" class="nr__img" />
      </div>
      <div class="nr__column">
        <div class="nr__info__name">${mentors[resultNum3].name} 멘토님 (${
      mentors[resultNum3].gender
    })</div>
        <div class="nr__info__uni">
          <i class="fas fa-graduation-cap"></i> ${mentors[resultNum3].univ}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-school"></i> ${mentors[resultNum3].high}
        </div>
        <div class="nr__info__sch">
          <i class="fas fa-book-open"></i> ${mentors[resultNum3].method}
        </div>
      </div>
    </div>
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
        ${
          mentors[resultNum3].label === 0
            ? `<div class="title__mentoring__ing">모집중</div>`
            : mentors[resultNum3].label === 1
            ? `<div class="title__mentoring__complete">마감임박</div>`
            : `<div class="title__mentoring__end">마감</div>`
        }
      </div>
      3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  <div class="result__title">강남 8학군 출신 멘토들</div>

    <div class="select3"></div>`;
  }
  const select1 = document.querySelector(".select1");
  const select2 = document.querySelector(".select2");
  const select3 = document.querySelector(".select3");

  if (select3) {
    select3.innerHTML = `<div class="result__comment">
    ${mentors[randomNum1].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum1].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum1].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum1].name} 멘토님 (${
      mentors[randomNum1].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum1].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum1].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum1].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum1].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum1].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>`;
  }
  if (select1 && select2) {
    console.log(select1);

    select1.innerHTML = `<div class="result__comment">
    ${mentors[randomNum1].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum1].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum1].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum1].name} 멘토님 (${
      mentors[randomNum1].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum1].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum1].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum1].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum1].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum1].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>`;

    select2.innerHTML = `<div class="result__comment">
    ${mentors[randomNum2].oneWord}
        </div>
        <div class="nr__upper ${mentors[randomNum2].eng}">
          <div class="nr__column">
            <img src="./img/${
              mentors[randomNum2].eng
            }.jpeg" alt="" class="nr__img" />
          </div>
          <div class="nr__column">
            <div class="nr__info__name">${mentors[randomNum2].name} 멘토님 (${
      mentors[randomNum2].gender
    })</div>
            <div class="nr__info__uni">
              <i class="fas fa-graduation-cap"></i> ${mentors[randomNum2].univ}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-school"></i> ${mentors[randomNum2].high}
            </div>
            <div class="nr__info__sch">
              <i class="fas fa-book-open"></i> ${mentors[randomNum2].method}
            </div>
          </div>
        </div>
        <div class="mentor__class__title">
          <div class="mentor__class__title__upper">
            <span class="title__mentoring">[작심삼일 1:1 멘토링]</span>
            ${
              mentors[randomNum2].label === 0
                ? `<div class="title__mentoring__ing">모집중</div>`
                : mentors[randomNum2].label === 1
                ? `<div class="title__mentoring__complete">마감임박</div>`
                : `<div class="title__mentoring__end">마감</div>`
            }
          </div>
          3일마다 <공부 습관, 학생부, 동기부여> 온라인 관리
          <div class="content__column__detail">
            멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
          </div>
        </div>`;
  }
  handleResultAni();

  const testResult = document.querySelectorAll(`.mentor__class__title`);
  const testResult2 = document.querySelectorAll(`.nr__upper`);
  console.dir(testResult2[0].classList[1]);

  testResult[0].addEventListener("click", handleTestResult);
  testResult2[0].addEventListener("click", handleTestResult);
  testResult[1].addEventListener("click", handleTestResult2);
  testResult2[1].addEventListener("click", handleTestResult2);
  testResult[2].addEventListener("click", handleTestResult3);
  testResult2[2].addEventListener("click", handleTestResult3);
  testResult[3].addEventListener("click", handleTestResult4);
  testResult2[3].addEventListener("click", handleTestResult4);

  function handleTestResult() {
    location.href =
      "mentordetail.html?" + "name" + ":" + testResult2[0].classList[1];
  }
  function handleTestResult2() {
    location.href =
      "mentordetail.html?" + "name" + ":" + testResult2[1].classList[1];
  }
  function handleTestResult3() {
    location.href =
      "mentordetail.html?" + "name" + ":" + testResult2[2].classList[1];
  }
  function handleTestResult4() {
    location.href =
      "mentordetail.html?" + "name" + ":" + testResult2[3].classList[1];
  }
}

function handleResultAni() {
  setTimeout(function () {
    result.classList.remove("none");
    result.classList.add("trans2");
    resultPage.classList.remove("none");
    resultPage.classList.add("trans2");
  }, 200);
}
const all = document.querySelector(".all");

function handleCall() {
  window.location.href = "tel:010-8313-9943";
}

function handleSnackBar() {
  const snackBarResult = document.querySelector(`#snackbar__result`);
  const body = document.querySelector(`.body`);
  const snackBarButton = document.querySelector(`.snackbar__result__button`);
  const snackBarResultTitle = document.querySelectorAll(`.result__title`);
  const snackBarResultComment = document.querySelectorAll(`.result__comment`);
  const addConsult = document.querySelector(".add__consult");

  const RESULT_LS = "result";
  // const loadedResult = localStorage.getItem(RESULT_LS);

  setTimeout(function () {
    snackBarResult.classList.add("snackbar__anim__result");
    body.style.backgroundColor = "#313131";
    snackBarResultTitle.forEach((e) => {
      e.style.color = "white";
    });
    snackBarResultComment.forEach((e) => {
      e.style.color = "white";
    });
    all.style.borderColor = "#313131";
    all.children[0].style.color = "#313131";
    addConsult.style.color = "#313131";
    localStorage.setItem(RESULT_LS, "experience");
  }, 6000);

  // if (loadedResult !== "experience") {
  //   setTimeout(function () {
  //     snackBarResult.classList.add("snackbar__anim__result");
  //     body.style.backgroundColor = "#313131";
  //     snackBarResultTitle.forEach((e) => {
  //       e.style.color = "#313131";
  //     });
  //     snackBarResultComment.forEach((e) => {
  //       e.style.color = "white";
  //     });
  //     all.style.borderColor = "#313131";
  //     all.children[0].style.color = "#313131";
  //     addConsult.style.color = "#313131";
  //     localStorage.setItem(RESULT_LS, "experience");
  //   }, 6000);
  // }

  snackBarButton.addEventListener("click", handleSnackRemove);

  function handleSnackRemove() {
    snackBarResult.classList.remove("snackbar__anim__result");
    body.style.backgroundColor = "#f7f7f7";
    snackBarResultTitle.forEach((e) => {
      e.style.color = "#4055af";
    });
    snackBarResultComment.forEach((e) => {
      e.style.color = "#272727";
    });
    all.style.borderColor = "#0123b4";
    all.children[0].style.color = "#0123b4";
    addConsult.style.color = "#575757";
  }
}

function init() {
  handleResult();
  handleSnackBar();
  all.addEventListener("click", handleCall);
}

init();
