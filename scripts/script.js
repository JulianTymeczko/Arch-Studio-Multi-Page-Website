// this is for mobile navigation =====================
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




let nav = document.querySelector("nav")
let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")
let buttonThree = document.getElementById("button-three")
let buttonFour = document.getElementById("button-four")
let headerH1 = document.getElementById("header-h1")
let headerP = document.getElementById("header-p")
let header = document.querySelector("header")
let headerA = document.querySelector(".header-top-div a")
let everyButton = document.querySelectorAll(".header-bottom-div button")
for (x of everyButton) {
    x.addEventListener("mouseover", function () {
        if (this.style.backgroundColor == 'rgb(27, 29, 35)') {
            this.style.backgroundColor = "rgb(27, 29, 35)"
        }
        else if (this.style.backgroundColor == 'white') {
            this.style.backgroundColor = 'hsl(230, 21%, 95%)'
        }
    })
    x.addEventListener("mouseout", function () {
        if (this.style.backgroundColor == 'rgb(240, 240, 245)') {
            this.style.backgroundColor = 'white'
        }

    })
}
buttonOne.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = "Project <br> Paramour"
    headerP.innerHTML = " Project made for an art museum near Southwest London. <br>Project Paramour is a statement of bold, modern <br> architecture."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/real-paramour.png)")
})


buttonTwo.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = "Seraph <br> Station"
    headerP.innerHTML = " The Seraph Station project challenged us to design a <br> unique station that would transport people through time.<br> The result is a fresh and futuristic model inspired by space <br> stations."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/real-seraph-station.png)")
})



buttonThree.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = " Federal II <br> Tower"
    headerP.innerHTML = " A sequel theme project for a tower originally built in the <br> 1800s. We achieved this with a striking look of brutal <br> minimalism with modern touches."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/real-federal-tower.png)")
})




buttonFour.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = "Trinity Bank <br> Tower"
    headerP.innerHTML = " Trinity Bank challenged us to make a concept for a 84 story <br> building located in the middle of a city with a high <br> earthquake frequency. For this project we used curves to <br> blend design and stability to meet our objectives."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/real-trinity.png)")
})





// this is for mobile navigation ==========================================================

let mobileNavigationList = document.querySelector(".mobile-navigation-list")
let mobileNavButton = document.getElementById("mobile-hamburger-button")
mobileNavButton.addEventListener("click", function () {

    if (mobileNavigationList.style.display == "none" || !mobileNavigationList.style.display) {
        mobileNavigationList.style.display = "flex"
        header.setAttribute("style", "background-image: url(./assets/home/mobile/mobile-really-dark-image-hero-paramour.jpg)")
        headerA.setAttribute("style", "filter: brightness(80%);")
        headerP.setAttribute("style", "filter: brightness(80%);")
        disableScroll()


    }
    else if (mobileNavigationList.style.display == "flex") {
        mobileNavigationList.style.display = "none"
        header.setAttribute("style", "background-image: url(./assets/home/mobile/real-paramour-mobile.png)")
        headerA.setAttribute("style", "filter: brightness(100%);")
        headerP.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }

})


window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
    // const headerImg = header.style.backgroundImage
    // console.log(headerImg)
    if (mobileNavigationList.style.display == "flex" && windowWidth >= 768) {
        mobileNavigationList.style.display = "none"
        header.setAttribute("style", "background-image: url(./assets/home/tablet/tablet-paramour-real.png)")
        headerA.setAttribute("style", "filter: brightness(100%);")
        headerP.setAttribute("style", "filter: brightness(100%);")
        enableScroll()
    }
    else if (windowWidth >= 768) {
        header.setAttribute("style", "background-image: url(./assets/home/tablet/tablet-paramour-real.png)")
    }
    if (windowWidth < 768 && mobileNavigationList.style.display == "none") {
        header.setAttribute("style", "background-image: url(./assets/home/mobile/real-paramour-mobile.png)")
    }
    if (windowWidth >= 1440) {
        header.setAttribute("style", "background-image: url(./assets/home/desktop/real-paramour.png)")
        buttonOne.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
        buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
        buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
        buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
        headerH1.innerHTML = "Project <br> Paramour"
        headerP.innerHTML = " Project made for an art museum near Southwest London. <br>Project Paramour is a statement of bold, modern <br> architecture."
        header.setAttribute("style", "background-image: url(./assets/home/desktop/real-paramour.png)")

    }
});


