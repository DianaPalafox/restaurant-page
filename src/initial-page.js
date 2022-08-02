import './style.css'

//npx webpack
export default function initialPage() {
    //Call the main div and create the div that will store all the elements
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('container')

    //Create the header
    const header = document.createElement('div')
    header.classList.add('header')

    //Create the elements inside the header

    const tabContainer = document.createElement('div')
    tabContainer.classList.add('tab-container')

    //Add tabs
  
    const homeTab = document.createElement('button')
    homeTab.textContent = 'INICIO'
    homeTab.classList.add('home-tab')

    const menuTab = document.createElement('button')
    menuTab.textContent = 'MENÚ'
    menuTab.classList.add('menu-tab')

    const contactTab = document.createElement('button')
    contactTab.textContent = 'CONTACTO'
    contactTab.classList.add('contact-tab')

    const aboutTab = document.createElement('button')
    aboutTab.textContent = 'QUIÉNES SOMOS'
    aboutTab.classList.add('about-tab')
    
    //Add the main image
    const main = document.createElement('div')
    main.classList.add('main')
    const mainImg = document.createElement('div')
    mainImg.classList.add('main-img')

    //Add the footer
    const footer = document.createElement('div')
    footer.classList.add('footer')

    const copyright = document.createElement('div')
    copyright.classList.add('copyright')
    copyright.textContent = "Copyright © 2022 Pastry Company. Todos los Derechos Reservados | Made with love by Diana Palafox"
    
    container.appendChild(header)

    header.appendChild(tabContainer)
    tabContainer.appendChild(homeTab)
    tabContainer.appendChild(menuTab)
    tabContainer.appendChild(contactTab)
    tabContainer.appendChild(aboutTab)

    container.appendChild(main)
    main.appendChild(mainImg)
    
    footer.appendChild(copyright)
    container.appendChild(footer)

    content.appendChild(container)
}