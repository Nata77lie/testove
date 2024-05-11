import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.slider-small', {
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const swiperFullScreen = new Swiper('.slider-big__block', {
    loop: true,
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
    }
});


const sliderNavItems = document.querySelectorAll('.slider-big__nav-item');

sliderNavItems.forEach((el, index) => {
    el.setAttribute('data-index', index);
    el.addEventListener('click', (e) => {
        const index = e.currentTarget.dataset.index;
        swiperFullScreen.slideTo(index);
    })
});


//fullscreen img

const slides = document.querySelectorAll('.slider-big__block-item');
const btn = document.querySelector('.slider-big__btn');
const icon = document.querySelector('.slider-big__icon');
const body = document.querySelector('body');

const sliderClose = () => {
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.querySelector('.slider-container').classList.remove('fs');
        closeBtn.remove();
        btn.style.display = "block";
        icon.style.display = "block";
        scrollUnlock();
    });

}

if (slides.length > 0) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('click', (e) => {

            if (!document.querySelector('.close')) {
                e.target.parentNode.parentNode.insertAdjacentHTML('beforebegin', '<div class="close">X</div>');
                const sliderContainer = document.querySelector('.slider-container');
                sliderContainer.classList.add('fs');
                btn.style.display = "none";
                icon.style.display = "none";
            }
            sliderClose();
            scrollLock();
        });

    }

};


const paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

function scrollLock() {
    body.style.paddingRight = paddingValue;
    body.classList.add('lock');
}

function scrollUnlock() {
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
}