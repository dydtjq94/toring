const scroll = document.querySelectorAll(`.scroll`);
const button1 = document.querySelector(`.main__button`);
const button2 = document.querySelector(`.main__third__button`);
const button3 = document.querySelector(`.main__fifth__button`);

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
  location.href = "select.html";
}

function init() {
  scroll.forEach((item) => {
    scrollAppear(item);
  });

  window.scrollTo(1, 1);

  button1.addEventListener("click", handleClickSelect);
  button2.addEventListener("click", handleClickSelect);
  button3.addEventListener("click", handleClickSelect);
}

init();
