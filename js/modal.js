var modal = document.querySelector("#myModal");

var modalImg = document.querySelector(".modal-content");

Array.from(document.querySelectorAll(".myImg")).forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("klik");
    modal.style.display = "flex";
    modalImg.src = event.target.src;
  });
});

var span = document.querySelector(".close");

span.addEventListener("click", () => {
  modal.style.display = "none";
});
