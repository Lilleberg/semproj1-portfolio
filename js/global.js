const buttonHambMenu = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".navbar");

buttonHambMenu.onclick = function () {
  console.log("click");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}