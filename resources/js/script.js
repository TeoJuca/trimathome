"use strict";
// Selecting elements
const modalInfo = document.querySelector(".modal-info");
const modalBook = document.querySelector(".modal-book");

const overlayInfo = document.querySelector(".overlay-info");
const overlayBook = document.querySelector(".overlay-book");

const btnCloseModalInfo = document.querySelectorAll(".close-modal-info");
const btnCloseModalBook = document.querySelector(".close-modal-book");

const btnOpenModalInfo = document.querySelectorAll(".show-modal-contact");
const btnOpenModalBook = document.querySelector(".show-modal-book");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const openHamburger = document.querySelector(".openHamburger");
const closeHamburger = document.querySelector(".closeHamburger");

const slides = document.querySelectorAll(".slide");
const images = document.querySelector(".images");
const imagesArr = images.children;

// Functions for slides images

let indexValue = 1;

const showImg = function (img) {
  let i;

  if (img > imagesArr.length) indexValue = 1;
  if (img < 1) indexValue = imagesArr.length;

  for (i = 0; i < imagesArr.length; i++) {
    imagesArr[i].style.display = "none";
    imagesArr[indexValue - 1].style.display = "block";
  }
};

const sideSlide = function (e) {
  showImg((indexValue += e));
};

showImg(indexValue);

// Functions for open and close

const openHamMenu = function () {
  hamburgerMenu.style.display = "flex";
  hamburgerMenu.style.top = "0";
};
const closeHamMenu = function () {
  hamburgerMenu.style.top = "-110%";
};

const openModalInfo = function () {
  modalInfo.classList.remove("hidden-info");
  overlayInfo.classList.remove("hidden-info");
};
const openModalBook = function () {
  modalBook.classList.remove("hidden-book");
  overlayBook.classList.remove("hidden-book");
};

const closeModalInfo = function () {
  modalInfo.classList.add("hidden-info");
  overlayInfo.classList.add("hidden-info");
};
const closeModalBook = function () {
  modalBook.classList.add("hidden-book");
  overlayBook.classList.add("hidden-book");
};

// Event Listeners
btnOpenModalInfo.forEach((btnOpen) =>
  btnOpen.addEventListener("click", openModalInfo)
);
btnCloseModalInfo.forEach((btnClose) =>
  btnClose.addEventListener("click", closeModalInfo)
);

btnOpenModalBook.addEventListener("click", openModalBook);
btnCloseModalBook.addEventListener("click", closeModalBook);

overlayInfo.addEventListener("click", closeModalInfo);
overlayBook.addEventListener("click", closeModalBook);

openHamburger.addEventListener("click", openHamMenu);
closeHamburger.addEventListener("click", closeHamMenu);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !modalInfo.classList.contains("hidden-info")) ||
    (e.key === "Escape" && !modalBook.classList.contains("hidden-book"))
  ) {
    closeModalInfo();
    closeModalBook();
  }
});
