const tagContent = document.querySelectorAll(`.tag__content`);
const loadingWrap = document.querySelector(`.loading__wrap`);

function handleSelectTag(e) {
  if (e.target.classList[1] !== "selected__tag") {
    e.target.style.color = "red";
    e.target.classList.add("selected__tag");
  } else {
    e.target.style.color = "black";
    e.target.classList.remove("selected__tag");
  }
  loadingWrap.classList.remove("none");
  setTimeout(function () {
    loadingWrap.classList.add("none");
  }, 2000);
}

function init() {
  tagContent.forEach((e) => e.addEventListener("click", handleSelectTag));
}

init();
