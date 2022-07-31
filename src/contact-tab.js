import './style.css'

export default function contactTab() {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')

    const main = document.querySelector('.main')
    const mainImg = document.querySelector('.main-img')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const title = document.createElement('div')
    title.classList.add('title-contact')

    const cardContact = document.createElement('div')
    cardContact.classList.add('card-contact')

    const hours = document.createElement('div')
    hours.classList.add('hours')

    const hoursTitle = document.createElement('div')
    hoursTitle.classList.add('hours-title')

    hoursTitle.textContent = "HORARIO"
    
    const hoursP1 = document.createElement('p')
    hoursP1.classList.add('hp')

    hoursP1.textContent = "Lunes-Sábado: 9:00-17:00"

    const hoursP2 = document.createElement('p')
    hoursP2.classList.add('hp2')

    hoursP2.textContent = "Domingo: CERRADO"

    const directionP = document.createElement('p')
    directionP.classList.add('dp')

    directionP.textContent = "Bahía de San Hipólito #126, local A, Col. Verónica Anzures 11300 Ciudad de México, México"

    const tel = document.createElement('div')
    tel.classList.add('tel')
   
    const telN = document.createElement('p')
    telN.classList.add('tel-n')
    telN.textContent = "tel. 55 8892 0843"

    const mail = document.createElement('p')
    mail.textContent = "pastryncompany@gmail.com"
    
    tel.appendChild(telN)
    tel.appendChild(mail)
    hours.appendChild(hoursTitle)
    hours.appendChild(hoursP1)
    hours.appendChild(hoursP2)

    hours.appendChild(directionP)

    cardContact.appendChild(hours)
    cardContact.appendChild(tel)
    
    cardBody.appendChild(cardContact)
    cardBody.appendChild(logo)
    cardBody.appendChild(title)
    mainImg.appendChild(cardBody)

    main.appendChild(mainImg)
    
    container.appendChild(main)
    content.appendChild(container)
}