const mentorsSubmit = [
  {
    name: "김규민",
    nameEng: "kyumin",
    majorNum: 0, //0이면 의예과 1이면 일반학과
    title: "고등학교 1학년부터 공부해서 서울대 의대 수석이 되는 방법",
  },
  {
    name: "이현서",
    nameEng: "hyunseo",
    majorNum: 0, //0이면 의예과 1이면 일반학과
    title: "고등학교가 고민될 땐 영재고와 일반고를 모두 다녀본 저에게 오세요",
  },
  {
    name: "허다원",
    nameEng: "dawon",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "학교 생활 열심히 해서 학생부 100%로 연세대 수석입학하는 비법",
  },
  {
    name: "김태경",
    nameEng: "taekyung",
    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "학습, 진로, 동기부여 세 가지를 한번에 잡는 자기 성찰 공부법",
  },
  {
    name: "박나영",
    nameEng: "nayoung",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "교육청도 궁금해하는 가장 쉽게 공부하는 공부법",
  },
  {
    name: "장세민",
    nameEng: "saemin",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "중하위권에서 상위권 성적 상승은 무조건 저만 믿고 오시면 됩니다",
  },
  {
    name: "유승연",
    nameEng: "seungyeon",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "치열한 환경 속에서 꾸준하게 슬럼프를 이겨내는 방법",
  },
  {
    name: "김태린",
    nameEng: "taelin",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "꼴지가 서울대에 갈 수 있었던 방법",
  },
  {
    name: "김시원",
    nameEng: "siwon",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "남들보다 시간이 부족한 사람에게 적절한 가장 효율적인 공부법",
  },
  {
    name: "이승지",
    nameEng: "seungji",
    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "공부의 목적을 찾고 꿈을 찾아 평범한 중학생에서 전교 1등 되기",
  },
  {
    name: "지현준",
    nameEng: "hyunjun",

    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "중학교 52%로 졸업해 연세대학교 수석으로 입학하는 비법",
  },
  {
    name: "김민하",
    nameEng: "minha",
    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "각자 성향에 맞는 학습법을 찾고 서울대에 진학하기",
  },
  {
    name: "오상흔",
    nameEng: "sangheun",
    majorNum: 1, //0이면 의예과 1이면 일반학과
    title: "수시와 정시 두 마리 토끼를 모두 잡는 비법",
  },
];

const form = document.querySelector(".submitForm");
const submitName = document.querySelector(`.submit__name`);
const submitTel = document.querySelector(`.submit__tel`);
const submitStu = document.querySelector(`.submit__student`);
const submitCon = document.querySelector(`.submit__content`);
const submitBtn = document.querySelector(".submit__submit");
const blackLoading = document.querySelector(".black__loading");
const thx = document.querySelector(`#thx`);

console.dir(submitBtn);
document.querySelector(`.submit__submit`).disabled = true;

let s1 = "";
let s2 = "";
let s3 = "";
let s4 = "";
function handleNameChange() {
  console.dir(submitName.value);
  s1 = submitName.value;
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
}

function handleConClick() {
  s4 = "yes";
}

setInterval(function () {
  console.log(s1, s2, s3, s4);
  if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
    submitBtn.style.backgroundColor = "#0123b4";
    submitBtn.style.color = "white";
    document.querySelector(`.submit__submit`).disabled = false;
  }
}, 100);

submitName.addEventListener("change", handleNameChange);
submitTel.addEventListener("change", handleTelChange);
submitStu.addEventListener("change", handleStuChange);
submitCon.addEventListener("change", handleConChange);
submitCon.addEventListener("click", handleConClick);

console.dir(thx.style.display);

setInterval(function () {
  if (thx.style.display === "block") {
    setTimeout(function () {
      location.href = "home.html";
    }, 3000);
  }
}, 200);

const temp = decodeURI(location.href);
const name = temp.split(":")[2];
const major = parseInt(temp.split(":")[1].split("?")[1], 10);
console.log(name, major);

const handleCopy = (e) => {
  console.log(e);
  console.log(target);
  target.select();
  document.execCommand("Copy");
  //   snackBar.style.opacity = 1;
  snackBar.classList.add("snackbar__anim");
  setTimeout(function () {
    console.log(`gg`);
    // snackBar.style.opacity = 0;
    snackBar.classList.remove("snackbar__anim");
  }, 3000);
};

function handleSubmit(e) {
  console.log(e);
  setTimeout(function () {
    blackLoading.classList.remove("none");
    console.log(blackLoading.classList);
  }, 1);
  setTimeout(function () {
    blackLoading.style.opacity = 1;
  }, 10);
  setTimeout(function () {
    blackLoading.style.opacity = 0;
  }, 3500);
  setTimeout(function () {
    blackLoading.classList.add("none");
  }, 4510);
}

function init() {
  submitBtn.addEventListener("click", handleSubmit);
  //   form.innerHTML = `
  //   <div class="passbook">
  //         무통장입금
  //         <br />
  //         예금주: 야미구 (주)<br />계좌은행: 기업은행 <br/>계좌번호: 066-095403-04-016
  //   ${
  //     major === 0
  //       ? `<div class="submit__price">149,000원</div>`
  //       : `<div class="submit__price">99,000원</div>`
  //   }
  //   </div>
  //     <form
  //       action="https://script.google.com/macros/s/AKfycbzMJEI0x4Mxzyfd2a5RNo-rh69KxHdtW-6Z2c-QEonOg6L5zso/exec"
  //       class="gform"
  //       method="POST"
  //       data-email="example@email.net"
  //     >
  //       <input type="text" name="message" value="${name}" />
  //       <div class="input__radio">
  //       <input type="radio" name="name" value="대학교 캠퍼스 ${name}" /> 캠퍼스
  //       <input type="radio" name="name" value="장소 협의" /> 장소 협의
  //       </div>
  //       <input type="text" name="message" placeholder="학생 이름" />
  //       <input
  //         type="tel"
  //         name="email"
  //         pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
  //         placeholder="부모님 전화번호"
  //       />
  //       <input type="submit" value="멘토링 신청" />
  //       <div style="display: none;" class="thankyou_message">
  //         <!-- You can customize the thankyou message by editing the code below -->
  //         <h2>
  //           감사합니다! 입금 확인 완료 후에 멘토링 진행 연락 드리겠습니다!
  //         </h2>
  //       </div>`;
}

init();
