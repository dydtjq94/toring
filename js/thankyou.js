const time2 = document.querySelector(`#extra__time2`);
const passbookButton = document.querySelector(`.passbook__button__kakao2`);

function getTime() {
  const currentTime = new Date();
  // Don't delete this.
  const extraDay = new Date("2020-09-17:00:00:00+0900");
  const days = Math.floor((extraDay - currentTime) / 86400000);
  const hours = Math.floor(((extraDay - currentTime) % 86400000) / 3600000);
  const minutes = Math.floor(
    (((extraDay - currentTime) % 86400000) % 3600000) / 60000
  );
  const seconds = Math.floor(
    ((((extraDay - currentTime) % 86400000) % 3600000) % 60000) / 1000
  );

  time2.innerHTML = `${days}일 ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}후 종료`;
}

function handlePassButton() {
  location.href = "http://pf.kakao.com/_WMMxgxb/chat";
}

function init() {
  getTime();
  setInterval(getTime, 500);

  passbookButton.addEventListener("click", handlePassButton);
}

init();
