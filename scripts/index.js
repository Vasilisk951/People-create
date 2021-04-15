const btnModalShow = document.querySelector(".banner-btn");
const btnModalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const modalFon = document.querySelector(".modal-fon");
const priceBtn = document.querySelectorAll(".price-item__btn");

btnModalShow.addEventListener("click", (e) => {
  openModal();
});

btnModalClose.addEventListener("click", (e) => {
  closeModal();
});

priceBtn.forEach((item) => {
  item.addEventListener("click", () => {
    openModal();
  });
});

function closeModal() {
  document.body.style.overflow = "visible";
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.classList.remove("active");
  }, 300);
}
function openModal() {
  modalFon.addEventListener("click", () => {
    closeModal();
  });
  scroll(top);
  document.body.style.overflow = "hidden";
  modal.classList.add("active");
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 100);
}
