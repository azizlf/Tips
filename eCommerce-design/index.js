var slides = ["sliderContent1","sliderContent2","sliderContent3"]
var slideBtn = ["sliderservice1","sliderservice2","sliderservice3"]

var index_slider = 0

function slideAction(id){

	var elelment_id = id.replace("service","Content")

	var index_content

	slides.map((sl)=>{

		if(sl === elelment_id){

			document.getElementById(sl).style.display = "flex"

			index_content = parseInt(sl.replace("sliderContent",""))-1

			for (var i = 0; i < slideBtn.length ; i++) {
				if(i === index_content){
					document.getElementById(slideBtn[i]).style.backgroundColor = "blue"
					document.getElementById(slideBtn[i]).style.borderColor = "blue"
				}else{
					document.getElementById(slideBtn[i]).style.backgroundColor = "transparent"
					document.getElementById(slideBtn[i]).style.borderColor = "gray"
				}
			}
		}else{

			document.getElementById(sl).style.display = "none"			

		}

	})

	index_slider = index_content

}

setInterval(()=>{

	slideAction("sliderservice"+(index_slider+1))
	if(!((index_slider+1) === slides.length)){
		index_slider++
	}else{
		index_slider = 0
	}

},2500)

var on = false

setInterval(()=>{

	if(on){

		document.getElementById("adBox").style.color = "#FF5722"

		on = false

	}else{

		document.getElementById("adBox").style.color = "gray"

		on = true

	}

},200)