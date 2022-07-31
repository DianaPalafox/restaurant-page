
import initialPage from "./initial-page";
import homeTab from "./home-tab";
import menuTab from "./menu-tab"; 
import contactTab from "./contact-tab"; 
import aboutTab from "./about-tab"; 

initialPage(); 
homeTab(); 

const appendToDom = (() => {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('home-tab')) {
            deleteContent(); 
            initialPage(); 
            homeTab(); 
        }
        if (e.target.classList.contains('menu-tab')) {
            deleteContent(); 
            initialPage(); 
            menuTab(); 
        }
        if (e.target.classList.contains('contact-tab')) {
            deleteContent(); 
            initialPage(); 
            contactTab(); 
        }
        if (e.target.classList.contains('about-tab')) {
            deleteContent(); 
            initialPage(); 
            aboutTab(); 
        }
        
    })
    
    function deleteContent () {
        const content = document.querySelector('#content')
        const container = document.querySelector('.container')
        content.removeChild(container); 
    }
})(); 




