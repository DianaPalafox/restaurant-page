import './style.css'

export default function menuTab() {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')

    const main = document.querySelector('.main')
    const mainImg = document.querySelector('.main-img')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const title = document.createElement('div')
    title.classList.add('title-menu')
     
    const menuCard = document.createElement('div')
    menuCard.classList.add('menu-card')
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')

    const cardContent2 = document.createElement('div')
    cardContent2.classList.add('card-content2')

    const cardTitle = document.createElement('div')
    cardTitle.classList.add('card-title')

    cardTitle.textContent = "HORNO DULCE"

    const cardMenu = document.createElement('div')
    cardMenu.classList.add('card-menu')

    const p1 = document.createElement('p')
    p1.classList.add('p1')

    p1.textContent = "ROL DE GUAYABA CON QUESO_____________ $15"

    const p2 = document.createElement('p')
    p2.classList.add('p1')

    p2.textContent = "NUDO DE CHOCOLATE_____________ $15"
    
    const p3 = document.createElement('p')
    p3.classList.add('p1')

    p3.textContent = "ROL DE LAVANDA E HIGO_____________ $15"
    
    const p4 = document.createElement('p')
    p4.classList.add('p1')

    p4.textContent = "ROL DE CANELA CON NUEZ_____________ $15"

    const p5 = document.createElement('p')
    p5.classList.add('p1')

    p5.textContent = "ROL DE CHOCOLATE CON CACAO_____________ $20"

    const p6 = document.createElement('p')
    p6.classList.add('p1')

    p6.textContent = "CROISSANT_____________ $25"

    const p7 = document.createElement('p')
    p7.classList.add('p1')

    p7.textContent = "GARIBALDI_____________ $28"

    const p8 = document.createElement('p')
    p8.classList.add('p1')

    p8.textContent = "CHOCOLATÍN_____________ $30"




    const cardTitle2 = document.createElement('div')
    cardTitle2.classList.add('card-title')

    cardTitle2.textContent = "HORNO SALADO"

    const cardMenu2 = document.createElement('div')
    cardMenu2.classList.add('card-menu')

    const pr1 = document.createElement('p')
    pr1.classList.add('p1')

    pr1.textContent = "EMPANADA DE CARNE Y PORO_____________ $25"

    const pr2 = document.createElement('p')
    pr2.classList.add('p1')

    pr2.textContent = "EMPANADA DE CHAMPIÑÓN CON QUESO_____________ $25"
    
    const pr3 = document.createElement('p')
    pr3.classList.add('p1')

    pr3.textContent = "EMPANADA DE ELOTE_____________ $25"
    
    const pr4 = document.createElement('p')
    pr4.classList.add('p1')

    pr4.textContent = "CHORIPAN CON PAPA GAJO_____________ $75"

    const pr5 = document.createElement('p')
    pr5.classList.add('p1')

    pr5.textContent = "PIZZA DE SALAMI Y QUESOS_____________ $145"

    const pr6 = document.createElement('p')
    pr6.classList.add('p1')

    pr6.textContent = "BAGUETTE TRADICIONAL_____________ $28"

    const pr7 = document.createElement('p')
    pr7.classList.add('p1')

    pr7.textContent = "BAGUETTE DE AJO_____________ $28"


    cardMenu.appendChild(p1)
    cardMenu.appendChild(p2)
    cardMenu.appendChild(p3)
    cardMenu.appendChild(p4)
    cardMenu.appendChild(p5)
    cardMenu.appendChild(p6)
    cardMenu.appendChild(p7)
    cardMenu.appendChild(p8)

    cardMenu2.appendChild(pr1)
    cardMenu2.appendChild(pr2)
    cardMenu2.appendChild(pr3)
    cardMenu2.appendChild(pr4)
    cardMenu2.appendChild(pr5)
    cardMenu2.appendChild(pr6)
    cardMenu2.appendChild(pr7)

    cardContent.appendChild(cardTitle)
    cardContent.appendChild(cardMenu)
    
    cardContent2.appendChild(cardTitle2)
    cardContent2.appendChild(cardMenu2)
    
    menuCard.appendChild(cardContent)
    menuCard.appendChild(cardContent2)
    cardBody.appendChild(menuCard)
    cardBody.appendChild(logo)
    cardBody.appendChild(title)
    mainImg.appendChild(cardBody)

    main.appendChild(mainImg)
    
    container.appendChild(main)
    content.appendChild(container)
}