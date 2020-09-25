const openSchoolTitle = document.querySelector(`.openschool__phone__title`);
const openSchoolButton = document.querySelectorAll(
  `.open__school__content__button`
);
const blackBoard = document.querySelector(`.black__board`);
const popupFirst = document.querySelector(`.form__popup`);
const popupCloseBtn = document.querySelector(`.popup__close__button`);
const openSubmitButton = document.querySelector(`.phone__submit__button`);
const openSubmitInput = document.querySelector(`.phone__submit__input`);
const openSchoolContentWrap = document.querySelector(
  `.open__school__content__wrap`
);
const thx = document.querySelector(`#thx`);

console.log(thx);

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

  const openSchoolName = e.target.parentNode.innerText
    .split(" ")[0]
    .split("등")[0];
  goSchoolTitle(openSchoolName);
}

function handleOpenApply() {
  openSubmitInput.value = "신청중입니다. 잠시만 기다려주세요!";

  setTimeout(function () {
    blackBoard.classList.add("none");
  }, 10000);

  let link = setInterval(function () {
    if (thx.style.display === "block") {
      openSubmitInput.value = "신청이 완료되었습니다!";

      setTimeout(function () {
        blackBoard.classList.add("none");
        popupFirst.classList.remove("popup__anim__result");
        popupFirst.classList.add("popup__anim__up");
      }, 610);

      clearInterval(link);
    }
  }, 200);
}

function init() {
  openSchoolButton.forEach((e) => e.addEventListener("click", openSchoolApply));
  openSubmitButton.addEventListener("click", handleOpenApply);
  blackBoard.addEventListener("click", popupClose);
  popupCloseBtn.addEventListener("click", popupClose);
}

init();
