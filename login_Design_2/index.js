function createInput({type,hint}){



	var container = document.createElement("div")
	var input = document.createElement("input")
	var label = document.createElement("label")



	input.type = type

	label.innerText = hint

	input.addEventListener("focusin",()=>{

		container.style.borderColor = "#e91e63"
		label.style.color = "#e91e63"

	})

	input.addEventListener("focusout",()=>{

		container.style.borderColor = "black"
		label.style.color = "black"

	})


	container.appendChild(label)
	container.appendChild(input)

	container.setAttribute("class","input")


	document.getElementById("inputs").appendChild(container)


}

//create email input

createInput({
	type:"text",
	hint:"Email"
})

//create password input

createInput({
	type:"password",
	hint:"Password"
})