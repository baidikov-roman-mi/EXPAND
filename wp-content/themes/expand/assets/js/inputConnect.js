import cardRotate from './cardFlipTwitch.js'

let phoneNumber = new Inputmask('+38 (099) 999-99-99')
let phoneInput = document.querySelector('.phone-number');
phoneNumber.mask(phoneInput)


let details = document.querySelector('#detailsFlip');
let modal = document.querySelector('#modalFlip');
let messenger = document.querySelector('#messenger');
let phone = document.querySelector('#phone');

emailjs.init("2EkR30LsiGBjp_RWR");

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
        console.log(phoneValue);
        notification.innerHTML = 'Номер некорректный. Пожалуйста, введите полный номер'
    }
    else {
        sendEmail(templateId, templateParams);
        console.log(phoneInput.value.length);
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