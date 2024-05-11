
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const inp = document.querySelector('.card__info-quantity-inp');


function raiseValue() {
    let val = +inp.value;
    inp.value = val + 1;
}


function reduceValue() {
    let val = +inp.value;
    inp.value = val - 1;
    if (inp.value < 0) inp.value = 0;
}

btnRight.onclick = raiseValue;
btnLeft.onclick = reduceValue;