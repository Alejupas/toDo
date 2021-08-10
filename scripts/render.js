const thumbnails = document.querySelector(".thumbnails");

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
  },
};

export default renderElements;
