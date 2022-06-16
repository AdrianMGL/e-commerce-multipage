"use strict";

/** =============== LIGHTBOX ===============*/

const productItems = document.querySelectorAll(".product__img"),
  totalProductItems = productItems.length,
  lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox__img"),
  lightboxClose = lightbox.querySelector(".lightbox__close"),
  lightboxCounter = lightbox.querySelector(".caption__counter");

let itemIndex = 0;

for (let i = 0; i < totalProductItems; i++) {
  productItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

/** PREV */

function prevItem() {
  if (itemIndex === 0) itemIndex = totalProductItems - 1;
  else itemIndex--;
  changeItem();
}

/** NEXT */

function nextItem() {
  if (itemIndex === totalProductItems - 1) itemIndex = 0;
  else itemIndex++;
  changeItem();
}

/*** OPEN IMAGE **/

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

/*** CHANGE IMAGE **/

function changeItem() {
  const imgSrc = productItems[itemIndex]
    .querySelector(".product__img img")
    .getAttribute("src");

  /* */
  lightboxImg.src = imgSrc;
  /* */
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalProductItems;
}

/*** CLOSE LIGHTBOX **/

lightbox.addEventListener("click", function () {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
