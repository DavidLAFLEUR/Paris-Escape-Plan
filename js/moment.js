let now = moment();
moment.locale("fr");

function update() {
  let maintenant = now.format("HH:mm:ss");
  //   console.log(maintenant);
  let covid = "";
  if (maintenant >= "06:00:00" && maintenant <= "19:00:00") {
    // console.log("je suis dans le if");
    covid = "Vous pouvez Circuler";
  } else {
    // console.log("je suis dans le esle if");
    covid = "Attention Couvre Feu";
  }
  document.getElementById("clock").innerHTML = moment().format(
    `[${covid}]  D MMMM YYYY HH:mm:ss `
  );
}

setInterval(update, 1000);
