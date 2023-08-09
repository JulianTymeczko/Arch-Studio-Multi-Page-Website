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
let main = document.querySelector("main")
let body = document.querySelector("body")
let mobileNavigationList = document.querySelector(".mobile-navigation-list")
let mobileNavButton = document.getElementById("mobile-hamburger-button")
mobileNavButton.addEventListener("click", function () {

    if (mobileNavigationList.style.display == "none" || !mobileNavigationList.style.display) {
        mobileNavigationList.setAttribute("style", "display: flex; z-index: 5;")
       body.setAttribute("style", "width: 100%;")
       main.setAttribute("style", "filter: brightness(35%);")
        disableScroll()
       
        
    }
    else if (mobileNavigationList.style.display == "flex") {
        mobileNavigationList.style.display = "none"
        main.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }

})


window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    if (mobileNavigationList.style.display == "flex" && windowWidth >= 768){
        mobileNavigationList.style.display = "none"
        main.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }

});








// this is for the x-overflow on the images above 500 px to remove the scrollar ==========


