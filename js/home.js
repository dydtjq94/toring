const scroll = document.querySelectorAll(`.scroll`);

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

function init() {
  scroll.forEach((item) => {
    scrollAppear(item);
  });

  window.scrollTo(1, 1);
}

init();
