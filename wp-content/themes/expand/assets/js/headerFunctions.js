// burger
let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    animateBurger(navMenuTrigger, burgerMenu)
}


function animateBurger(menuTrigger, burgerMenu) {
    menuTrigger.classList.toggle("open");
    burgerMenu.classList.toggle('burger-menu-active');
}

// langSwitch
let crossLine1 = document.querySelector('#crossLine1');
let crossLine2 = document.querySelector('#crossLine2');
let lang = document.querySelector('.lang-switch');
let langs = document.querySelector('.lang-options');

function animateCross(line1, line2) {
    line1.classList.toggle('cross');
    line2.classList.toggle('cross');
}


const toggleMenu = function () {
    langs.classList.toggle("none");
    animateCross(crossLine1, crossLine2)
}

lang.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == langs || langs.contains(target);
    const its_btnMenu = target == lang;
    const menu_is_active = langs.classList.contains("none");

    if (!its_menu && !its_btnMenu && !menu_is_active) {
        toggleMenu();
    }
});