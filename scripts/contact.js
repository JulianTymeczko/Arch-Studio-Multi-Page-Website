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

var map = L.map('map').setView([51.505, -0.09], 13);

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



var marker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
var marker2 = L.marker([51.5, -0.08], { icon: customIcon2 }).addTo(map);