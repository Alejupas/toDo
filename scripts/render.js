const thumbnails = document.querySelector('.thumbnails');
const modalForCreate = document.querySelector('.modal')

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
    }
}


export default renderElements;