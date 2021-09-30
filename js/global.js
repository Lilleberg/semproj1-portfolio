const buttonHambMenu = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".navbar");
const blurElements = document.querySelectorAll("main, footer");

buttonHambMenu.onclick = function () {
  if (nav.style.display === "block") {
    styleElements(nav, "none", 0, "<i class='fas fa-bars'></i>");
  } else {
    styleElements(nav, "block", 3, "<i class='fas fa-times'></i>");
  }
}

function backgroundBlur(blur) {
  blurElements.forEach(function (elem) {
    elem.style.filter = `blur(${blur}px)`;
  });
}

function styleElements(element, display, blur, icon) {
  element.style.display = display;
  buttonHambMenu.innerHTML = icon;
  backgroundBlur(blur);
}

document.querySelector("main").onclick = function () {
  if (nav.style.display === "block") {
    styleElements(nav, "none", 0, "<i class='fas fa-bars'></i>");
  }
}