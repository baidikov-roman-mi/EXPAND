export { cardRotate as default }

let cards = document.querySelectorAll('.benefit-cards');
let twitchCard = document.querySelector('#twitch-card');
let benefitIcon = document.querySelector('.benefits-article-icons');
let videoIcon = document.querySelector('.video-rotate');

twitchCard.onclick = () => {
    benefitIcon.style.animation = 'none';
    videoIcon.style.animation = 'none';
}

cards.forEach(card => {
    let benefitIcon = card.querySelector('.benefits-article-icons');
    let videoIcon = card.querySelector('.video-rotate');
    let modal = card.querySelector('.video-container');
    let video = card.querySelector('video');

    // video overlay 
    const overlay = card.querySelector('.overlay');

    benefitIcon.onclick = () => {
        cardRotate(benefitIcon, videoIcon)
    }

    // show modal 
    videoIcon.onclick = function () {
        if (overlay.classList.contains('hide')) {
            overlay.classList.add('transition')
            overlay.classList.remove('hide')
        }
    }

    // hide overlay
    overlay.onclick = () => {
        if (overlay.classList.contains('hide') == false) {
            overlay.classList.add('hide')
        }
    }

    card.onclick = function (event) {
        if (event.target != modal) {
            video.pause();
        }
    }
})

function cardRotate(item1, item2) {
    item1.style.transform = 'rotateY(180deg)'
    item2.style.transform = 'rotateY(360deg)'
}