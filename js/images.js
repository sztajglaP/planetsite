const contentBox = document.querySelector('.content__box');
const popup = document.querySelector('.content__popup');
const image = document.querySelector('.content__popup-image');

let allImages;

const images = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8', 'image_9', 'image_10', 'image_11', 'image_12', 'image_13', 'image_14', 'image_15', 'image_16'];

const createImages = (image, index) => {
    const div = document.createElement('div');
    div.classList.add('content__img-box');
    div.id = index;
    div.style.backgroundImage = `url(../img/gallery/${image}.jpg)`;
    contentBox.appendChild(div);
    allImages = document.querySelectorAll('.content__img-box');
};

images.forEach((image, index) => {
    createImages(image, index);
});

let id;

const clickImage = (e) => {
    const index = e.target.id;  
    popup.classList.add('active');
    image.id = index;
    id = index;
    image.style.backgroundImage = `url(../img/gallery/${images[index]}.jpg)`;
    document.body.style.overflow = 'hidden';
}

allImages.forEach(image => {
    image.addEventListener('click', clickImage);
});

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('content__popup')) {
        popup.classList.remove('active');
        document.body.style.overflow = 'scroll';
    }    

    if(e.target.classList.contains('content__popup-button--left')) {
        if(id <= 0) {
            return;
        } else {
            id--;
            image.style.backgroundImage = `url(../img/gallery/${images[id]}.jpg)`;
        }
    } else if(e.target.classList.contains('content__popup-button--right')) {
        if(id >= images.length - 1) {
            return;
        } else {
            id++;
            image.style.backgroundImage = `url(../img/gallery/${images[id]}.jpg)`;
        } 
    }
});