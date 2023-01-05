import cardRotate from './cardFlipTwitch.js'

// демо почта
// let demoEmail = 'Gemor175@proton.me'

// input, email
let phoneNumber = new Inputmask('+38 (099) 999-99-99')
let phoneInput = document.querySelector('.phone-number');
phoneNumber.mask(phoneInput)

let messenger = document.querySelector('#messenger');
let phone = document.querySelector('#phone');
let serviceId = 'service_6gt8at2';
let templateId = "template_kth30i8";
let userId = 'user_n00IFqkCIrHm6D3teTlZD'
let callContact = 'Пользователь хочет созваниться с вами';
let messengerContact = 'Пользователь хочет связаться с вами через Viber/Telegram';

emailjs.init(userId);


// modal
let details = document.querySelector('#detailsFlip');
let modal = document.querySelector('#modalFlip');


messenger.onclick = () => {
    validate(templateId, messengerContact)
    return false
}

phone.onclick = () => {
    validate(templateId, callContact)
    return false
}


function validate(templateId, emailContent) {
    let phoneValue = phoneInput.value.replace(/[' ', '(', ')', -]/g, '')
    let notification = details.querySelector('.descr')
    let templateParams = {
        phoneNumber: phoneValue,
        emailContent: emailContent
    }

    if (phoneInput.value.includes('_') || phoneInput.value == '') {
        notification.innerHTML = "We can't check this number. Please, enter the right one"
    }
    else {
        sendEmail(templateId, templateParams);
        // cardRotate(details, modal);
    }
}

function sendEmail(templateId, templateParams) {
    emailjs.send(serviceId, templateId, templateParams).then(
        function (response) {
            cardRotate(details, modal);
        },
        function (error) {
            console.log("Не повезло...", error);
            console.log(serviceId);
        }
    )
}