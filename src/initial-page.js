
export default function initialPage() {
    //Call the main div and create the div that will store all the elements
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('container')

    //Create the header
    const header = document.createElement('div')
    header.classList.add('header')

    //Create the elements inside the header
    const logoContainer = document.createElement('div')
    logoContainer.classList.add('logo-container')

    const logo = document.createElement('img')
    logo.classList.add('logo')

    const tabContainer = document.createElement('div')
    tabContainer.classList.add('tab-container')

    //Add tabs
    const homeBtn = document.createElement('div')
    homeBtn.classList.add('btn')
    const homeTab = document.createElement('button')
    homeTab.textContent = 'HOME'
    homeTab.classList.add('btn-style')

    const menuBtn = document.createElement('div')
    menuBtn.classList.add('btn')
    const menuTab = document.createElement('button')
    menuTab.textContent = 'MENU'
    menuTab.classList.add('btn-style')

    const contactBtn = document.createElement('div')
    contactBtn.classList.add('btn')
    const contactTab = document.createElement('button')
    contactTab.textContent = 'CONTACT'
    contactTab.classList.add('btn-style')
    
    //Add the main image
    const main = document.createElement('div')
    main.classList.add('main')

    const mainImg = document.createElement('img')
    mainImg.classList.add('main-img')
    
    //Add the footer
    const footer = document.createElement('div')
    footer.classList.add('footer')

    container.appendChild(header)

    header.appendChild(logoContainer)
    logoContainer.appendChild(logo)

    header.appendChild(tabContainer)
    tabContainer.appendChild(homeBtn)
    tabContainer.appendChild(menuBtn)
    tabContainer.appendChild(contactBtn)

    homeBtn.appendChild(homeTab)
    menuBtn.appendChild(menuTab)
    contactBtn.appendChild(contactTab)

    container.appendChild(main)
    main.appendChild(mainImg)

    container.appendChild(footer)

    content.appendChild(container)


}