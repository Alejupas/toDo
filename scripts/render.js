import service from "./service.js";

const thumbnails = document.querySelector(".thumbnails");
const confirmationMdl = document.getElementById("confirmation-modal");

const renderElements = {
  renderThumbnails: (items) => {
    items.map((item) => {
      thumbnails.innerHTML += `
      <div class="aside">
      <a href="#">
      <img class="thumbnail" src="${item.img}">
      </a>
      <h3 class="item-title">${item.title}</h3>
      <p class="item-text">${item.text}</p>
                  <p class="price">$${item.price}</p>
                  <div class="item-buttons">
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                  </div>
                  </div> `;
    });
    const editBtnInItem = document.querySelector(".edit");

    const deleteBtnInItemArray = document.querySelectorAll(".delete");

    deleteBtnInItemArray.forEach((item, i) => {
      item.addEventListener("click", () => {
        const declineToDeleteBtn = document.querySelector(".no");
        declineToDeleteBtn.addEventListener(
          "click",
          () => (confirmationMdl.style.display = "none")
        );

        const confirmToDeleteBtnArr = document.querySelectorAll(".yes");
        console.log(confirmToDeleteBtnArr);
        confirmToDeleteBtnArr.addEventListener("click", () => {
          service.deleteData(item.id);
          confirmationMdl.style.display = "none";
        });
        confirmationMdl.style.display = "block";
      });
    });
  },
};

export default renderElements;
