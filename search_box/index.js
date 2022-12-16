const data = [
	{
		value : "php realtime chat application"
	},
	{
		value : "Html css javscript design"
	},
	{
		value : "How to make a responsive web application"
	},
	{
		value : "React Native new updates 2022"
	},
	{
		value : "Express JS and Angular 14 Tutorial"
	},
	{
		value : "Tutorial python from scratch"
	},
	{
		value : "How to download Nodejs 14 on windows 10"
	},
	{
		value : "Problem focus input not work!"
	},
	{
		value : "Java 11"
	},
	{
		value : "Backend with spring boot"
	},
	{
		value : "How to become a backend developer"
	},
	{
		value : "Error : ClassNotFoundException ! java "
	},
	{
		value : "make a responsive chat applicaiton using html css javascript"
	},
	{
		value : "Java Tutorial full course from scratch"
	},
	{
		value : "Lists java"
	}

]

function createResult({value}){

	var result = document.createElement("div")
	var textValue = document.createElement("p")

	result.setAttribute("class","result")

	textValue.innerText = value

	result.appendChild(textValue)

	result.addEventListener("click",()=>{

		console.log(textValue.innerText)

		document.getElementById("input").value = textValue.innerText

	})

	return result

}


document.getElementById("input").addEventListener("focusin",()=>{

	document.getElementById("resultsContainer").style.display = "flex"

})

document.getElementById("input").addEventListener("focusout",()=>{

	setTimeout(()=>{

		document.getElementById("resultsContainer").style.display = "none"

	},200)

})


document.getElementById("input").addEventListener("keyup",(e)=>{

	findResult({word:e.target.value})
	
})


function findResult({word}){

	document.getElementById("results").remove()

	var container = document.createElement("div")
	
	container.setAttribute("id","results")

	var counter = 0

	data.map((d)=>{

		var val = d.value.toLowerCase()

		if(val.includes(word.toLowerCase())){

			container.appendChild(createResult({value:d.value}))

			counter++

		}

	})

	if(counter === 0){

		container.appendChild(createResult({value:"No results for ' "+word+" '"}))

	}

	document.getElementById("resultsContainer").appendChild(container)

}

function initResults(){

	var container = document.createElement("div")
	container.setAttribute("id","results")

	data.map((d)=>{

		container.appendChild(createResult({value:d.value}))

	})

	document.getElementById("resultsContainer").appendChild(container)

}

initResults()