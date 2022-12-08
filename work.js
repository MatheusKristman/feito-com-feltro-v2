const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const dollElem = document.getElementById('doll');
const garlandElem = document.getElementById('garland');
const giftsElem = document.getElementById('gifts');

document.addEventListener('DOMContentLoaded', () => {
    handleCarousel('doll');
})

function handleOptions(n) {
    switch(n) {
        case 1:
            option1.classList.add('option-selected');
            option2.classList.remove('option-selected');
            option3.classList.remove('option-selected');
            break;
        case 2:
            option2.classList.add('option-selected');
            option1.classList.remove('option-selected');
            option3.classList.remove('option-selected');
            break;
        case 3:
            option3.classList.add('option-selected');
            option1.classList.remove('option-selected');
            option2.classList.remove('option-selected');
            break;
        default:
            console.log('houve erro no options');
            break;
    }

    if (option1.classList.contains('option-selected')) {
        dollElem.style.display = 'flex';
        garlandElem.style.display = 'none';
        giftsElem.style.display = 'none';
        handleCarousel('doll');
    }

    if (option2.classList.contains('option-selected')) {
        dollElem.style.display = 'none';
        garlandElem.style.display = 'flex';
        giftsElem.style.display = 'none';
        handleCarousel('garland');
    }

    if (option3.classList.contains('option-selected')) {
        dollElem.style.display = 'none';
        garlandElem.style.display = 'none';
        giftsElem.style.display = 'flex';
        handleCarousel('gifts');
    }
}

const dollImages = document.getElementById('dollImages');
const garlandImages = document.getElementById('garlandImages');
const giftsImages = document.getElementById('giftsImages');
let interval;

function handleCarousel(elem) {
    switch(elem) {
        case 'doll':
            clearInterval(interval);
            for (let i = 0; i < dollImages.children.length; i++) {
                dollImages.children[i].classList.remove('image-selected');
                dollImages.children[i].style.display = 'none';
                dollImages.children[i].style.animation = 'none';
            }
            dollImages.children[0].classList.add('image-selected');
            dollImages.children[0].style.display = 'block';
            dollImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';
            interval = setInterval(() => {
                for (let i = 0; i < dollImages.children.length; i++) {
                    if (i + 1 == dollImages.children.length) {
                        dollImages.children[0].classList.add('image-selected');
                        dollImages.children[0].style.display = 'block';
                        dollImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';
                        
                        dollImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            dollImages.children[i].style.display = 'none';
                            dollImages.children[i].style.animation = 'none';
                        }, 700);

                        break;
                    }

                    if (dollImages.children[i].classList.contains('image-selected')) {
                        dollImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            dollImages.children[i].style.display = 'none';
                            dollImages.children[i].style.animation = 'none';
                        }, 700);

                        dollImages.children[i + 1].classList.add('image-selected');
                        dollImages.children[i + 1].style.display = 'block';
                        dollImages.children[i + 1].style.animation = 'RightImg 1000ms ease-in-out forwards';
                        break;
                    }
                }
            }, 5000);
            break;
        case 'garland':
            clearInterval(interval);
            for (let i = 0; i < garlandImages.children.length; i++) {
                garlandImages.children[i].classList.remove('image-selected');
                garlandImages.children[i].style.display = 'none';
                garlandImages.children[i].style.animation = 'none';
            }

            garlandImages.children[0].classList.add('image-selected');
            garlandImages.children[0].style.display = 'block';
            garlandImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';

            interval = setInterval(() => {
                for(let i = 0; i < garlandImages.children.length; i++) {
                    if (i + 1 == garlandImages.children.length) {
                        garlandImages.children[0].classList.add('image-selected');
                        garlandImages.children[0].style.display = 'block';
                        garlandImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';

                        garlandImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            garlandImages.children[i].style.display = 'none';
                            garlandImages.children[i].style.animation = 'none';
                        }, 700);
                        break;
                    }

                    if (garlandImages.children[i].classList.contains('image-selected')) {
                        garlandImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            garlandImages.children[i].style.display = 'none';
                            garlandImages.children[i].style.animation = 'none';
                        }, 700);

                        garlandImages.children[i + 1].classList.add('image-selected');
                        garlandImages.children[i + 1].style.display = 'block';
                        garlandImages.children[i + 1].style.animation = 'RightImg 1000ms ease-in-out forwards';
                        break;
                    }
                }
            }, 5000);
            break;
        case 'gifts':
            clearInterval(interval);
            for (let i = 0; i < giftsImages.children.length; i++) {
                giftsImages.children[i].classList.remove('image-selected');
                giftsImages.children[i].style.display = 'none';
                giftsImages.children[i].style.animation = 'none';
            }

            giftsImages.children[0].classList.add('image-selected');
            giftsImages.children[0].style.display = 'block';
            giftsImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';

            interval = setInterval(() => {
                for(let i = 0; i < giftsImages.children.length; i++) {
                    if (i + 1 == giftsImages.children.length) {
                        giftsImages.children[0].classList.add('image-selected');
                        giftsImages.children[0].style.display = 'block';
                        giftsImages.children[0].style.animation = 'RightImg 1000ms ease-in-out forwards';

                        giftsImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            giftsImages.children[i].style.display = 'none';
                            giftsImages.children[i].style.animation = 'none';
                        }, 700);
                        break;
                    }

                    if (giftsImages.children[i].classList.contains('image-selected')) {
                        giftsImages.children[i].classList.remove('image-selected');
                        setTimeout(() => {
                            giftsImages.children[i].style.display = 'none';
                            giftsImages.children[i].style.animation = 'none';
                        }, 700);

                        giftsImages.children[i + 1].classList.add('image-selected');
                        giftsImages.children[i + 1].style.display = 'block';
                        giftsImages.children[i + 1].style.animation = 'RightImg 1000ms ease-in-out forwards';
                        break;
                    }
                }
            }, 5000);
            break;
        default:
        break;
    }
}

