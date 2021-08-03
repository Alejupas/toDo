const counter = 0;

const carousel = document.getElementById('carousel')
const imageContainer = document.querySelector('.carousel')

const imageArr = ["https://placeimg.com/1280/720/nature", "https://placeimg.com/1280/720/animals", "https://placeimg.com/1280/720/tech"]
const heroPhrase = ['Good things', 'Welcome!', 'Wonderful day']

// ARROWS
const arrowLeft = document.querySelector('.carousel__button--left');
const arrowRight = document.querySelector('.carousel__button--right');

// FUNCTIONS
const firstImg = () => {
    counter < 0;
}

const lastImg = () => {
    counter > imageArr.length - 1;
}

arrowLeft.addEventListener("click", ()=>{
   const flipLeft = () => {
    counter--;
    if(firstImg()) counter = imageArr.length - 1;
    return
    }
});

arrowRight.addEventListener("click", ()=>{
const filpRight = () => {
    counter++;
    if(lastImg()) counter = 0;
    return
    }
});

const addHtml = () => {
    carousel.style.backgroundImage = `url(${imageArr[counter]})`;
    imageContainer.innerHTML = `<h2>is good.</h2>`;
    imageContainer.style.fontSize = '25px';
    imageContainer.style.zIndex = '12';

    return;
}
addHtml()