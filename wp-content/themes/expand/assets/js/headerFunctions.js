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
let langOptions = document.querySelectorAll('.lang-option');
let langText = document.querySelector('.lang');

lang.onclick = () => {
    animateCross(crossLine1, crossLine2, langs)
}

// langText.onfocus = function () {
//     crossLine1.classList.add('cross');
//     crossLine2.classList.add('cross');
//     langs.classList.remove('none');
// }

// langText.onblur = function () {
//     crossLine1.classList.remove('cross');
//     crossLine2.classList.remove('cross');
//     langs.classList.add('none');
// }

function animateCross(line1, line2, langBlock) {
    line1.classList.toggle('cross');
    line2.classList.toggle('cross');
    langBlock.classList.toggle('none');
}


// function validate() {
//     if (langText === document.activeElement) {
//         crossLine1.onclick = () => {
//             langText.blur()
//         }
        
//         crossLine2.onclick = () => {
//             langText.blur()
//         }
//     }
//     else {
//         crossLine1.onclick = () => {
//             langText.focus()
//         }
        
//         crossLine2.onclick = () => {
//             langText.focus()
//         }
//     }
// }

// validate()