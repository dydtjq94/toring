const tagContent = document.querySelectorAll(`.tag__content`);
const loadingWrap = document.querySelector(`.ids__loading__wrap`);
const tagButton = document.querySelector(`.tag__button`);

let tagList = [];
const tagLs = "tag";

function handleSelectTag(e) {
  const toDoObj = {
    id: parseInt(e.target.id, 10), //한개씩 추가되는 id를 얻기 위해
  };

  if (e.target.classList[1] !== "selected__tag") {
    e.target.classList.add("selected__tag");
    tagList.push(toDoObj);
    saveTag();
  } else {
    e.target.classList.remove("selected__tag");
    const cleanTags = tagList.filter(function (tag) {
      return tag.id !== parseInt(e.target.id);
    });
    tagList = cleanTags;
    saveTag();
  }
  loadingWrap.classList.remove("none");

  setTimeout(function () {
    loadingWrap.classList.add("none");
  }, 700);
}

function saveTag() {
  localStorage.setItem(tagLs, JSON.stringify(tagList));
}

function paintTag(e) {
  tagContent[e - 1].classList.add("selected__tag");
}

function loadTag() {
  const loadedTags = localStorage.getItem(tagLs);
  if (loadedTags !== null) {
    const parsedTags = JSON.parse(loadedTags);

    //어레이 안에 있는 값 각각 함수
    parsedTags.forEach(function (tag) {
      paintTag(tag.id);
      tagList.push(tag);
    });
  }
}

function handleResult() {
  location.href = "mentorsimple.html";
}

function init() {
  tagButton.addEventListener("click", handleResult);
  tagContent.forEach((e) => e.addEventListener("click", handleSelectTag));
  loadTag();
}

init();
