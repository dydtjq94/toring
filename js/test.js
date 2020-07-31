const first = document.querySelector(".first");
const secondOne = document.querySelector(".second__one");
const secondTwo = document.querySelector(".second__two");
const secondThree = document.querySelector(".second__three");
const third = document.querySelector(".third");
const forth = document.querySelector(".forth");
const button1 = document.querySelectorAll(".button1");
const button2 = document.querySelectorAll(".button2");
const button3 = document.querySelectorAll(".button3");
const progress = document.querySelector("#myProgress");
const find = document.querySelector("#find");
const loadingWrap = document.querySelector(".loading__wrap");
const testTitle = document.querySelector(".test__title");

const forResult = [];

let i = 0;
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 8);
    function frame() {
      if (width >= 33) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = "";
      }
    }
  }
}

function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 33;
    var id = setInterval(frame, 8);
    function frame() {
      if (width >= 66) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = "";
      }
    }
  }
}
function move3() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 66;
    var id = setInterval(frame, 8);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = "";
      }
    }
  }
}

function resultMove() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function resultMove2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 51;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function resultMove3() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 81;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function handleFirstClick(e) {
  setTimeout(function () {
    first.classList.add("none");
  }, 300);
  first.classList.add("fadeout");
  setTimeout(function () {
    secondOne.classList.remove("none");
    secondOne.classList.add("trans");
  }, 300);
  console.dir(e.target);
  e.target.classList.add("selected");
  move1();
  forResult.push(parseInt(e.target.name, 10));
  console.log(forResult);
  button2.forEach((e) => e.addEventListener("click", handleSecondClick));
}

function handleSecondClick(e) {
  setTimeout(function () {
    secondOne.classList.add("none");
  }, 300);
  secondOne.classList.remove("trans");
  setTimeout(function () {
    secondOne.classList.add("fadeout");
  }, 1);
  setTimeout(function () {
    third.classList.remove("none");
    third.classList.add("trans");
  }, 300);
  move2();
  console.log("click");
  e.target.classList.add("selected");

  forResult.push(parseInt(e.target.name, 10));
  console.log(forResult);
  button3.forEach((e) => e.addEventListener("click", handleResult));
}

function handleResult(e) {
  move3();
  setTimeout(function () {
    third.classList.add("none");
    progress.classList.add("none");
  }, 600);
  third.classList.remove("trans");
  setTimeout(function () {
    third.classList.add("fadeout");
    progress.classList.add("fadeout");
  }, 301);

  setTimeout(function () {
    progress.classList.remove("none");
    progress.classList.remove("fadeout");
    resultMove();
    find.classList.remove("none");
  }, 600);

  setTimeout(function () {
    resultMove2();
  }, 2250);

  setTimeout(function () {
    resultMove3();
  }, 2970);

  forResult.push(parseInt(e.target.name, 10));
  e.target.classList.add("selected");

  console.log(forResult);

  setTimeout(function () {
    progress.classList.add("none");
    // progress.classList.add("fadeout");
    find.classList.add("none");
    loadingWrap.classList.add("none");
    loadingWrap.classList.remove("none");
  }, 3601);

  console.log(forResult.join(""), [1, 1, 1]);

  const name = "mentor";
  setTimeout(function () {
    location.href = "result.html?" + name + ":" + forResult.join("");
  }, 5601);
}

function init() {
  button1.forEach((e) => e.addEventListener("click", handleFirstClick));
}

init();
