let counter = 0;

const carousel = document.getElementById('carousel')
const imageContainer = document.querySelector('.carousel')

const imageArr = ['https://placeimg.com/1280/720/nature', 'https://placeimg.com/1280/720/animals', 'https://placeimg.com/1280/720/tech']
const heroPhrase = ['Good things', 'Welcome!', 'Wonderful day']

// ARROWS
const arrowLeft = document.querySelector('.carousel__button--left');
const arrowRight = document.querySelector('.carousel__button--right');

// FUNCTIONS
const firstImg = () => {
   return counter < 0;
}

const lastImg = () => {
   return counter > imageArr.length - 1;
}

const flipLeft = () => {
    counter--;
    if(firstImg())  counter = imageArr.length - 1;
    return
}


const filpRight = () => {
    counter++;
    if(lastImg()) counter = 0;
    return
}

arrowLeft.addEventListener('click', ()=>{
  flipLeft()
  addHtml()
});

arrowRight.addEventListener('click', ()=>{
  filpRight()
  addHtml()
});

const addHtml = () => {
    carousel.style.backgroundImage = `url(${imageArr[counter]})`;
    imageContainer.innerHTML = `<h2>${heroPhrase[counter]}</h2>`;
    imageContainer.style.fontSize = '25px';
    imageContainer.style.color = 'white';
    imageContainer.style.textAlign = 'center';

    return;
}
addHtml()

// THUMBNAIL _________________________________
const thumbnails = document.querySelector('.thumbnails')

function  getRandomImg () {
  thumbnails.innerHTML = '';
  fetch('http://localhost:3000/items')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.map((item)=>{
      thumbnails.innerHTML += `
      <div class="aside aside1">
          <a href="#">
              <img class="thumbnail" src="${item.img}">
          </a>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div> `
    } )
})
}
getRandomImg()