// show menu

const navMenu = document.getElementById('aside-menu'),
mainArea = document.getElementById('main-area'),
requestArea = document.getElementById('request-area'),
cardTitle = document.getElementById('aside-title'),
navToggle = document.getElementById('nav-toggle'),
listRequest = document.getElementById('list-requests'),
headerTitle = document.getElementById('header-title'),
welcomMessage = document.getElementById('dashboard-area'),
navClose = document.getElementById('nav-close');

                 //  login variables //
const arrowDown = document.getElementById('arrow-down'),
loginOpen = document.getElementById(''),
loginClose = document.getElementById('');

// menu show
if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        requestArea.classList.add('request-area');
        mainArea.classList.add('main-area');
        listRequest.classList.add('list-request');
        headerTitle.classList.add('header-title');
        welcomMessage.classList.add('welcom-message');
        // cardTitle.classList.add('aside-title');
    });
}
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        requestArea.classList.remove('request-area');
        mainArea.classList.remove('main-area');
        listRequest.classList.remove('list-req');
        headerTitle.classList.remove('header-title');
        welcomMessage.classList.remove('welcom-message');
    });
}



if (arrowDown) {
    arrowDown.addEventListener('click',()=>{

    });
}
if (arrowDown) {
    arrowDown.addEventListener('click',()=>{

    });
}