var menuBars = document.querySelector(".menu-bars");
var menuBarsClose = document.querySelector(".menu-bars-close");
var menuMobile = document.querySelector(".menu-mobile");

menuBars.addEventListener("click", function () {
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
    menuBarsClose.style.display = "block";
    menuBars.style.display = "none";
    menuBarsClose.addEventListener("click", () => {
      if (menuMobile.style.display === "block") {
        menuMobile.style.display = "none";
        menuBars.style.display = "block";
        menuBarsClose.style.display = "none";
      } else {
        menuBars.style.display = "block";
        menuBarsClose.style.display = "none";
      }
    });
    // menuBars.style.display = "none";
  }
});
