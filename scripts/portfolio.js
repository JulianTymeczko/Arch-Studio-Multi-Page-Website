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


let mobileNavigationList = document.querySelector(".mobile-navigation-list")
let mobileNavButton = document.getElementById("mobile-hamburger-button")
mobileNavButton.addEventListener("click", function () {

    if (mobileNavigationList.style.display == "none" || !mobileNavigationList.style.display) {
        mobileNavigationList.style.display = "flex"
        headerImg.setAttribute("style", "background-image: url(./assets/home/mobile/mobile-really-dark-image-hero-paramour.jpg)")
        headerA.setAttribute("style", "filter: brightness(80%);")
        headerP.setAttribute("style", "filter: brightness(80%);")
        disableScroll()
       
        
    }
    else if (mobileNavigationList.style.display == "flex") {
        mobileNavigationList.style.display = "none"
        headerImg.setAttribute("style", "background-image: url(./assets/home/mobile/dark-image-hero-paramour.jpg)")
        headerA.setAttribute("style", "filter: brightness(100%);")
        headerP.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }

})


window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    if (mobileNavigationList.style.display == "flex" && windowWidth >= 768){
        mobileNavigationList.style.display = "none"
        headerImg.setAttribute("style", "background-image: url(./assets/home/tablet/dark-image-hero-paramour-tablet.jpg)")
        headerA.setAttribute("style", "filter: brightness(100%);")
        headerP.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }
    else if (windowWidth >= 768){
        headerImg.setAttribute("style", "background-image: url(./assets/home/tablet/dark-image-hero-paramour-tablet.jpg)")
    }
    if (windowWidth < 768 && mobileNavigationList.style.display == "none"){
        headerImg.setAttribute("style", "background-image: url(./assets/home/mobile/dark-image-hero-paramour.jpg)")
    }
    if (windowWidth >= 1440){
        headerImg.setAttribute("style", "background-image: url(./assets/home/desktop/dark-paramour-tower.jpg)")
    }
});








// this is for the x-overflow on the images above 500 px to remove the scrollar ==========


