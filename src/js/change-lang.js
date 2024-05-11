const langUa = document.querySelector('.language__link-ua');
const langRu = document.querySelector('.language__link-ru');

function changeLangUa(e) {
    e.preventDefault();
    langRu.classList.remove('language__link--active');
    langUa.classList.add('language__link--active');

}
function changeLangRu(e) {
    e.preventDefault();
    langUa.classList.remove('language__link--active');
    langRu.classList.add('language__link--active');

}

langUa.onclick = changeLangUa;
langRu.onclick = changeLangRu;

const langUaBurger = document.querySelector('.language-burger__link-ua');
const langRuBurger = document.querySelector('.language-burger__link-ru');

function changeLangUaBurger(e) {
    e.preventDefault();
    langRuBurger.classList.remove('language-burger__link--active');
    langUaBurger.classList.add('language-burger__link--active');

}
function changeLangRuBurger(e) {
    e.preventDefault();
    langUaBurger.classList.remove('language-burger__link--active');
    langRuBurger.classList.add('language-burger__link--active');

}

langUaBurger.onclick = changeLangUaBurger;
langRuBurger.onclick = changeLangRuBurger;