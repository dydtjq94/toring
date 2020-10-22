const form = document.querySelector(".submitForm");
const submitName = document.querySelector(`.submit__qnaSchool`);
const submitTel = document.querySelector(`.submit__tel`);
const submitStu = document.querySelector(`.submit__qnaMajor`);
const submitCon = document.querySelector(`.submit__content`);
const submitBtn = document.querySelector(".submit__submit");
const submitBtnPar = document.querySelector(`.submit__button`);
const blackLoading = document.querySelector(".black__loading");
const thx = document.querySelector(`#thx`);
const temp = decodeURI(location.href);
const name = temp.split(":")[2];

submitBtn.disabled = true;

let s1 = "";
let s2 = "";
let s3 = "";
let s4 = "";

function handleNameChange() {
  s1 = submitName.value;
  let setI = setInterval(function () {
    console.log(s1, s2, s3, s4);
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 1000);
}

function handleTelChange() {
  s2 = submitTel.value;
}

function handleStuChange() {
  s3 = submitStu.value;
}

function handleConChange() {
  s4 = submitCon.value;
  let setI = setInterval(function () {
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
      setTimeout(function () {
        submitBtn.classList.add("button__anim");
      }, 10);
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 800);
}

function handleConClick() {
  s4 = "yes";
  let setI = setInterval(function () {
    if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "") {
      submitBtn.style.backgroundColor = "#0123b4";
      submitBtn.style.color = "white";
      document.querySelector(`.submit__submit`).disabled = false;
      setTimeout(function () {
        submitBtn.classList.add("button__anim");
      }, 10);
    }

    if (document.querySelector(`.submit__submit`).disabled === false) {
      clearInterval(setI);
    }
  }, 800);
}

function handleSubmit() {
  setTimeout(function () {
    blackLoading.classList.remove("none");
  }, 1);
  setTimeout(function () {
    blackLoading.style.opacity = 1;
  }, 10);

  setTimeout(function () {
    blackLoading.classList.add("none");
  }, 10000);

  let link = setInterval(function () {
    if (thx.style.display === "block") {
      blackLoading.style.opacity = 0;
      submitBtnPar.style.opacity = 0;

      setTimeout(function () {
        blackLoading.classList.add("none");
      }, 310);
      setTimeout(function () {
        location.href = `passbookTicket.html?${name}?${s1}`;
      }, 500);
      clearInterval(link);
    }
  }, 200);
}

function handleClickSubmit() {
  submitName.addEventListener("change", handleNameChange);
  submitTel.addEventListener("change", handleTelChange);
  submitStu.addEventListener("change", handleStuChange);
  submitCon.addEventListener("change", handleConChange);
  submitCon.addEventListener("click", handleConClick);
  submitBtnPar.addEventListener("click", handleSubmit);
}

function init() {
  handleClickSubmit();
}

init();
