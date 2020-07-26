const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");
const result5 = document.querySelector(".result5");
const result6 = document.querySelector(".result6");
const result7 = document.querySelector(".result7");
const result8 = document.querySelector(".result8");
const result9 = document.querySelector(".result9");
const result10 = document.querySelector(".result10");
const result11 = document.querySelector(".result11");
const result12 = document.querySelector(".result12");
const resultPage = document.querySelector(".result__page__wrap");
const all2 = document.querySelector(".all2");

const temp = location.href.split("?");

const forResult = parseInt(temp[1].split(":")[1], 10);

console.log(temp[1].split(":")[1]);

function handleResult() {
  if (forResult === 111) {
    setTimeout(function () {
      result1.classList.remove("none");
      result1.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 112) {
    setTimeout(function () {
      result2.classList.remove("none");
      result2.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 113) {
    setTimeout(function () {
      result3.classList.remove("none");
      result3.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 121) {
    setTimeout(function () {
      result4.classList.remove("none");
      result4.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 122) {
    setTimeout(function () {
      result5.classList.remove("none");
      result5.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 123) {
    setTimeout(function () {
      result6.classList.remove("none");
      result6.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 211) {
    setTimeout(function () {
      result7.classList.remove("none");
      result7.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 212) {
    setTimeout(function () {
      result8.classList.remove("none");
      result8.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 213) {
    setTimeout(function () {
      result9.classList.remove("none");
      result9.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 221) {
    setTimeout(function () {
      result10.classList.remove("none");
      result10.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 222) {
    setTimeout(function () {
      result11.classList.remove("none");
      result11.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  } else if (forResult === 223) {
    setTimeout(function () {
      result12.classList.remove("none");
      result12.classList.add("trans2");
      resultPage.classList.remove("none");
      resultPage.classList.add("trans2");
      all2.classList.remove("none");
      all2.classList.add("trans2");
    }, 200);
  }
}

function init() {
  handleResult();
}

init();
