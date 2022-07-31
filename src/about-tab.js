import './style.css'

export default function aboutTab() {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')

    const main = document.querySelector('.main')
    const mainImg = document.querySelector('.main-img')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const title = document.createElement('div')
    title.classList.add('titleAbout')
    
    cardBody.appendChild(logo)
    cardBody.appendChild(title)
    mainImg.appendChild(cardBody)

    main.appendChild(mainImg)
    
    container.appendChild(main)
    content.appendChild(container)
}