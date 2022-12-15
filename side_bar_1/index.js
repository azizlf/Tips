var sideBarMinimized = false

document.getElementById("menuBtn").addEventListener("click",()=>{



	if(!sideBarMinimized){


		document.getElementById("menuBtn").style.width = "100%"
		
		document.getElementById("menuBtn").style.textAlign = "center"

		document.getElementById("menuBtn").style.margin = "0"

		document.getElementById("sideBar").style.width = "5%"

		document.getElementById("Logo").style.display = "none"

		document.getElementById("logoutBtn").style.width = "100%"

		document.getElementById("logoutBtn").style.textAlign = "center"

		document.getElementById("logoutLabel").style.display = "none"
		
		document.getElementById("username").style.display = "none"

		document.getElementById("contentPage").style.width = "95%"
		
		setTimeout(()=>{

			document.getElementById("menu").style.display = "none"

			document.getElementById("menuIcons").style.display = "block"

		},100)

		sideBarMinimized = true


	}else{

		document.getElementById("sideBar").style.width = "18%"

		document.getElementById("contentPage").style.width = "82%"

		document.getElementById("menuBtn").style.width = "auto"
		
		document.getElementById("menuBtn").style.textAlign = "center"

		document.getElementById("menuBtn").style.margin = "0 0 0 12%"

		document.getElementById("Logo").style.display = "flex"
		
		document.getElementById("username").style.display = "block"

		document.getElementById("logoutBtn").style.width = "auto"

		document.getElementById("logoutBtn").style.textAlign = "center"

		document.getElementById("logoutLabel").style.display = "block"
		
		setTimeout(()=>{

			document.getElementById("menu").style.display = "block"

			document.getElementById("menuIcons").style.display = "none"

			document.getElementById("logoutLabel").style.display = "block"

		},100)

		sideBarMinimized = false

	}


})


document.getElementById("sunMode").addEventListener("click",()=>{


	document.getElementById("contentPage").style.backgroundColor = "white"
	document.getElementById("contentPage").style.color = "black"
	document.getElementById("sunMode").style.backgroundColor = "black"
	document.getElementById("sunMode").style.color = "white"
	document.getElementById("sideBar").style.backgroundColor = "black"

})

document.getElementById("moonMode").addEventListener("click",()=>{

	document.getElementById("sideBar").style.backgroundColor = "#1c1c1c"
	document.getElementById("contentPage").style.backgroundColor = "#222121"
	document.getElementById("contentPage").style.color = "white"
	document.getElementById("sunMode").style.backgroundColor = "transparent"
	document.getElementById("sunMode").style.color = "white"


})