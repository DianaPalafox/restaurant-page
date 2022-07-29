
import initialPage from "./initial-page";
import homeTab from "./home-tab";

initialPage(); 

homeTab(); 

const buttons = (() => {
    const homeButton = document.querySelector('.home-tab')
    homeButton.addEventListener('click', () => {
        deleteContent(); 
        homeTab(); 
    })
    
    const menuButton = document.querySelector('.menu-tab')
    menuButton.addEventListener('click', () => {
        deleteContent(); 
        menuTab(); 
    })

    const contactButton = document.querySelector('.contact-tab')
    contactButton.addEventListener('click', () => {
        deleteContent(); 
        contactTab(); 
    })

    function deleteContent () {
        const content = document.querySelector('#content')
        const container = document.querySelector('.container')
        content.removeChild(container); 
    }
})(); 


