const burgerBlock = document.querySelector('.burger-block');
const searchBlock = document.querySelector('.search-block');
const wrapper = document.querySelector('.wrapper');

function changeColor() {
    document.querySelector('.menu-mobile__button-search-img').classList.toggle('hidden');
    document.querySelector('.menu-mobile__button-search-img-orange').classList.toggle('active');
}

function openBurger() {
    this.classList.toggle('active');
    if (searchBlock.className == "search-block search-block--open") {
        searchBlock.classList.toggle('search-block--open');
        wrapper.classList.toggle('wrapper--close');
        changeColor();
    }
    else {
        wrapper.classList.toggle('wrapper--close');
        burgerBlock.classList.toggle('burger-block--open');

    }
}

document.querySelector('.menu-mobile__btn').onclick = openBurger;


function openSearch() {
    if (burgerBlock.className == "burger-block burger-block--open") {
        burgerBlock.classList.toggle('burger-block--open');
        searchBlock.classList.toggle('search-block--open');
        changeColor();
    }
    else {
        wrapper.classList.toggle('wrapper--close');
        searchBlock.classList.toggle('search-block--open');
        document.querySelector('.menu-mobile__btn').classList.toggle('active');
        changeColor();
    }
}

document.querySelector('.menu-mobile__button').onclick = openSearch;


