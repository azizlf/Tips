var images = [

    {
        id : "image1",
        src : "./shoes/image1.png"
    },
    {
        id : "image2",
        src : "./shoes/image2.png"
    },
    {
        id : "image3",
        src : "./shoes/image3.png"
    },
    {
        id : "image4",
        src : "./shoes/image4.png"
    }

]

function createImage(id,src) {

    var list = document.getElementById("imageList"),
        image = document.createElement("img")

    image.src = src
    image.id = id

    image.addEventListener("mouseenter",()=>{

        setImage(id)

    })

    list.appendChild(image)
    
}

images.map((image)=>{

    createImage(image.id,image.src)

})

function setImage(id) {
    
    document.getElementById("imageViewer").src = document.getElementById(id).src

}


var openMoreBtn = document.getElementById("open-more-btn")


openMoreBtn.addEventListener("click",()=>{

    document.getElementById("popUp").style.opacity = "1"
    document.getElementById("popUp").style.pointerEvents = "all"

})

document.getElementById("returnBtn").addEventListener("click",()=>{

    document.getElementById("popUp").style.opacity = "0"
    document.getElementById("popUp").style.pointerEvents = "none"

})