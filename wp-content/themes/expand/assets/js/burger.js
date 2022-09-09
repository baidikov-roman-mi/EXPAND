let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    navMenuTrigger.classList.toggle("open");
    burgerMenu.classList.toggle('none');
    burgerMenu.classList.toggle('flex');
}


let lang = document.querySelector('.lang-switch');
let crossLine1 = document.querySelector('#crossLine1');
let crossLine2 = document.querySelector('#crossLine2');
let langs = document.querySelector('.lang-options');
let langOptions = document.querySelectorAll('.lang-option');



lang.onclick = () => {
    crossLine1.classList.toggle('cross');
    crossLine2.classList.toggle('cross');
    langs.classList.toggle('none')
}

let langText = document.querySelector('.lang');

langOptions.forEach(langOption => {
    
    langOption.onclick = () => {
        langOptions.forEach(langOption => {
            langOption.classList.remove('active-lang')
        })

        langOption.classList.add('active-lang')
        let dataLang = langOption.dataset.lang
        langText.innerHTML = dataLang
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