option1.addEventListener('click', () => handleOptions(1));
option2.addEventListener('click', () => handleOptions(2));
option3.addEventListener('click', () => handleOptions(3));

const galleryElem = document.getElementById('gallery');

function handleCloseGallery() {
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    galleryElem.style.display = 'none'; 
}

const galleryBtnClose = document.getElementById('galleryBtnClose');

galleryBtnClose.addEventListener('click', handleCloseGallery);

const galleryDollElem = document.getElementById('galleryDoll');
const galleryGarlandElem = document.getElementById('galleryGarland');
const galleryGiftsElem = document.getElementById('galleryGifts');

const galleryDollCarousel = document.getElementById('galleryDollCarousel');
const galleryGarlandCarousel = document.getElementById('galleryGarlandCarousel');
const galleryGiftsCarousel = document.getElementById('galleryGiftsCarousel');

const galleryDollImage = document.getElementById('galleryDollImage');
const galleryGarlandImage = document.getElementById('galleryGarlandImage');
const galleryGiftsImage = document.getElementById('galleryGiftsImage');

function resetGallery() {
    if (document.querySelector('#galleryDollImage img') !== null) {
        galleryDollImage.children[0].remove();
    }

    if (document.querySelector('#galleryGarlandImage img') !== null) {
        galleryGarlandImage.children[0].remove();
    }

    if (document.querySelector('#galleryGiftsImage img') !== null) {
        galleryGiftsImage.children[0].remove();
    }
}

