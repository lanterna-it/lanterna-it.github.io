var showImgBtn = document.querySelector(".btn-open");
var closeImgBtn = document.querySelector(".btn-close");
var showImg = document.querySelector(".content__image-gallery__row__hidden");

showImgBtn.addEventListener("click", function () {
  // function showImage() {
  if (showImg.style.display === "block") {
    showImg.style.display = "none";
    showImgBtn.style.display = "block";
  } else {
    showImg.style.display = "block";
    closeImgBtn.style.display = "block";
    showImgBtn.style.display = "none";
  }
  // }
});

closeImgBtn.addEventListener("click", function () {
  // function showImage() {
  if (showImg.style.display === "block") {
    showImg.style.display = "none";
    showImgBtn.style.display = "block";
    closeImgBtn.style.display = "none";
  } else {
    showImg.style.display = "block";
    closeImgBtn.style.display = "block";
    showImgBtn.style.display = "none";
  }
  // }
});
