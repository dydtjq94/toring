const onboard1 = document.querySelector(".onboarding1");
const onboard2 = document.querySelector(".onboarding2");
const onboard3 = document.querySelector(".onboarding3");
const buttonOnboard = document.querySelector(".button__onboarding");
const onboCount = document.querySelector(".onbo__count");

function handleOnboarding() {
  setTimeout(function () {
    // onboard1.classList.add("none");
  }, 3);
  setTimeout(function () {
    onboard2.classList.remove("none");
    onboard2.classList.add("rightIn");
    onboCount.innerHTML = "2/3";
  }, 3);

  onboard1.classList.add("leftOut");
  buttonOnboard.addEventListener("click", handleOnboarding2);
}

function handleOnboarding2() {
  setTimeout(function () {
    onboard2.classList.remove("rightIn");
    onboard2.classList.add("leftOut");
    onboCount.innerHTML = "3/3";
    buttonOnboard.innerHTML = "우리 아이 멘토 찾기";
  }, 3);

  setTimeout(function () {
    onboard3.classList.remove("none");
    onboard3.classList.add("rightIn");
  }, 3);
  onboard2.classList.remove("rightIn");

  buttonOnboard.addEventListener("click", handleGoHome);
}

function handleGoHome() {
  location.href = "test.html";
}

function init() {
  buttonOnboard.addEventListener("click", handleOnboarding);
}

init();
