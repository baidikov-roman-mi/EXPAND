let cards = document.querySelectorAll('.rotate-cards');
let twitchCard = document.querySelector('#twitch-card');

twitchCard.onclick = () => {
    twitchCard.classList.toggle('twitch-animation')
}


cards.forEach(card => {
    let benefitIcon = card.querySelector('.benefits-article-icons');
    let videoIcon = card.querySelector('.video-rotate');

    benefitIcon.onclick = () => {
        benefitIcon.style.transform = 'rotateY(180deg)';
        videoIcon.style.transform = 'rotateY(360deg)';
    }

    videoIcon.onclick = () => {
        videoIcon.style.transform = 'rotateY(180deg)';
        benefitIcon.style.transform = 'rotateY(360deg)';
    }
})