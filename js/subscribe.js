const openSchoolTitle = document.querySelector(`.openschool__phone__title`);
const openSchoolButton = document.querySelectorAll(
  `.open__school__content__button`
);
const blackBoard = document.querySelector(`.black__board`);
const popupCloseBtn = document.querySelector(`.popup__close__button`);
const popupCloseBtnNow = document.querySelector(`.popup__close__now`);
const popupCloseBtnForever = document.querySelector(`.popup__close__forever`);
const popupFirst = document.querySelector(`.form__popup`);
const openSubmitButton = document.querySelector(`.phone__submit__button`);
const openSubmitInput = document.querySelector(`.phone__submit__input`);
const thx = document.querySelector(`#thx`);
const mentorNameWrap = document.querySelector(`.buy__off`);
const mentorName = mentorNameWrap.innerHTML.split(" ")[0];
const toringButton = document.querySelector(".buy__toring");

function goSchoolTitle(e) {
  openSchoolTitle.innerHTML = `
    <input
              type="text"
              class="school__submit__input"
              name="subMentor"
              placeholder=""
              value="${e}"
readonly
            /> <span class="blue__bold">${e} 멘토님</span>에게 직접<br/>궁금한 점을 질문하세요.<br/>답변 받을 내용을 작성하세요!
    `;
}

function popupOpen() {
  setTimeout(function () {
    popupFirst.classList.add("popup__anim__result");
    popupFirst.classList.remove("popup__anim__up");
    blackBoard.classList.remove("none");
  }, 10000);
}

function popupOpenBtn() {
  setTimeout(function () {
    popupFirst.classList.add("popup__anim__result");
    popupFirst.classList.remove("popup__anim__up");
    blackBoard.classList.remove("none");
  }, 10);
}

function popupClose() {
  setTimeout(function () {
    popupFirst.classList.remove("popup__anim__result");
    popupFirst.classList.add("popup__anim__up");
    blackBoard.classList.add("none");
  }, 30);
}

function popupCloseForever() {
  setTimeout(function () {
    popupFirst.classList.remove("popup__anim__result");
    popupFirst.classList.add("popup__anim__up");
    blackBoard.classList.add("none");
    localStorage.setItem("detailBanner", "close");
  }, 30);
}

function handleOpenApply(e) {
  e.target.classList.add("click__anim");
  openSubmitInput.value = "질문 전송중입니다.";

  let link = setInterval(function () {
    if (thx.style.display === "block") {
      openSubmitInput.value = "질문 전송 완료!";

      setTimeout(function () {
        blackBoard.classList.add("none");
        popupFirst.classList.remove("popup__anim__result");
        popupFirst.classList.add("popup__anim__up");
      }, 1410);
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
    }, 10000);
  }, 2);
}

function handleToringButton() {
  popupOpenBtn();
  toringButton.classList.add("click__anim");
  setTimeout(function () {
    toringButton.classList.remove("click__anim");
  }, 1000);
}

const detailBannerLS = localStorage.getItem("detailBanner");

function init() {
  if (detailBannerLS !== "close") {
    popupOpen();
  }
  goSchoolTitle(mentorName);
  toringButton.addEventListener("click", handleToringButton);

  openSubmitButton.addEventListener("click", handleOpenApply);
  blackBoard.addEventListener("click", popupClose);
  popupCloseBtn.addEventListener("click", popupClose);
  // popupCloseBtnNow.addEventListener("click", popupClose);
  // popupCloseBtnForever.addEventListener("click", popupCloseForever);
}

init();
