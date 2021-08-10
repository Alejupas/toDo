import renderElements from "./render.js";

// select from DOM
const titleInput = document.querySelector(".title-input");
const textInput = document.querySelector(".text-input");
const urlInput = document.querySelector(".photoUrl-input");
const priceInput = document.querySelector(".price-input");

let itemsArray = [];

async function postData(data) {
  const response = await fetch("http://localhost:3000/items/", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const itemsData = {
  submit: () => {
    const item = {
      title: titleInput.value,
      text: textInput.value,
      img: urlInput.value,
      price: priceInput.value,
    };
    postData(item);
    itemsArray.push(item);
    renderElements.renderThumbnails(itemsArray);
    console.log(item);
  },
};

export default itemsData;
