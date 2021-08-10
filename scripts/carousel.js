// GET ELEMENTS
const carousele = document.getElementById('carousel');
const imageContainer = document.querySelector('.carousel');

let counter = 0;

const crsl = {
    previous: (items) => {
        counter--;
        if(counter < 0) counter = items.length - 1;
        carousele.style.backgroundImage = `url("${items[counter].img}")`;
        imageContainer.innerHTML = `<h2>${items[counter].text}</h2>`;
    },

    next: (items) => {
        counter++;
        if(counter > items.length - 1) counter = 0;
        carousele.style.backgroundImage = `url("${items[counter].img}")`;
        imageContainer.innerHTML = `<h2>${items[counter].text}</h2>`;
    },

    defaultImg: (items) => {
        if(counter === 0) {
        carousele.style.backgroundImage = `url("${items[counter].img}")`;
        imageContainer.innerHTML = `<h2>${items[counter].text}</h2>`;
        }
    }
}

export default crsl;

