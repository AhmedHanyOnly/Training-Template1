let links = document.querySelector("header .links .icons");
let toggle = document.querySelector("header .links ul");

links.onclick = function () {
  toggle.classList.toggle("open");
};

let date = new Date();
console.log(date);
