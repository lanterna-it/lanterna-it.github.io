var expandImgDiv = document.querySelector(".col__main-image");
var expandImg = document.querySelector("#expandedImg");

Array.from(document.querySelectorAll(".myImg")).forEach((item) => {
  item.addEventListener("click", (event) => {
    expandImgDiv.style.display = "block";
    expandImg.src = event.target.src;
  });
});
