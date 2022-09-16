// burger
let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    animateBurger(navMenuTrigger, burgerMenu)
}


function animateBurger(menuTrigger, burgerMenu) {
    menuTrigger.classList.toggle("open");
    burgerMenu.classList.toggle('none');
    burgerMenu.classList.toggle('flex');
}

// langSwitch
let crossLine1 = document.querySelector('#crossLine1');
let crossLine2 = document.querySelector('#crossLine2');
let lang = document.querySelector('.lang-switch');
let langs = document.querySelector('.lang-options');
let langOptions = document.querySelectorAll('.lang-option');
let langText = document.querySelector('.lang');

lang.onclick = () => {
    animateCross(crossLine1, crossLine2, langs)
}


function animateCross(line1, line2, langBlock) {
    line1.classList.toggle('cross');
    line2.classList.toggle('cross');
    langBlock.classList.toggle('none');
}