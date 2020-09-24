import { mentors } from "./mentorInfo";

const scroll = document.querySelectorAll(`.scroll`);
const countNum = document.querySelector(`#count__num`);
const secondContentWrap = document.querySelector(`.second__content__wrap`);

function scrollAppear(event) {
  event.style.transition = "all 1s ease-in-out";
  event.classList.add("gone");
  window.addEventListener("scroll", () => {
    let elPos = event.getBoundingClientRect().top,
      pos = window.innerHeight / 1;

    if (elPos < pos) {
      event.classList.add("appear");
    } else {
      event.classList.remove("appear");
    }
  });
}

function handleClickSelect() {
  const goSelectButton = document.querySelectorAll(`#goButton`);
  goSelectButton.forEach((e) =>
    e.addEventListener("click", function handleResultClick() {
      e.classList.add("click__anim");

      location.href = "select.html";
    })
  );
}

function secondDisplayMentor() {
  let lotto = [];

  function lottoNum() {
    let i = 0;
    while (i < 4) {
      let n = Math.floor(Math.random() * mentors.length);
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

  let secondContent = ``;
  lotto.forEach(function paintSecondContent(e) {
    secondContent =
      secondContent +
      ` <div class="second__content ${mentors[e].nameEng}">
    <div class="second__content__upper">
      <div class="second__content__upper__up">
        <div class="second__content__upper__q">
          <span class="blue__bold">Q.</span>
        </div>
        <div class="second__content__upper__question">
        ${mentors[e].mainQnA.title}
        </div>
      </div>
      <div class="second__content__upper__down">
        <div class="second__content__upper__down__extra"></div>
        <div class="second__content__upper__down__sub">
        ${mentors[e].mainQnA.sub}
        </div>
      </div>
    </div>
    <div class="second__content__lower">
      <div class="second__content__lower__up">
        <div class="second__content__lower__img">
          <img src="./img/${mentors[e].nameEng}.jpeg" alt="" /
          class="lower__img__mentor">
        </div>
        <div class="second__content__lower__mentor">
          <div class="second__content__lower__mentor__up">
          <span class="blue__bold">${mentors[e].school}</span> 졸업생 ${
        mentors[e].name
      } 멘토님
          </div>
          <div class="second__content__lower__mentor__down">
          ${mentors[e].univ} ${mentors[e].major} ${mentors[e].year}
          </div>
        </div>
      </div>
      <div class="second__content__lower__down">
        <div class="second__content__lower__down__extra"></div>
        <div class="second__content__lower__down__sub">
        ${mentors[e].special[1].detail.slice(0, 120)}....
        </div>
      </div>
    </div>
    <div class="second__content__addview">자세히 보기 ></div>
  </div>`;
  });
  secondContentWrap.innerHTML = secondContent;
  handleSecondGoDetail();
}

function handleSecondGoDetail() {
  const secondContent = document.querySelectorAll(`.second__content`);

  secondContent.forEach((e) =>
    e.addEventListener("click", function handleResultClick() {
      e.classList.add("click__anim");
      location.href = "mentordetail.html?" + "name" + ":" + e.classList[1];
    })
  );
}

function handleThirdGoDetail() {
  const thirdContent = document.querySelectorAll(`.main__third__content`);

  thirdContent.forEach((e) =>
    e.addEventListener("click", function handleResultClick() {
      e.classList.add("click__anim");
      setTimeout(function () {
        e.classList.remove("click__anim");
      }, 410);
      location.href = "mentordetail.html?" + "name" + ":" + e.classList[1];
    })
  );
}

function handleCountNum() {
  let countNumber = 0;
  function countUp() {
    if (countNumber < 157) {
      countNumber++;
      countNum.innerHTML = countNumber;
    }
  }
  setInterval(countUp, 30);
}

function init() {
  scroll.forEach((item) => {
    scrollAppear(item);
  });
  window.scrollTo(1, 1);

  handleClickSelect();

  secondDisplayMentor();
  handleThirdGoDetail();
  handleCountNum();
}

init();
