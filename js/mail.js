var submit = document.querySelector("#submit-form");

submit.addEventListener("click", () => {
  console.log("klik");
  var name = document.querySelector("#name");
  var email = document.querySelector("#email");
  var message = document.querySelector("#message");

  function validateEmail(email) {
    var mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailFormat.test(email);
  }

  var formdata = new FormData();
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("message", message);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if ((this.readyState = 4 && this.status == 200)) {
      var successMsg = "Mail uspješno poslan. Kontaktirati ćemo Vas uskoro.";
      document.getElementById("ajaxResponseFail").style.display = "none";
      document.getElementById("ajaxResponseSuccess").style.display = "block";
      document.getElementById("ajaxResponseSuccess").innerHTML = successMsg;
    } else if ((this.readyState = 4 && this.status != 200)) {
      var failMsg =
        "Došlo je do greške. Javite nam se putem maila ili telefonom.";
      document.getElementById("ajaxResponseSuccess").style.display = "none";
      document.getElementById("ajaxResponseFail").style.display = "block";
      document.getElementById("ajaxResponseFail").innerHTML = failMsg;
    }
  };
  xhttp.open("POST", "send_mail.php", true);
  xhttp.send(formdata);
});
