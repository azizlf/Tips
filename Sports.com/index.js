var cover = document.getElementById("coverAnimation"),
    toRegister = document.getElementById("toRegister"),
    toLogin = document.getElementById("toLogin"),
    forRegister = document.getElementById("for-register"),
    forLogin = document.getElementById("for-login"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next")

const contents = ["slide1", "slide2"]

var current_slide = 0

prev.addEventListener("click", () => {

    if (current_slide === 1) {
        document.getElementById(contents[current_slide]).style.transform = "translateX(0%)"
        document.getElementById(contents[current_slide - 1]).style.transform = "translateX(0%)"
    }
    current_slide-=1

})

next.addEventListener("click", () => {

    if (current_slide < 1) {
        document.getElementById(contents[current_slide]).style.transform = "translateX(-110%)"
        document.getElementById(contents[current_slide + 1]).style.transform = "translateX(-110%)"
        current_slide+=1
    }

})



toRegister.addEventListener('click', () => {

    cover.style.width = "100%"

    forLogin.style.transform = "translateX(-200%)"

    setTimeout(() => {
        forRegister.style.transform = "translateX(-109%)"
        cover.style.left = ""
        cover.style.right = "0"
        cover.style.width = "50%"
    }, 1000)

})


toLogin.addEventListener('click', () => {

    cover.style.width = "100%"

    forRegister.style.transform = "translateX(300%)"

    setTimeout(() => {
        forLogin.style.transform = "translateX(0%)"
        cover.style.right = ""
        cover.style.left = "0"
        cover.style.width = "50%"
    }, 1000)

})

