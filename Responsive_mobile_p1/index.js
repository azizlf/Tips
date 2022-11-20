var toRegisterBtn = document.getElementById("toRegisterBtn"),
    toLoginBtn = document.getElementById("toLoginBtn"),
    loginFrom = document.getElementById("loginForm"),
    registerForm = document.getElementById("registerForm"),
    loginBtn = document.getElementById("loginBtn"),
    progressBar = document.getElementById("progressBar"),
    home = document.getElementById("home"),
    index = document.getElementById("index"),
    logoutBtn = document.getElementById("logoutBtn")

function setTransision() {
    progressBar.style.transition ="1s"
}

toRegisterBtn.addEventListener("click", () => {

    setTransision()
    progressBar.style.width = "100%"

    setTimeout(() => {

        loginFrom.style.display = "none"
        registerForm.style.display = "block"
        progressBar.style.transition = "0s"
        progressBar.style.width = "0%"

    }, 1300)

})


toLoginBtn.addEventListener("click", () => {
    
    setTransision()
    progressBar.style.width = "100%"

    setTimeout(() => {

        loginFrom.style.display = "block"
        registerForm.style.display = "none"
        progressBar.style.transition = "0s"
        progressBar.style.width = "0%"

    }, 1300)

})

loginBtn.addEventListener("click", () => {

    setTransision()
    progressBar.style.width = "100%"

    setTimeout(() => {

        index.style.display = "none"
        home.style.display = "flex"
        progressBar.style.transition = "0s"
        progressBar.style.width = "0%"

    }, 1300)


})


logoutBtn.addEventListener("click", () => {

    setTransision()
    progressBar.style.width = "100%"

    setTimeout(() => {

        index.style.display = "flex"
        home.style.display = "none"
        progressBar.style.transition = "0s"
        progressBar.style.width = "0%"

    }, 1300)

})

