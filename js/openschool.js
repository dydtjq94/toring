const openSchoolList = [
  { name: "세화고", nameEng: "saehwa", applyNum: "4/5" },
  { name: "경기고", nameEng: "kyungki", applyNum: "3/5" },
  { name: "영동고", nameEng: "youngdong", applyNum: "1/5" },
  { name: "서울고", nameEng: "seoulhigh", applyNum: "2/5" },
  { name: "중동고", nameEng: "joongdong", applyNum: "2/5" },
  { name: "반포고", nameEng: "banpo", applyNum: "2/5" },
  { name: "잠실여고", nameEng: "jamsilw", applyNum: "1/5" },
  { name: "정신여고", nameEng: "joungsinw", applyNum: "1/5" },
  { name: "외대부고", nameEng: "yongin", applyNum: "3/5" },
  { name: "대원외고", nameEng: "daewon", applyNum: "3/5" },
];

const openSchoolContentWrap = document.querySelector(
  `.open__school__content__wrap`
);
paintOpenSchool();

const openSchoolTitle = document.querySelector(`.openschool__phone__title`);
const openSchoolButton = document.querySelectorAll(
  `.open__school__content__button`
);
const blackBoard = document.querySelector(`.black__board`);
const popupFirst = document.querySelector(`.form__popup`);
const popupCloseBtn = document.querySelector(`.popup__close__button`);
const openSubmitButton = document.querySelector(`.phone__submit__button`);
const openSubmitInput = document.querySelector(`.phone__submit__input`);
const thx = document.querySelector(`#thx`);

function goSchoolTitle(e) {
  openSchoolTitle.innerHTML = `
    <input
              type="text"
              class="school__submit__input"
              name="school"
              placeholder=""
              value="${e}"
readonly
            /> <span class="blue__bold">${e} 토링</span>이 개설되면<br/>연락받으실 전화번호를<br/>입력해 주세요.
    `;
}

function popupOpen() {
  setTimeout(function () {
    popupFirst.classList.add("popup__anim__result");
    popupFirst.classList.remove("popup__anim__up");
    blackBoard.classList.remove("none");
  }, 30);
}

function popupClose() {
  setTimeout(function () {
    popupFirst.classList.remove("popup__anim__result");
    popupFirst.classList.add("popup__anim__up");
    blackBoard.classList.add("none");
  }, 30);
}

function openSchoolApply(e) {
  popupOpen();
  console.dir(e.target.parentNode.parentNode.children[1].innerHTML);
  const openSchoolName = e.target.parentNode.parentNode.children[1].innerHTML;
  goSchoolTitle(openSchoolName);
}

function handleOpenApply(e) {
  e.target.classList.add("click__anim");
  openSubmitInput.value = "신청중입니다. 잠시만 기다려주세요!";

  let link = setInterval(function () {
    if (thx.style.display === "block") {
      openSubmitInput.value = "신청이 완료되었습니다!";

      setTimeout(function () {
        blackBoard.classList.add("none");
        popupFirst.classList.remove("popup__anim__result");
        popupFirst.classList.add("popup__anim__up");
        setTimeout(function () {
          location.href = "result.html";
        }, 310);
      }, 610);

      clearInterval(link);
    }
    setTimeout(function () {
      openSubmitInput.value = "신청에 실패했습니다.";

      setTimeout(function () {
        blackBoard.classList.add("none");
        popupFirst.classList.remove("popup__anim__result");
        popupFirst.classList.add("popup__anim__up");
      }, 1210);

      clearInterval(link);
    }, 6000);
  }, 2);
}

function paintOpenSchool() {
  let lotto = [];

  function lottoNum() {
    let i = 0;
    while (i < 10) {
      let n = Math.floor(Math.random() * openSchoolList.length);
      if (!sameNum(n)) {
        lotto.push(n);
        i++;
      }
    }
    function sameNum(n) {
      for (var i = 0; i < lotto.length; i++) {
        if (n === lotto[i]) {
          return true;
        }
      }
      return false;
    }
    return lotto;
  }
  lottoNum();

  console.log(lotto);

  let openSchoolContent = ``;
  lotto.forEach(function paintSecondContent(e) {
    openSchoolContent =
      openSchoolContent +
      `<div class="open__school__content">
      <div class="open__school__content__img">
        <img
          src="./img/openschool/${openSchoolList[e].nameEng}.png"
          class="open__school__img"
        />
        <div class="black__school__board"></div>
      </div>
      <div class="open__school__content__title">${openSchoolList[e].name}</div>
      <div class="open__school__content__button">
        <span class="apply__open skyblue__bold">모집 신청하기</span>
        <span class="open__school__num bold">${openSchoolList[e].applyNum}</span>
      </div>
    </div>`;
  });
  openSchoolContentWrap.innerHTML = openSchoolContent;
}

function init() {
  openSchoolButton.forEach((e) => e.addEventListener("click", openSchoolApply));
  openSubmitButton.addEventListener("click", handleOpenApply);
  blackBoard.addEventListener("click", popupClose);
  popupCloseBtn.addEventListener("click", popupClose);
}

init();
