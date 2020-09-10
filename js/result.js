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
    univ: "서울대 기계항공공학부 19학번",
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

// 멘토 리스트
let whimoon = [];
let sookmyungW = [];
let dandae = [];
let gaepo = [];
let jinsunW = [];
let otherH = [];

for (let k = 0; k < 18; k++) {
  if (mentors[k].sort === 1) {
    whimoon.push(mentors[k]);
  } else if (mentors[k].sort === 2) {
    sookmyungW.push(mentors[k]);
  } else if (mentors[k].sort === 3) {
    dandae.push(mentors[k]);
  } else if (mentors[k].sort === 4) {
    gaepo.push(mentors[k]);
  } else if (mentors[k].sort === 5) {
    jinsunW.push(mentors[k]);
  } else if (mentors[k].sort === 6) {
    otherH.push(mentors[k]);
  }
}

Array.prototype.shuffle = function () {
  var length = this.length;
  while (length) {
    var index = Math.floor(length-- * Math.random());
    var temp = this[length];
    this[length] = this[index];
    this[index] = temp;
  }
  return this;
};

whimoon.shuffle();
sookmyungW.shuffle();
dandae.shuffle();
gaepo.shuffle();
jinsunW.shuffle();
otherH.shuffle();

let whimoonResult = `<div class="result__title"></div>`;
let sookmyungWResult = `<div class="result__title"></div>`;
let dandaeResult = `<div class="result__title"></div>`;
let gaepoResult = `<div class="result__title"></div>`;
let jinsunWResult = `<div class="result__title"></div>`;
let otherHResult = `<div class="result__title"></div>`;

let schoolMentorList = [
  "whimoon",
  "sookmyungW",
  "dandae",
  "gaepo",
  "jinsunW",
  "otherH",
];

