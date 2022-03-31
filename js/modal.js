var modal = document.querySelector("#myModal");

var modalImg = document.querySelector(".modal-content");
var captionText = document.querySelector("#caption");

Array.from(document.querySelectorAll(".myImg")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  });
});

var span = document.querySelector(".close");

span.addEventListener("click", () => {
  modal.style.display = "none";
});
