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

    // video overlay 
    const overlay = card.querySelector('.overlay');
    const overlayClasses = overlay.classList;

    // Это костыль для плавного исчезновения модалки
    // прости, но лучше пока ничего не придумал
    const animationDuration = 700;

    benefitIcon.onclick = () => {
        cardRotate(benefitIcon, videoIcon)
    }

    // show modal 
    videoIcon.onclick = function () {
        if (overlayClasses.contains('hidden')) {
            // remove all accumulated animations
            overlay.classList.remove('hidden');
            overlay.classList.remove('hide');
            overlay.classList.remove('show');
            // and show modal
            overlay.classList.add('show');
        }
    }

    // hide overlay
    overlay.onclick = () => {
        if (overlayClasses.contains('show')) {
            overlay.classList.add('hide');
            overlay.classList.remove('show');

            // я применил этот костыль тут
            // анимации show и hide длятся 0.7 секунды, 
            // я сделал таймаут после их проигрывания 
            // и прячу их со страницы

            // это плохо, но это хоть какое-то решение 
            // для плавного исчезновения
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, animationDuration)
        }
    }

    card.onclick = function (event) {
        if (event.target == modal) {
            video.pause();
        }
    }
})

function cardRotate(item1, item2) {
    item1.style.transform = 'rotateY(180deg)'
    item2.style.transform = 'rotateY(360deg)'
}