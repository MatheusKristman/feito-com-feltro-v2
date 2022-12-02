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

console.log(dollImages.children)

function handleCarousel(elem) {
    switch(elem) {
        case 'doll':
            clearInterval(interval);
            for (let i = 0; i < dollImages.children.length; i++) {
                dollImages.children[i].classList.remove('image-selected');
            }
            dollImages.children[0].classList.add('image-selected');
            interval = setInterval(() => {
                for (let i = 0; i < dollImages.children.length; i++) {
                    if (i + 1 == dollImages.children.length) {
                        dollImages.children[0].classList.add('image-selected');
                        dollImages.children[i].classList.remove('image-selected');
                        break;
                    }

                    if (dollImages.children[i].classList.contains('image-selected')) {
                        dollImages.children[i].classList.remove('image-selected');
                        dollImages.children[i + 1].classList.add('image-selected');
                        break;
                    }
                }
            }, 5000);
            break;
        case 'garland':
            clearInterval(interval);
            for (let i = 0; i < garlandImages.children.length; i++) {
                garlandImages.children[i].classList.remove('image-selected');
            }
            garlandImages.children[0].classList.add('image-selected');
            interval = setInterval(() => {
                for(let i = 0; i < garlandImages.children.length; i++) {
                    if (i + 1 == garlandImages.children.length) {
                        garlandImages.children[0].classList.add('image-selected');
                        garlandImages.children[i].classList.remove('image-selected');
                        break;
                    }

                    if (garlandImages.children[i].classList.contains('image-selected')) {
                        garlandImages.children[i].classList.remove('image-selected');
                        garlandImages.children[i + 1].classList.add('image-selected');
                        break;
                    }
                }
            }, 5000);
            break;
        case 'gifts':
            clearInterval(interval);
            for (let i = 0; i < giftsImages.children.length; i++) {
                giftsImages.children[i].classList.remove('image-selected');
            }
            giftsImages.children[0].classList.add('image-selected');
            interval = setInterval(() => {
                for(let i = 0; i < giftsImages.children.length; i++) {
                    if (i + 1 == giftsImages.children.length) {
                        giftsImages.children[0].classList.add('image-selected');
                        giftsImages.children[i].classList.remove('image-selected');
                        break;
                    }

                    if (giftsImages.children[i].classList.contains('image-selected')) {
                        giftsImages.children[i].classList.remove('image-selected');
                        giftsImages.children[i + 1].classList.add('image-selected');
                        break;
                    }
                }
            }, 5000);
            break;
        default:
            console.log('erro no carousel');
            break;
    }
}

option1.addEventListener('click', () => handleOptions(1));
option2.addEventListener('click', () => handleOptions(2));
option3.addEventListener('click', () => handleOptions(3));