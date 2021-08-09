import service from './scripts/service.js'
import renderElements from './scripts/render.js'
import crsl from './scripts/carousel.js'


// ARROWS
const arrowLeft = document.querySelector('.carousel__button--left');
const arrowRight = document.querySelector('.carousel__button--right');

// GET THUMBNAILS
const thumbnails = document.querySelector('.thumbnails')

let items = [];
let itemsCarousel = [];

//THUMBNAILS DYNAMIC
const setThumbnailItems = async() => {
  const getThumbnailItems = await service.getThumbnailItems();
  items = getThumbnailItems;
  renderElements(getThumbnailItems);
}
setThumbnailItems(items)


// CAROUSEL DYNAMIC
const setCarouselItems = async() => {
  const getCarouselItems = await service.getCarouselItems();
  itemsCarousel = getCarouselItems;
}
setCarouselItems(itemsCarousel)

// EVENT LISTENERS
arrowLeft.addEventListener('click', ()=> crsl.previous(itemsCarousel));
arrowRight.addEventListener('click', ()=> crsl.next(itemsCarousel));