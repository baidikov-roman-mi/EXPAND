let navMenuTrigger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger-menu");

navMenuTrigger.onclick = () => {
    if (burgerMenu.style.display = "none") {
        burgerMenu.style.display = "flex";   
    } else {
        burgerMenu.style.display = "none";
    }
}