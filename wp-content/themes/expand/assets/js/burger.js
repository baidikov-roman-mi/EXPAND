let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    if (burgerMenu.classList.contains('flex')) {
        burgerMenu.classList.remove('flex');   
        burgerMenu.classList.add('none');   
        console.log(burgerMenu);
    } else {
        burgerMenu.classList.remove("none");
        burgerMenu.classList.add("flex");
    }
}