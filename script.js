const header = document.getElementById('header');

document.addEventListener('DOMContentLoaded', () => {
    header.style.opacity = 1;

    if (window.innerWidth >= 768) {
        menuElem.classList.remove('closed');
    } else {
        menuElem.style.visibility = 'hidden';
    
        setTimeout(() => {
            menuElem.style.visibility = 'visible';
        }, 700);
    }    
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menuElem.classList.remove('closed');
    } else {
        menuElem.classList.add('closed');
    }
})

const menuElem = document.getElementById('menu');

function handleMenuOpen() {
    menuElem.classList.remove('closed');
}

function handleMenuClose() {
    menuElem.classList.add('closed')
}

const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', handleMenuOpen);

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', handleMenuClose);