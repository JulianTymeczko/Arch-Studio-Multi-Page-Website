// this is for mobile navigation ==========================================================

function disableScroll() {
   
    const scrollY = window.scrollY;

   
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
    
    const scrollY = parseInt(document.body.style.top || '0', 10);

  
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, -scrollY);
}

let headerImg = document.querySelector(".left-div-header .mobile-image")
let mobileNavigationList = document.querySelector(".mobile-navigation-list")
let mobileNavButton = document.getElementById("mobile-hamburger-button")
mobileNavButton.addEventListener("click", function () {

    if (mobileNavigationList.style.display == "none" || !mobileNavigationList.style.display) {
        mobileNavigationList.setAttribute("style", "display: flex; z-index: 5;") 
        headerImg.setAttribute("style", "filter: brightness(60%);")

        disableScroll()
       
        
    }
    else if (mobileNavigationList.style.display == "flex") {
        mobileNavigationList.style.display = "none"
        headerImg.setAttribute("style", "filter: brightness(100%);")
        
        enableScroll()
    }

})


window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    if (mobileNavigationList.style.display == "flex" && windowWidth >= 768){
        mobileNavigationList.style.display = "none"
        headerImg.setAttribute("style", "filter: brightness(100%);")
       
        enableScroll()
    }
  
});


// this is for the map ===============================================

var map = L.map('map').setView([31.00, -100.00], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: '../assets/location.svg',
    iconSize: [46, 56],
    iconAnchor: [23, 56],
});
var customIcon2 = L.icon({
    iconUrl: '../assets/location.svg',
    iconSize: [46, 56],
    iconAnchor: [23, 56],
});



var marker = L.marker([31.00, -100.00], { icon: customIcon }).addTo(map);
var marker2 = L.marker([35.86, -86.66], { icon: customIcon2 }).addTo(map);




// this is for the form of the page =============================================
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let cantBeEmpty = document.querySelectorAll(".cant-be-empty")
let nameInput = document.getElementById("name-input")
let emailInput = document.getElementById("email-input")
let messageInput = document.getElementById("message")
let formButton = document.getElementById("form-button")
formButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (nameInput.value == ""){
        cantBeEmpty[0].style.display = "inline-block"
        nameInput.classList.add("error-input")

    }
    else if (nameInput.value != ""){
        cantBeEmpty[0].style.display = "none"
        nameInput.classList.remove("error-input")
    }
    if (messageInput.value == ""){
        cantBeEmpty[2].style.display = "inline-block"
       messageInput.classList.add("error-input")
    }
    else if (messageInput.value != ""){
        cantBeEmpty[2].style.display = "none"
        messageInput.classList.remove("error-input")
    }
    if (emailInput.value == ""){
        cantBeEmpty[1].style.display = "inline-block"
        cantBeEmpty[1].textContent = "Can't be empty"
        emailInput.classList.add("error-input")
    }
    
    else if (!emailRegex.test(emailInput.value) && emailInput.value != ""){
        cantBeEmpty[1].textContent = "Please use a valid email address"
        cantBeEmpty[1].style.display = "inline-block"
       emailInput.classList.add("error-input")
    }
    else if (emailRegex.test(emailInput.value) && emailInput.value != ""){
        cantBeEmpty[1].style.display = "none"
        emailInput.classList.remove("error-input")
    }
})