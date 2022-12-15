const data = [

    {
        src: "./images/g1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },{
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b1.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b2.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/b4.png",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    }

]

// function for create container cards
function createContainerCards(cards, id) {

    var container = document.createElement("div")

    container.setAttribute("class", "card-container")

    cards.map(card => {

        container.appendChild(card)

    })

    container.id = "group" + id


    document.getElementById("cardList").appendChild(container)

}

function createIcon(text,className){

    var icon = document.createElement("div")
    var hint = document.createElement("div")
    var p = document.createElement("p")
    var i = document.createElement("i")


    p.innerText = text

    i.setAttribute("class",className)


    hint.setAttribute("class","hint")
        
    icon.setAttribute("class","icon")

    icon.appendChild(hint)  

    hint.appendChild(p)
    icon.appendChild(i)
    icon.appendChild(hint)

    return icon

}

// function for create card
function createCard({ nameVal, src, jobVal }) {


    var card = document.createElement("div")
    var containerImg = document.createElement("div")
    var contentImg = document.createElement("div")
    var image = document.createElement("img")
    var details = document.createElement("div")
    var name = document.createElement("p")
    var job = document.createElement("p")
    var containerButton = document.createElement("div")
    var button = document.createElement("button")
    var rate = document.createElement("div")
    var stars = document.createElement("div")
    var socialIcons = document.createElement("div")

    var icons = ["facebook","twitter","linkedin"] 
    
    socialIcons.setAttribute("class","social-icons")


    icons.map((ic)=>{
        

        if(ic === "facebook"){

            socialIcons.appendChild(createIcon("Facebook","fa-brands fa-facebook-f"))  

        }else if(ic === "twitter"){

            socialIcons.appendChild(createIcon("Twitter","fa-brands fa-twitter"))

        }else{

            socialIcons.appendChild(createIcon("Linkedin","fa-brands fa-linkedin-in"))

        }
    
    })

    


    var rates = ["good","good","good","bad","bad"]

    rates.map((rate)=>{

        var i = document.createElement("i")

        i.style.color = "#ff5722"
        i.style.fontSize = "1.4vw"

        if(rate === "good"){

            i.setAttribute("class","fa-solid fa-star")

        }else{

            i.setAttribute("class","fa-regular fa-star")

        }

        stars.appendChild(i)
    })


    rate.setAttribute("class","rate")
    stars.setAttribute("class","rate")

    rate.appendChild(stars)


    containerImg.setAttribute("class", "image")

    image.src = src

    details.setAttribute("class", "details")
    name.setAttribute("class", "name")
    job.setAttribute("class", "job")

    name.innerText = nameVal
    job.innerText = jobVal

    button.innerText = "contact"
    button.style.backgroundColor = "white"

    button.addEventListener("click", () => {

        if (button.style.backgroundColor === "rgb(255, 193, 7)") {

            button.style.backgroundColor = "white"

        } else {

            button.style.backgroundColor = "#FFC107"

        }

    })

    containerButton.setAttribute("class", "button")


    containerButton.appendChild(button)

    details.appendChild(name)
    details.appendChild(job)

    contentImg.appendChild(image)
    containerImg.appendChild(contentImg)
    card.appendChild(containerImg)
    card.appendChild(details)
    card.appendChild(rate)
    card.appendChild(containerButton)
    card.appendChild(socialIcons)
    card.setAttribute("class", "card")

    return card


}

// 4 cards per groupe
var groupBy = 3

// currentIndex of group list
var currentIndex = 0

//cards created list
var cards = []

// counter of groups
var counter = 0

// groups Ids list
var groupIds = []

//scroll index
var scrollIndex = 0

// function to create cards
function createCards() {
    for (let index = 0; index < data.length; index++) {

        cards.push(createCard(data[index]))


        if (index - currentIndex == (groupBy - 1) && index <= (groupBy - 1)) {

            counter++

            createContainerCards(cards, counter)

            groupIds.push(counter)

            currentIndex = index

            cards = []

        } else if (index - currentIndex == groupBy && index != 0) {

            counter++

            createContainerCards(cards, counter)

            groupIds.push(counter)

            currentIndex = index

            cards = []

        }

    }
}


//prev button event
document.getElementById("rightButton").addEventListener("click", () => {

    if (scrollIndex < (groupIds.length - 1)) {

        scrollIndex++

        var current = document.getElementById("group" + groupIds[scrollIndex])


        current.scrollIntoView({ behavior: "smooth" })

    }


})

//next button event
document.getElementById("leftButton").addEventListener("click", () => {


    if (scrollIndex > 0) {

        scrollIndex--

        var current = document.getElementById("group" + groupIds[scrollIndex])

        current.scrollIntoView({ behavior: "smooth" })

    }



})

//change groupBy nummber
function setGroupBy(number) {

    groupBy = number

    currentIndex = 0

    counter = 0

    scrollIndex = 0

    groupIds.map(id => {

        document.getElementById("group" + id).remove()

    })

    groupIds = []

    cards = []

    console.log(groupIds)

    createCards()



}

//create cards
createCards()