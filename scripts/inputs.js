import renderElements from "./render.js";
import service from "./service.js";

// select from DOM
const titleInput = document.querySelector(".title-input");
const textInput = document.querySelector(".text-input");
const urlInput = document.querySelector(".photoUrl-input");
const priceInput = document.querySelector(".price-input");

let itemsArray = [];

const itemsData = {
  submit: () => {
    const item = {
      title: titleInput.value,
      text: textInput.value,
      img: urlInput.value,
      price: priceInput.value,
    };
    service.postData(item);
    itemsArray.push(item);
    renderElements.renderThumbnails(itemsArray);
  },
  delete: async (item) => {
    await service.deleteData(item.id);
    itemsArray.filter(
      (itemToDelete) => Number(itemToDelete.id) !== Number(item.id)
    );
    renderElements.renderThumbnails(itemsArray);
  },
};

export default itemsData;
