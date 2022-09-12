export { cardRotate as default }

let cards = document.querySelectorAll('.benefit-cards');
let twitchCard = document.querySelector('#twitch-card');
let benefitIcon = document.querySelector('.benefits-article-icons');
let videoIcon = document.querySelector('.video-rotate');

twitchCard.onclick = () => {
    benefitIcon.style.animation = 'none'
    // benefitIcon.style.transform = "rotateY(180deg)"
    videoIcon.style.animation = 'none'
    // videoIcon.style.transform = 'rotateY(360deg)'

}

cards.forEach(card => {
    let benefitIcon = card.querySelector('.benefits-article-icons');
    let videoIcon = card.querySelector('.video-rotate');
    let modal = card.querySelector('.video-container');
    let video = card.querySelector('video');

    benefitIcon.onclick = () => {
        cardRotate(benefitIcon, videoIcon)
    }

    // videoIcon.onclick = function () {
    //     modal.style.display = "flex";
    // }

    // card.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";

    //         video.pause(); 
    //     }
    // }

    videoIcon.onclick = () => {
        cardRotate(videoIcon, benefitIcon)
    }
})

function cardRotate(item1, item2) {
    item1.style.transform = 'rotateY(180deg)'
    item2.style.transform = 'rotateY(360deg)'
}