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
    const deleteBtnInItemArray = document.getElementsByClassName("delete");
    const editBtnInItem = document.querySelector(".edit");

    for (let i = 0; i < deleteBtnInItemArray.length; i++) {
      deleteBtnInItemArray[i].addEventListener("click", () => {
        confirmationMdl.style.display = "block";
        const confirmToDeleteBtnArr = document.getElementsByClassName("yes");
        confirmToDeleteBtnArr[i].addEventListener("click", () => {
          service.deleteData();
          confirmationMdl.style.display = "none";
          console.log(confirmToDeleteBtnArr[i]);
        });
      });
      const declineToDeleteBtn = document.querySelector(".no");
      declineToDeleteBtn.addEventListener(
        "click",
        () => (confirmationMdl.style.display = "none")
      );
      // console.log(confirmToDeleteBtnArr[i]);
      // confirmToDeleteBtnArr[i].addEventListener("click", () => {
      //   service.deleteData();
      //   confirmationMdl.style.display = "none";
      // });
    }
  },
};

export default renderElements;
