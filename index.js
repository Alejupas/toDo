import service from "./scripts/service.js";
import renderElements from "./scripts/render.js";
import crsl from "./scripts/carousel.js";
import itemsData from "./scripts/inputs.js";

// DOM elements
const arrowLeft = document.querySelector(".carousel__button--left");
const arrowRight = document.querySelector(".carousel__button--right");
const addItemButton = document.querySelector(".add-item");
const modalForCreate = document.getElementById("modal");
const cancelToAdd = document.querySelector(".cancel-List-btn");
const agreeToAdd = document.querySelector(".add-toList-btn");

let items = [];
let itemsCarousel = [];

//THUMBNAILS DYNAMIC
const setThumbnailItems = async () => {
  const getThumbnailItems = await service.getThumbnailItems();
  items = getThumbnailItems;
  renderElements.renderThumbnails(getThumbnailItems);
};
setThumbnailItems(items);

// CAROUSEL DYNAMIC
const setCarouselItems = async () => {
  const getCarouselItems = await service.getCarouselItems();
  itemsCarousel = getCarouselItems;
  crsl.defaultImg(itemsCarousel);
};
setCarouselItems();

// EVENT LISTENERS
arrowLeft.addEventListener("click", () => crsl.previous(itemsCarousel));
arrowRight.addEventListener("click", () => crsl.next(itemsCarousel));
addItemButton.addEventListener("click", () => {
  modalForCreate.style.display = "block";
});
cancelToAdd.addEventListener(
  "click",
  () => (modalForCreate.style.display = "none")
);
agreeToAdd.addEventListener("click", () => itemsData.submit());
