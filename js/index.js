document.getElementById("sendmail").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".my-form").reset();
});

function sendMail(params) {
  const tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("parisEscapePlan", "PEP", tempParams).then(function (res) {
    console.log("success", res.status);
  });
}
