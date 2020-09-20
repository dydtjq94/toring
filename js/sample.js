const tagContent = document.querySelectorAll(`.tag__content2`);
const result__sample__wrap = document.querySelector(`.result__sample__wrap`);
const loadingWrap = document.querySelector(`.ids__loading__wrap`);

let tagList = [];
const tagLs = "tag";

function handleSelectTag(e) {
  const tagTarget = e.target.innerText;
  const tagSchool = tagTarget.split(" ")[1];

  const toDoObj = {
    school: tagSchool,
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
  result__sample__wrap.classList.add("none");
  setTimeout(function () {
    loadingWrap.classList.add("none");
    result__sample__wrap.classList.remove("none");
  }, 700);

  console.log(tagList);
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
function init() {
  tagContent.forEach((e) => e.addEventListener("click", handleSelectTag));
  loadTag();
}

init();