function handleGalleryLeft(option) {
    switch(option) {
        case 'doll':
            for (let i = 0; i < galleryDollCarousel.children.length; i++) {
                if (galleryDollCarousel.children[i].classList.contains('image-selected')) {
                    if (i === 0) {
                        break;
                    }
                    galleryDollCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryDollCarousel.children[i - 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryDollImage.appendChild(clone);
                    galleryDollCarousel.children[i - 1].classList.add('image-selected');
                    checkGalleryBtn('doll');
                    break;
                }
            }

            break;        
        case 'garland':
            for (let i = 0; i < galleryGarlandCarousel.children.length; i++) {
                if (galleryGarlandCarousel.children[i].classList.contains('image-selected')) {
                    if (i === 0) {
                        break;
                    }
                    galleryGarlandCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryGarlandCarousel.children[i - 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryGarlandImage.appendChild(clone);
                    galleryGarlandCarousel.children[i - 1].classList.add('image-selected');
                    checkGalleryBtn('garland');
                    break;
                }
            }

            break;
        case 'gifts':
            for (let i = 0; i < galleryGiftsCarousel.children.length; i++) {
                if (galleryGiftsCarousel.children[i].classList.contains('image-selected')) {
                    if (i === 0) {
                        break;
                    }
                    galleryGiftsCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryGiftsCarousel.children[i - 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryGiftsImage.appendChild(clone);
                    galleryGiftsCarousel.children[i - 1].classList.add('image-selected');
                    checkGalleryBtn('gifts');
                    break;
                }
            }

            break;
        default:
            console.log('erro no handleGalleryLeft');
            break;
    }
}

function handleGalleryRight(option) {
    switch(option) {
        case 'doll':
            for (let i = 0; i < galleryDollCarousel.children.length; i++) {
                if (galleryDollCarousel.children[i].classList.contains('image-selected')) {
                    if (i + 1 === galleryDollCarousel.children.length) {
                        break;
                    }
                    galleryDollCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryDollCarousel.children[i + 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryDollImage.appendChild(clone);
                    galleryDollCarousel.children[i + 1].classList.add('image-selected');
                    checkGalleryBtn('doll');
                    break;
                }
            }

            break;
        case 'garland':
            for (let i = 0; i < galleryGarlandCarousel.children.length; i++) {
                if (galleryGarlandCarousel.children[i].classList.contains('image-selected')) {
                    if (i + 1 === galleryGarlandCarousel.children.length) {
                        break;
                    }
                    galleryGarlandCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryGarlandCarousel.children[i + 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryGarlandImage.appendChild(clone);
                    galleryGarlandCarousel.children[i + 1].classList.add('image-selected');
                    checkGalleryBtn('garland');
                    break;
                }
            }

            break;
        case 'gifts':
            for (let i = 0; i < galleryGiftsCarousel.children.length; i++) {
                if (galleryGiftsCarousel.children[i].classList.contains('image-selected')) {
                    if (i + 1 === galleryGiftsCarousel.children.length) {
                        break;
                    }
                    galleryGiftsCarousel.children[i].classList.remove('image-selected');
                    resetGallery();

                    const imageSelected = galleryGiftsCarousel.children[i + 1];
                    const clone = imageSelected.cloneNode(true);
                    galleryGiftsImage.appendChild(clone);
                    galleryGiftsCarousel.children[i + 1].classList.add('image-selected');
                    checkGalleryBtn('gifts');
                    break;
                }
            }

            break;
        default:
    }
}

const dollBtnLeft = document.getElementById('dollBtnLeft');
dollBtnLeft.addEventListener('click', () => handleGalleryLeft('doll'));

const dollBtnRight = document.getElementById('dollBtnRight');
dollBtnRight.addEventListener('click', () => handleGalleryRight('doll'));

const garlandBtnLeft = document.getElementById('garlandBtnLeft');
garlandBtnLeft.addEventListener('click', () => handleGalleryLeft('garland'));

const garlandBtnRight = document.getElementById('garlandBtnRight');
garlandBtnRight.addEventListener('click', () => handleGalleryRight('garland'));

const giftsBtnLeft = document.getElementById('giftsBtnLeft');
giftsBtnLeft.addEventListener('click', () => handleGalleryLeft('gifts'));

const giftsBtnRight = document.getElementById('giftsBtnRight');
giftsBtnRight.addEventListener('click', () => handleGalleryRight('gifts'));

function checkGalleryBtn(option) {
    const dollCarouselLength = galleryDollCarousel.children.length;
    const garlandCarouselLength = galleryGarlandCarousel.children.length;
    const giftsCarouselLength = galleryGiftsCarousel.children.length;

    switch(option) {
        case 'doll':
            if (galleryDollCarousel.children[0].classList.contains('image-selected')) {
                dollBtnLeft.classList.add('btn-disabled');
            } else {
                dollBtnLeft.classList.remove('btn-disabled');
            }

            if (galleryDollCarousel.children[dollCarouselLength - 1].classList.contains('image-selected')) {
                dollBtnRight.classList.add('btn-disabled');
            } else {
                dollBtnRight.classList.remove('btn-disabled');
            }

            break;
        case 'garland':
            if (galleryGarlandCarousel.children[0].classList.contains('image-selected')) {
                garlandBtnLeft.classList.add('btn-disabled');
            } else {
                garlandBtnLeft.classList.remove('btn-disabled');
            }

            if (galleryGarlandCarousel.children[garlandCarouselLength - 1].classList.contains('image-selected')) {
                garlandBtnRight.classList.add('btn-disabled');
            } else {
                garlandBtnRight.classList.remove('btn-disabled');
            }

            break;
        case 'gifts':
            if (galleryGiftsCarousel.children[0].classList.contains('image-selected')) {
                giftsBtnLeft.classList.add('btn-disabled');
            } else {
                giftsBtnLeft.classList.remove('btn-disabled');
            }

            if (galleryGiftsCarousel.children[giftsCarouselLength - 1].classList.contains('image-selected')) {
                giftsBtnRight.classList.add('btn-disabled');
            } else {
                giftsBtnRight.classList.remove('btn-disabled');
            }

            break;
        default:
            console.log('erro no checkCarouselBtn');
            break;
    }
}

function resetCarousel() {
    for(let i = 0; i < galleryDollCarousel.children.length; i++) {
        galleryDollCarousel.children[i].classList.remove('image-selected');
    }

    for (let i = 0; i < galleryGarlandCarousel.children.length; i++) {
        galleryGarlandCarousel.children[i].classList.remove('image-selected');
    }

    for (let i = 0; i < galleryGiftsCarousel.children.length; i++) {
        galleryGiftsCarousel.children[i].classList.remove('image-selected');
    }
}

function handleDollImageSelect(e) {
    resetCarousel();
    resetGallery();

    const imageSelected = e.target;
    const clone = imageSelected.cloneNode(true);
    galleryDollImage.appendChild(clone);
    e.target.classList.add('image-selected');
    checkGalleryBtn('doll');
}

function handleGarlandImageSelect(e) {
    resetCarousel();
    resetGallery();

    const imageSelected = e.target;
    const clone = imageSelected.cloneNode(true);
    galleryGarlandImage.appendChild(clone);
    e.target.classList.add('image-selected');
    checkGalleryBtn('garland');
}

function handleGiftsImageSelect(e) {
    resetCarousel();
    resetGallery();

    const imageSelected = e.target;
    const clone = imageSelected.cloneNode(true);
    galleryGiftsImage.appendChild(clone);
    e.target.classList.add('image-selected');
    checkGalleryBtn('gifts');
}

function handleCarouselClick(option) {
    switch(option) {
        case 'doll':
            for(let i = 0; i < galleryDollCarousel.children.length; i++) {
                galleryDollCarousel.children[i].addEventListener('click', handleDollImageSelect);
            }

            break;
        case 'garland':
            for (let i = 0; i < galleryGarlandCarousel.children.length; i++) {
                galleryGarlandCarousel.children[i].addEventListener('click', handleGarlandImageSelect);
            }

            break;
        case 'gifts':
            for (let i = 0; i < galleryGiftsCarousel.children.length; i++) {
                galleryGiftsCarousel.children[i].addEventListener('click', handleGiftsImageSelect);
            }

            break;
        default:
            console.log('erro no handleCarouselClick');
            break;
    }
}

function handleGalleryOpen(option) {
    resetGallery();
    switch(option) {
        case 'doll':
            for(let i = 0; i < dollImages.children.length; i++) {
                if (dollImages.children[i].classList.contains('image-selected')) {
                    const imageSelected = galleryDollCarousel.children[i];
                    const clone = imageSelected.cloneNode(true);
                    galleryDollImage.appendChild(clone);
                    galleryDollCarousel.children[i].classList.add('image-selected');
                } else {
                    galleryDollCarousel.children[i].classList.remove('image-selected');
                }
            }
            checkGalleryBtn('doll');
            handleCarouselClick('doll');
            document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
            galleryElem.style.display = 'flex';
            galleryDollElem.style.display = 'flex';
            galleryGarlandElem.style.display = 'none';
            galleryGiftsElem.style.display = 'none';
            break;
        case 'garland':
            for(let i = 0; i < garlandImages.children.length; i++) {
                if (garlandImages.children[i].classList.contains('image-selected')) {
                    const imageSelected = galleryGarlandCarousel.children[i];
                    const clone = imageSelected.cloneNode(true);
                    galleryGarlandImage.appendChild(clone);
                    galleryGarlandCarousel.children[i].classList.add('image-selected');
                } else {
                    galleryGarlandCarousel.children[i].classList.remove('image-selected');
                }
            }
            checkGalleryBtn('garland');
            handleCarouselClick('garland');
            document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
            galleryElem.style.display = 'flex';
            galleryDollElem.style.display = 'none';
            galleryGarlandElem.style.display = 'flex';
            galleryGiftsElem.style.display = 'none';
            break;
        case 'gifts':
            for (let i = 0; i < giftsImages.children.length; i++) {
                if (giftsImages.children[i].classList.contains('image-selected')) {
                    const imageSelected = galleryGiftsCarousel.children[i];
                    const clone = imageSelected.cloneNode(true);
                    galleryGiftsImage.appendChild(clone);
                    galleryGiftsCarousel.children[i].classList.add('image-selected');
                } else {
                    galleryGiftsCarousel.children[i].classList.remove('image-selected');
                }
            }
            checkGalleryBtn('gifts');
            handleCarouselClick('gifts');
            document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
            galleryElem.style.display = 'flex';
            galleryDollElem.style.display = 'none';
            galleryGarlandElem.style.display = 'none';
            galleryGiftsElem.style.display = 'flex';
            break;
        default:
            console.log('erro no gallery open');
            break;            
    }
}

const galleryDollBtn = document.getElementById('galleryDollBtn');

galleryDollBtn.addEventListener('click', () => handleGalleryOpen('doll'));

const galleryGarlandBtn = document.getElementById('galleryGarlandBtn');

galleryGarlandBtn.addEventListener('click', () => handleGalleryOpen('garland'));

const galleryGiftsBtn = document.getElementById('galleryGiftsBtn');

galleryGiftsBtn.addEventListener('click', () => handleGalleryOpen('gifts'));