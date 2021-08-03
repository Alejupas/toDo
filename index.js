const counter = 0;
const track = document.querySelector('.carousel-container')

const allSlidesArr = ["https://placeimg.com/1280/720/nature", "https://placeimg.com/1280/720/animals", "https://placeimg.com/1280/720/tech"]

// ARROWS
const arrowLeft = document.querySelector('.carousel__button--left');
const arrowRight = document.querySelector('.carousel__button--right');

arrowLeft.addEventListener("click", ()=>{
    
});

arrowRight.addEventListener("click", ()=>{
    
});


const getFirstImage = () => {
        track.style.backgroundImage = `url(${this.items[this.counter].image})`;
		imageContainer.innerHTML = `<h2>${this.items[this.counter].name}</h2>`;
}