const a = document.querySelector(".mentor__name");
const priceButton = document.querySelector(".price__button");

const mentorName = a.innerText.split(" ")[0];

function handlePriceButton() {
  location.href = "submit.html?" + "name" + ":" + mentorName;
}

function init() {
  priceButton.addEventListener("click", handlePriceButton);
}

init();
