var menuBars = document.querySelector(".fa-bars");
var menuMobile = document.querySelector(".menu-mobile");

menuBars.addEventListener("click", function () {
  if (menuMobile.style.display === "block") menuMobile.style.display = "none";
  else {
    menuMobile.style.display = "block";
  }
});