for (let q = 0; q < whimoon.length; q++) {
  whimoonResult =
    whimoonResult +
    `
<div class="mentor__simple ${whimoon[q].eng}">
${
  whimoon[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${whimoon[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${whimoon[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${whimoon[q].name} 멘토님 (${
      whimoon[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${whimoon[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${whimoon[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${whimoon[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${whimoon[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${whimoon[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${whimoon[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${whimoon[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}
for (let q = 0; q < sookmyungW.length; q++) {
  sookmyungWResult =
    sookmyungWResult +
    `
<div class="mentor__simple ${sookmyungW[q].eng}">
${
  sookmyungW[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${sookmyungW[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${sookmyungW[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${sookmyungW[q].name} 멘토님 (${
      sookmyungW[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${sookmyungW[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${sookmyungW[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${sookmyungW[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${sookmyungW[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${sookmyungW[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${sookmyungW[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${sookmyungW[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}
for (let q = 0; q < dandae.length; q++) {
  dandaeResult =
    dandaeResult +
    `
<div class="mentor__simple ${dandae[q].eng}">
${
  dandae[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${dandae[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${dandae[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${dandae[q].name} 멘토님 (${
      dandae[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${dandae[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${dandae[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${dandae[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${dandae[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${dandae[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${dandae[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${dandae[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}
for (let q = 0; q < gaepo.length; q++) {
  gaepoResult =
    gaepoResult +
    `
<div class="mentor__simple ${gaepo[q].eng}">
${
  gaepo[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${gaepo[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${gaepo[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${gaepo[q].name} 멘토님 (${
      gaepo[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${gaepo[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${gaepo[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${gaepo[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${gaepo[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${gaepo[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${gaepo[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${gaepo[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}
for (let q = 0; q < jinsunW.length; q++) {
  jinsunWResult =
    jinsunWResult +
    `
<div class="mentor__simple ${jinsunW[q].eng}">
${
  jinsunW[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${jinsunW[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${jinsunW[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${jinsunW[q].name} 멘토님 (${
      jinsunW[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${jinsunW[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${jinsunW[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${jinsunW[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${jinsunW[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${jinsunW[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${jinsunW[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${jinsunW[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}
for (let q = 0; q < otherH.length; q++) {
  otherHResult =
    otherHResult +
    `
<div class="mentor__simple ${otherH[q].eng}">
${
  otherH[q].label === 0
    ? `<div class="label__style1">
    모집중
  </div>`
    : `<div class="label__style2">
    마감임박! <span class="label__extra">${otherH[q].labelNum}자리 남았어요!</span>
  </div>`
}
  <div class="nr__upper ">
    <div class="nr__column">
      <img src="./img/${otherH[q].eng}.jpeg" class="nr__img" />
    </div>
    <div class="nr__column">
      <div class="nr__info__name">${otherH[q].name} 멘토님 (${
      otherH[q].gender
    })</div>
      <div class="nr__info__uni">
        <i class="fas fa-graduation-cap"></i> ${otherH[q].univ}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-school"></i> ${otherH[q].high}
      </div>
      <div class="nr__info__sch">
        <i class="fas fa-book-open"></i> ${otherH[q].method}
      </div>
    </div>
  </div>
  <div class="nr__lower">
    <div class="mentor__class__title">
      <div class="mentor__class__title__upper">
        <div class="title__upper__title">
        ${otherH[q].oneWord}
        </div>
        <div class="title__upper__mentoring">
          <div class="mentoring__style"># ${otherH[q].mentoring[0]}</div>
          <div class="mentoring__style"># ${otherH[q].mentoring[1]}</div>
          <div class="mentoring__style"># ${otherH[q].mentoring[2]}</div>
        </div>
      </div>
      <div class="content__column__detail">
        멘토님 이력 자세히 보기 <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>`;
}

const resultList = [
  whimoonResult,
  sookmyungWResult,
  dandaeResult,
  gaepoResult,
  jinsunWResult,
  otherHResult,
];

const koreanResult = [
  "휘문고",
  "숙명여고",
  "단대부고",
  "개포고",
  "진선여고",
  "대치동",
];

const result = document.querySelector(".result");
const resultPage = document.querySelector(".result__page__wrap");
const mentorLen = mentors.length;

const temp = location.href.split("?");
const school = temp[1].split(":")[1];
const schoolResult = parseInt(school.split(``)[0], 10);

console.log(schoolResult);

let resultSchoolNum = 0;

if (schoolResult === 1) {
  resultSchoolNum = 0;
} else if (schoolResult === 2) {
  resultSchoolNum = 1;
} else if (schoolResult === 3) {
  resultSchoolNum = 2;
} else if (schoolResult === 4) {
  resultSchoolNum = 3;
} else if (schoolResult === 5) {
  resultSchoolNum = 4;
} else if (schoolResult === 6) {
  resultSchoolNum = 5;
}

let resultListLength = resultList.length;

let randomNum = Math.floor(Math.random() * resultListLength);

for (var i = 0; i < 10; i++) {
  if (resultSchoolNum !== randomNum) {
    break;
  }
  randomNum = Math.floor(Math.random() * resultListLength);
}

result.innerHTML = resultList[resultSchoolNum] + resultList[randomNum];

const resultTitle = document.querySelectorAll(`.result__title`);
resultTitle[0].innerHTML = `<span class="blue__bold">${koreanResult[resultSchoolNum]} 출신</span> 멘토들 `;
resultTitle[1].innerHTML = `<span class="blue__bold">다른 대치동 출신</span> 멘토들 `;

const mentorSimple = document.querySelectorAll(`.mentor__simple`);
const oneWord = document.querySelector(`.one__word`);
const twoWord = document.querySelector(`.two__word`);
const footerLeftButton = document.querySelector(`.footer__left__button`);

mentorSimple.forEach((e) =>
  e.addEventListener("click", function handleResultClick() {
    location.href = "mentordetail.html?" + "name" + ":" + e.classList[1];
  })
);

oneWord.innerHTML = `"${koreanResult[resultSchoolNum]} 출신에게 받는 <br />가장 특별한 멘토링"`;
twoWord.innerHTML = `${koreanResult[resultSchoolNum]} 출신만이 알고 있는 ${koreanResult[resultSchoolNum]} 내신 관리, 학생부 준비부터
동기부여와 멘탈 관리까지 한번에!`;

function handleKakao() {
  var newWindow = window.open("about:blank");
  newWindow.location.href = "http://pf.kakao.com/_WMMxgxb/chat";
}

footerLeftButton.addEventListener("click", handleKakao);

const all = document.querySelector(".all");
function handleCall() {
  window.location.href = "tel:010-8313-9943";
}

// function handleSnackBar() {
//   const snackBarResult = document.querySelector(`#snackbar__result`);
//   const body = document.querySelector(`.body`);
//   const snackBarButton = document.querySelector(`.snackbar__result__button`);
//   const snackBarResultTitle = document.querySelectorAll(`.result__title`);
//   const snackBarResultComment = document.querySelectorAll(`.result__comment`);
//   const addConsult = document.querySelector(".add__consult");

//   const RESULT_LS = "result";
//   // const loadedResult = localStorage.getItem(RESULT_LS);

//   setTimeout(function () {
//     snackBarResult.classList.add("snackbar__anim__result");
//     body.style.backgroundColor = "#313131";
//     snackBarResultTitle.forEach((e) => {
//       e.style.color = "white";
//     });
//     snackBarResultComment.forEach((e) => {
//       e.style.color = "white";
//     });
//     all.style.borderColor = "#313131";
//     all.children[0].style.color = "#313131";
//     addConsult.style.color = "#313131";
//     localStorage.setItem(RESULT_LS, "experience");
//   }, 6000);

//   // if (loadedResult !== "experience") {
//   //   setTimeout(function () {
//   //     snackBarResult.classList.add("snackbar__anim__result");
//   //     body.style.backgroundColor = "#313131";
//   //     snackBarResultTitle.forEach((e) => {
//   //       e.style.color = "#313131";
//   //     });
//   //     snackBarResultComment.forEach((e) => {
//   //       e.style.color = "white";
//   //     });
//   //     all.style.borderColor = "#313131";
//   //     all.children[0].style.color = "#313131";
//   //     addConsult.style.color = "#313131";
//   //     localStorage.setItem(RESULT_LS, "experience");
//   //   }, 6000);
//   // }

//   snackBarButton.addEventListener("click", handleSnackRemove);

//   function handleSnackRemove() {
//     snackBarResult.classList.remove("snackbar__anim__result");
//     body.style.backgroundColor = "#f7f7f7";
//     snackBarResultTitle.forEach((e) => {
//       e.style.color = "#4055af";
//     });
//     snackBarResultComment.forEach((e) => {
//       e.style.color = "#272727";
//     });
//     all.style.borderColor = "#0123b4";
//     all.children[0].style.color = "#0123b4";
//     addConsult.style.color = "#575757";
//   }
// }

function init() {}

init();
