import cardRotate from './cardFlipTwitch.js'

// демо почта
// let demoEmail = 'Gemor175@proton.me'

// input, email
let phoneNumber = new Inputmask('+38 (099) 999-99-99')
let phoneInput = document.querySelector('.phone-number');
phoneNumber.mask(phoneInput)

let messenger = document.querySelector('#messenger');
let phone = document.querySelector('#phone');

emailjs.init("2EkR30LsiGBjp_RWR");


// modal
let details = document.querySelector('#detailsFlip');
let modal = document.querySelector('#modalFlip');


messenger.onclick = () => {
    validate("template_8trqh5j")
    return false
}

phone.onclick = () => {
    validate("template_2phuf1i")
    return false
}


function validate(templateId) {
    let phoneValue = phoneInput.value.replace(/[' ', '(', ')', -]/g, '')
    let notification = details.querySelector('.descr')
    let templateParams = {
        phoneNumber: phoneValue
    }

    if (phoneInput.value.includes('_') || phoneInput.value == '') {
        notification.innerHTML = "We can't check this number. Please, enter the right one"
    }
    else {
        sendEmail(templateId, templateParams);
        cardRotate(details, modal);
    }
}

function sendEmail(templateId, templateParams) {
    emailjs.send("service_79itqed", templateId, templateParams).then(
        function (response) {
            console.log("Хорош мужик!", response.status, response.text);
        },
        function (error) {
            console.log("Не повезло...", error);
        }
    )
}