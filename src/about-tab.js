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
    title.classList.add('title-about')
    
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('about-content')

    const aboutCard = document.createElement('div')
    aboutCard.classList.add('card-about')

    const aboutP = document.createElement('p')
    aboutP.textContent = "Somos una pastelería y panadería gourmet, ofrecemos productos hechos al día, preparados con ingredientes de productores locales pero sobre todo con mucho amor."
    aboutP.classList.add('about-p')


    aboutCard.appendChild(aboutP)
    aboutContent.appendChild(aboutCard)
    
    cardBody.appendChild(aboutContent)
    cardBody.appendChild(logo)
    cardBody.appendChild(title)
    mainImg.appendChild(cardBody)

    main.appendChild(mainImg)
    
    container.appendChild(main)
    content.appendChild(container)
}