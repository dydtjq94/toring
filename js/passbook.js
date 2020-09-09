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

const submitForm = document.querySelector(`.submitForm`);

const temp = decodeURI(location.href);
const parentName = temp.split(":")[3];
const mentorName = temp.split(":")[5];
const major = parseInt(temp.split(":")[4], 10);

console.log(parentName, mentorName, major);

let resultNum = 0;
let i = 0;

// for (;;) {
//   if (mentorsSubmit[i].name === mentorName) {
//     resultNum = i;
//     break;
//   }
//   i++;
// }

submitForm.innerHTML = `
<div class="passbook__title">멘토링 결제 금액</div>

<div class="total__price">
  <div class="total__price__column">
    <div class="before__price__title">금액</div>
  </div>
  <div class="total__price__column">
    <div class="price__mentor__content">
      <div class="price__left">
        <div class="price__left__content">
        김규민 멘토님
        </div>
      </div>
      <div class="price__left">
        <div class="price__left__content2">
        토링 타이틀입니다
        </div>
      </div>
    </div>
    <div class="before__price">
    ${0 === 0 ? `199,000원` : `149,000원`}
    </div>
  </div>
  <div class="total__price__column">
    <div class="off__title">할인</div>
  </div>
  <div class="total__price__column">
    <div class="off__content">DSchool 이벤트 ${
      0 === 0 ? `30%` : `34%`
    } 할인</div>
    <div class="off__content__price">-50,000원</div>
  </div>
  <div class="total__price__column">
    <div class="after__price__title">
      최종 결제 금액
    </div>
  </div>
  <div class="total__price__column">
    <div class="after__price">${0 === 0 ? `149,000원` : `99,000원`}</div>
  </div>
</div>

<div class="passbook__title">무통장 입금 안내</div>

<div class="passbook">
  <div class="passbook__column">
    <div class="passbook__num__title">입금 계좌</div>
    <div class="passbook__num__content">
      <input
        type="text"
        class="num__content"
        id="target"
        value="530402-01-226704"
        readonly
      />
      <div class="num__copy" id="btn">
        복사하기
      </div>
    </div>
  </div>
  <div class="passbook__column">
    <div class="passbook__info">
      <div class="info__bank__title">입금 은행</div>
      <div class="info__bank__content">국민은행</div>
    </div>
    <div class="passbook__info">
      <div class="info__name__title">예금주</div>
      <div class="info__name__content">지현준</div>
    </div>
  </div>
  <div class="passbook__column">
    <div class="passbook__price">
      <div class="info__bank__title">입금액</div>
      <div class="info__price__content">${
        0 === 0 ? `149,000원` : `99,000원`
      }</div>
    </div>
    
  </div>
</div>
<div class="user__differ">
  <i class="fas fa-exclamation"></i>
  <div class="user__differ__ment">
    입금자가 다르다면
    <span class="differ__button">여기</span>
    로 문의주세요.
  </div>
</div>
`;

const differButton = document.querySelector(`.differ__button`);
const kakaoButton = document.querySelector(`.passbook__button__kakao`);
const homeButton = document.querySelector(`.passbook__button__home`);

const btn = document.querySelector(`#btn`);
const target = document.querySelector(`#target`);
const snackBar = document.querySelector(`#snackbar`);

const handleCopy = (e) => {
  console.log(target);
  target.select();
  document.execCommand("Copy");

  snackBar.classList.add("snackbar__anim");
  setTimeout(function () {
    snackBar.classList.remove("snackbar__anim");
  }, 2000);
};

function handleDiffer() {
  var newWindow = window.open("about:blank");
  newWindow.location.href = "http://pf.kakao.com/_WMMxgxb/chat";
}

function handleHome() {
  location.href = "index.html";
}

function init() {
  btn.addEventListener("click", handleCopy);
  differButton.addEventListener("click", handleDiffer);
  kakaoButton.addEventListener("click", handleDiffer);
  homeButton.addEventListener("click", handleHome);
}

init();
