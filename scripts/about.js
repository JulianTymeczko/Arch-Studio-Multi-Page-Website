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
