// // function sendMail(event) {
//   event.preventDefault();
//   const tempParams = {
//     name: document.querySelector('#name').value,
//     email: document.querySelector('#email').value,
//     category: document.querySelector('#dropdown').value,
//     object: document.querySelector('#object').value,
//     message: document.querySelector('#comments').value,
//   };


//   const msgSend = document.querySelector("#msgSend");

//   emailjs.send('service_uqrkym9', 'template_oazxygk', tempParams).then(function (res) {
//     console.log("success", res.status);
//     msgSend.innerHTML = 'Votre message à bien été envoyé';
//     msgSend.style.color = "green";
//   })

