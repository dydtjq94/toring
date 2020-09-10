const time2 = document.querySelector(`#extra__time2`);
const passbookButton = document.querySelector(`.passbook__button__kakao2`);
const mentorName = document.querySelector(`.mentor__naming`);

const temp = decodeURI(location.href);
console.log(temp);
const name = temp.split("?")[1];
console.log(name);

mentorName.innerHTML = `${name} 멘토님`;

function getTime() {
  const currentTime = new Date();
  const extraDay = new Date("2020-09-17");
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
  var newWindow = window.open("about:blank");
  newWindow.location.href = "http://pf.kakao.com/_WMMxgxb/chat";
}

function init() {
  getTime();
  setInterval(getTime, 500);

  passbookButton.addEventListener("click", handlePassButton);
}

init();
