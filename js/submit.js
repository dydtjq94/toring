const form = document.querySelector(".submitForm");

const temp = decodeURI(location.href);
const name = temp.split(":")[2];
const major = parseInt(temp.split(":")[1].split("?")[1], 10);
console.log(name, major);

function init() {
  //   form.innerHTML = `
  //   <div class="passbook">
  //         무통장입금
  //         <br />
  //         예금주: 야미구 (주)<br />계좌은행: 기업은행 <br/>계좌번호: 066-095403-04-016
  //   ${
  //     major === 0
  //       ? `<div class="submit__price">149,000원</div>`
  //       : `<div class="submit__price">99,000원</div>`
  //   }
  //   </div>
  //     <form
  //       action="https://script.google.com/macros/s/AKfycbzMJEI0x4Mxzyfd2a5RNo-rh69KxHdtW-6Z2c-QEonOg6L5zso/exec"
  //       class="gform"
  //       method="POST"
  //       data-email="example@email.net"
  //     >
  //       <input type="text" name="message" value="${name}" />
  //       <div class="input__radio">
  //       <input type="radio" name="name" value="대학교 캠퍼스 ${name}" /> 캠퍼스
  //       <input type="radio" name="name" value="장소 협의" /> 장소 협의
  //       </div>
  //       <input type="text" name="message" placeholder="학생 이름" />
  //       <input
  //         type="tel"
  //         name="email"
  //         pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
  //         placeholder="부모님 전화번호"
  //       />
  //       <input type="submit" value="멘토링 신청" />
  //       <div style="display: none;" class="thankyou_message">
  //         <!-- You can customize the thankyou message by editing the code below -->
  //         <h2>
  //           감사합니다! 입금 확인 완료 후에 멘토링 진행 연락 드리겠습니다!
  //         </h2>
  //       </div>`;
}

init();
