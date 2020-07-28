const form = document.querySelector(".submitForm");

const temp = decodeURI(location.href);
const name = temp.split(":")[2];
console.log(name);

function init() {
  form.innerHTML = `<div class="submit__mentor">${name} 멘토님</div>
    <form
      action="https://script.google.com/macros/s/AKfycbzMJEI0x4Mxzyfd2a5RNo-rh69KxHdtW-6Z2c-QEonOg6L5zso/exec"
      class="gform"
      method="POST"
      data-email="example@email.net"
    >
      <input type="radio" name="name" value="대학교 캠퍼스" /> 캠퍼스
      <input type="radio" name="name" value="장소 협의" /> 장소 협의
      <input type="text" name="message" placeholder="학생 이름" />
      <input
        type="tel"
        name="email"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        placeholder="부모님 전화번호"
      />
      <input type="submit" value="멘토링 신청" />
      <div style="display: none;" class="thankyou_message">
        <!-- You can customize the thankyou message by editing the code below -->
        <h2>
          <em>Thanks</em> for contacting us! We will get back to you soon!
        </h2>
      </div>`;
}

init();
