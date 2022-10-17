var toRegister = document.getElementById("registerBtn"),
    toSignup = document.getElementById("toSignup"),
    sideBarBtn = document.getElementById("sideBtn"),
    closeListBtn = document.getElementById("closeList"),
    list = document.getElementById("list")

toRegister.addEventListener("click",()=>{

    window.location.href = "register.html"

})

toSignup.addEventListener("click",()=>{

    window.location.href = "register.html"

})

sideBarBtn.addEventListener("click",()=>{

    sideBarBtn.style.display = "none"
    closeListBtn.style.display = "flex"
    list.style.height = "auto"

})

closeListBtn.addEventListener("click",()=>{

    sideBarBtn.style.display = "flex"
    closeListBtn.style.display = "none"
    list.style.height = "0px"


})