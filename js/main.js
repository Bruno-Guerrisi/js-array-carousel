/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


const images = document.querySelector('.images');

const thumbs = document.querySelector('.thumbs');

for(i=0; i < imageCollection.length; i++){

    images.innerHTML += `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="Lorem">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>`;

    thumbs.innerHTML += `
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="Lorem">
    </div>`;
}

let activeCounter = 1;

document.getElementsByClassName('image-container')[activeCounter].classList.add('active');
document.getElementsByClassName('thumb')[activeCounter].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    activeCounter++

    if(activeCounter > imageCollection.length -1){
        activeCounter = 0;
    }


    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[activeCounter].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeCounter].classList.add('active');
});

prev.addEventListener('click', function(){

    activeCounter--

    if(activeCounter < 0){
        activeCounter = imageCollection.length -1;
    }


    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[activeCounter].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeCounter].classList.add('active');
});


