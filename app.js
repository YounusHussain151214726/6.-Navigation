const menuIcon = document.getElementById("menuIcon");
const ul = document.getElementById("ul");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

function toggle() {
  menuIcon.classList.toggle("change");

  if (ul.classList.toggle("ul-active")) {
    ul.classList.add("come");
    ul.classList.remove("out");
  } else {
    ul.classList.add("out");
    ul.classList.remove("come");
  }
}

menuIcon.addEventListener("click", toggle);
nav1.addEventListener("click", toggle);
nav2.addEventListener("click", toggle);
nav3.addEventListener("click", toggle);
nav4.addEventListener("click", toggle);
nav5.addEventListener("click", toggle);
