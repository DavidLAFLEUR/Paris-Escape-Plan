window.onscroll = function () {
  myFunction(), color();
};

var headers = document.getElementById("myHeader");
var sticky = headers.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headers.classList.add("sticky");
  } else {
    headers.classList.remove("sticky");
  }
}

const header = document.querySelector(".header");
const menu = document.querySelector(".menu");

function color() {
  var top = window.scrollY;
  if (top >= 10) {
    header.classList.add("active"), menu.classList.add("active");
  } else {
    header.classList.remove("active");
    menu.classList.remove("active");
  }
}
