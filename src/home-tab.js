import './style.css'

export default function homeTab() {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')

    const main = document.querySelector('.main')
    const mainImg = document.querySelector('.main-img')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const image = document.createElement('div')
    image.classList.add('image')

    const decor = document.createElement('div')
    decor.classList.add('decor')

    const decor2 = document.createElement('div')
    decor2.classList.add('decor2')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const quote = document.createElement('div')
    quote.classList.add('quote')

    const paragraph = document.createElement('p')
    paragraph.textContent = "¡VEN A PROBAR \r\n NUESTROS POSTRES!"
    
    //const paragraph2 = document.createElement('p')
    //paragraph2.textContent = 'NUESTROS POSTRES!'
    
    quote.appendChild(paragraph)
    //quote.appendChild(paragraph2)
    cardBody.appendChild(image)
    cardBody.appendChild(logo)
    cardBody.appendChild(quote)
    mainImg.appendChild(cardBody)

    main.appendChild(mainImg)

    container.appendChild(main)
    content.appendChild(container)
}