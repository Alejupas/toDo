// CAROUSEL
const slideTrack = document.querySelector('.carousel__track')

// all slides
const slides = Array.from(slideTrack.children)

console.log(slideTrack);
console.log(slides);

// ARROWS
const arrowLeft = document.querySelector('.carousel__button--left');
const arrowRight = document.querySelector('.carousel__button--right');

// SLIDES
const firstSlide = document.querySelector('.first')
const secondSlide = document.querySelector('.second')
const thirdSlide = document.querySelector('.third')

arrowLeft.addEventListener("click", ()=>{
    console.log('clicked');
});

arrowRight.addEventListener("click", ()=>{
    
    firstSlide.className.add = 'display-none';
    secondSlide.classList.remove = 'display-none'
});
