let buttonOne = document.getElementById("button-one")
let buttonTwo =  document.getElementById("button-two")
let buttonThree =  document.getElementById("button-three")
let buttonFour =  document.getElementById("button-four")
let headerH1 = document.getElementById("header-h1")
let headerP = document.getElementById("header-p")
let header = document.querySelector("header")
let everyButton = document.querySelectorAll(".header-bottom-div button")
for (x of everyButton){
   x.addEventListener("mouseover", function () {
    if (this.style.backgroundColor == 'rgb(27, 29, 35)') {
        this.style.backgroundColor = "rgb(27, 29, 35)"
    }
    else if (this.style.backgroundColor == 'white'){
        this.style.backgroundColor = 'hsl(230, 21%, 95%)'
    }
   })
   x.addEventListener("mouseout", function () {
    if (this.style.backgroundColor == 'rgb(240, 240, 245)'){
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
    header.setAttribute("style", "background-image: url(./assets/home/desktop/dark-paramour-tower.jpg)")
})


buttonTwo.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = "Seraph <br> Station"
    headerP.innerHTML = " The Seraph Station project challenged us to design a <br> unique station that would transport people through time.<br> The result is a fresh and futuristic model inspired by space <br> stations."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/dark-image-hero-seraph.jpg)")
})



buttonThree.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonFour.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = " Federal II <br> Tower"
    headerP.innerHTML = " A sequel theme project for a tower originally built in the <br> 1800s. We achieved this with a striking look of brutal <br> minimalism with modern touches."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/dark-image-hero-federal.jpg)")
})




buttonFour.addEventListener("click", function () {
    this.setAttribute("style", "background-color: hsl(225, 13%, 12%); color: hsl(230, 21%, 95%)")
    buttonTwo.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonThree.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    buttonOne.setAttribute("style", "background-color: white; color: hsl(223, 7%, 53%)")
    headerH1.innerHTML = "Trinity Bank <br> Tower"
    headerP.innerHTML = " Trinity Bank challenged us to make a concept for a 84 story <br> building located in the middle of a city with a high <br> earthquake frequency. For this project we used curves to <br> blend design and stability to meet our objectives."
    header.setAttribute("style", "background-image: url(./assets/home/desktop/dark-image-hero-trinity.jpg)")
})