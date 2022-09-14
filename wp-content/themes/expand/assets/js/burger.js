let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    navMenuTrigger.classList.toggle("open");
    burgerMenu.classList.toggle('none');
    burgerMenu.classList.toggle('flex');
}


let crossLine1 = document.querySelector('#crossLine1');
let crossLine2 = document.querySelector('#crossLine2');
let lang = document.querySelector('.lang-switch');
let langs = document.querySelector('.lang-options');
let langOptions = document.querySelectorAll('.lang-option');
let langText = document.querySelector('.lang');

lang.onclick = () => {
    crossLine1.classList.toggle('cross');
    crossLine2.classList.toggle('cross');
    langs.classList.toggle('none')
}

langOptions.forEach(langOption => {
    langOption.onclick = () => {
        langOptions.forEach(langOption => {
            langOption.classList.remove('active-lang')
        })

        langOption.classList.add('active-lang');
    }
})

const smoothLinks = document.querySelectorAll('.anchor');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};