var homePage = document.getElementById("home"),
    aboutPage = document.getElementById("about")

document.getElementById("aboutBtn").addEventListener("click",()=>{

    homePage.style.transform = "scale(.8)"
    aboutPage.style.transform = "scale(.8)"
    setTimeout(() => {
        homePage.style.transform += " translateX(-125%)"
        aboutPage.style.transform += " translateX(-125%)"
    }, 700);
    setTimeout(() => {
        aboutPage.style.transform = "scale(1) translateX(-100%)"
    }, 1300);

})


document.getElementById("return").addEventListener("click",()=>{

    homePage.style.transform = "scale(.8) translateX(-125%)"
    aboutPage.style.transform = "scale(.8) translateX(-125%)"
    setTimeout(() => {
        aboutPage.style.transform = "scale(.8) translateX(0%)"
        homePage.style.transform = "scale(.8) translateX(0%)"
    }, 700);
    setTimeout(() => {
        homePage.style.transform = "scale(1) translateX(0%)"
    }, 1300);

})