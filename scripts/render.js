const thumbnails = document.querySelector('.thumbnails');
const modalForCreate = document.getElementById('modal')

const renderElements = {
    renderThumbnails: (items) => {
        items.map((item) => {
            thumbnails.innerHTML += `
                <div class="aside aside1">
                <a href="#">
                <img class="thumbnail" src="${item.img}">
                </a>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                </div> `
    })
    },

    renderCreateItem: () => {
        modalForCreate.innerHTML = `
        <div class="create-item-modal">
            <h3>Create an item</h3>
            <input required type="text" class="title-input" maxlength="30" placeholder="enter the title">
            <input required type="text" class="text-input" maxlength="60" placeholder="enter text here">
            <input required type="text" class="photo-input" placeholder="Paste photo URL">
            <button class="add-toList-btn">Add item</button>
        </div>
        `;
    }
}


export default renderElements;