

function createMessage({from,msg}){


	var message = document.createElement("div")	
	var p = document.createElement("p")

	p.innerHTML = msg

	p.setAttribute("class",from)

	message.setAttribute("class","message msg-"+from)
	message.appendChild(p)

	document.getElementById("messagesContainer").appendChild(message)
	document.getElementById("messagesContainer").scrollTop = document.getElementById("messagesContainer").scrollHeight

}


function responseBot({question}){

	q = question.toLowerCase()

	if(q.includes("hello")){

		setTimeout(()=>{createMessage({from:"sender",msg:"Hello , welcome to ChatBot application"})},1000)

	}

	if(q.includes("where your company is located?")){

		setTimeout(()=>{createMessage({from:"sender",msg:"we are in Tunisia"})},1000)

	}

	if(q.includes("who are you?")){

		setTimeout(()=>{createMessage({from:"sender",msg:"I am a chatbot application developed with html css and javascript"})},1000)

	}

	if(q.includes("what is your name?")){

		setTimeout(()=>{createMessage({from:"sender",msg:"ChatBot Application"})},1000)

	}
	if(q.includes("how are you doing?")){

		setTimeout(()=>{createMessage({from:"sender",msg:"Fine thanks.<br/>And you?"})},1000)

	}
	if(q.includes("where do you stand?")){

		setTimeout(()=>{createMessage({from:"sender",msg:"Tunisia"})},1000)

	}
	if(q.includes("fine")){

		setTimeout(()=>{createMessage({from:"sender",msg:"Good!<br/>So how can i help you ?"})},1000)

	}

}

document.getElementById("sendBtn").addEventListener("click",()=>{

	var messageValue = document.getElementById("messageValue").value

	createMessage({from:"receiver",msg:messageValue})
	document.getElementById("messageValue").value = ""
	responseBot({question:messageValue})

})