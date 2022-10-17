var contactBtn = document.getElementById("contactBtn"),
    main = document.getElementById("main"),
    returnBtn = document.getElementById("return")

contactBtn.addEventListener("click", () => {

    main.style.transform = "rotateY(48deg) scale(0.8) translateX(-15%)"
    main.style.boxShadow = "rgb(190 190 190 / 6%) -75px -1px 20px 20px"

})

returnBtn.addEventListener("click", () => {

    main.style.transform = "rotateY(0deg) scale(1) translateX(0%)"
    main.style.boxShadow = "0 0 0 0 transparent"

})