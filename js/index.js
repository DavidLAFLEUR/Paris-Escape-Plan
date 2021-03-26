document.getElementById("sendmail").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".my-form").reset();
});
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function sendMail(params) {
  const tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("parisEscapePlan", "PEP", tempParams).then(
    (res) => {
      Toast.fire({
        icon: "success",
        title: "envoyé avec succès  !",
      });
      console.log(res.status);
    },
    (error) => {
      console.log(error.status);
      Toast.fire({
        icon: "error",
        title: "Une erreur c'est produite veuillez réessayer",
      });
    }
  );
}
