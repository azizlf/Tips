document.getElementById("searchBtn").addEventListener("mouseenter", () => {

    document.getElementById("searchBox").style.opacity = "1"

    setTimeout(() => {
        document.getElementById("searchIcon").style.opacity = "1"
        document.getElementById("searchIcon").style.pointerEvents = "all"
        setTimeout(() => {
            document.getElementById("searchBox").style.backgroundColor = "white"
            document.getElementById("searchBox").style.pointerEvents = "all"
            document.getElementById("searchBox").style.width = "60%"
            document.getElementById("searchVal").style.opacity = "1"
        }, 300)
    }, 300);


})

document.getElementById("searchBox").addEventListener("mouseleave", () => {

    if (document.getElementById("searchVal").value === "") {

        document.getElementById("searchBox").style.width = "9%"
        setTimeout(() => {
            document.getElementById("searchBox").style.backgroundColor = "transparent"
            document.getElementById("searchBox").style.pointerEvents = "none"
            document.getElementById("searchVal").style.opacity = "0"
            setTimeout(() => {
                document.getElementById("searchIcon").style.opacity = "0"
                document.getElementById("searchIcon").style.pointerEvents = "none"
            }, 300);
        }, 300)

    }


})

document.getElementById("menuBtn").addEventListener("click",()=>{

    document.getElementById("menuMobile").style.opacity = "1"
    document.getElementById("menuMobile").style.pointerEvents = "all"

})

document.getElementById("closeMenuBtn").addEventListener("click",()=>{

    document.getElementById("menuMobile").style.opacity = "0"
    document.getElementById("menuMobile").style.pointerEvents = "none"

})