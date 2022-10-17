var prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next"),
    progressBar = document.getElementById("progressBar"),
    step_two = document.getElementById("step_two"),
    step_three = document.getElementById("step_three"),
    step_four = document.getElementById("step_four"),
    buttonsContainer = document.getElementById("buttonsCTN"),
    formStepOne = document.getElementById("formStepOne"),
    formStepTwo = document.getElementById("formStepTwo"),
    formStepFour = document.getElementById("formStepFour"),
    formStepThree = document.getElementById("formStepThree"),
    fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    birthDay = document.getElementById("birthDay"),
    country = document.getElementById("country"),
    phone = document.getElementById("phone"),
    adress = document.getElementById("adress"),
    city = document.getElementById("city"),
    state = document.getElementById("state"),
    
    nameText = document.getElementById("nameText"),
    emailText = document.getElementById("emailText"),
    userText = document.getElementById("userText"),
    dateText = document.getElementById("dateText"),
    countryText = document.getElementById("countryText"),
    cityText = document.getElementById("cityText"),
    stateText = document.getElementById("stateText"),
    phoneText = document.getElementById("phoneText")

var step = 1

nextBtn.addEventListener("click",()=>{

    if(step === 1){
        progressBar.style.width = "25%"
        setTimeout(()=>{
            step_two.setAttribute("style","background-color: #673AB7;color: white;")
        },500)
        buttonsContainer.style.justifyContent = "space-between"
        prevBtn.style.display = "block"
        formStepOne.style.display = "none"
        formStepTwo.style.display = "block"
        step++
    }
    else if(step === 2){
        progressBar.style.width = "50%"
        setTimeout(()=>{
            step_three.setAttribute("style","background-color: #673AB7;color: white;")
        },500)
        formStepTwo.style.display = "none"
        formStepThree.style.display = "block"
        step++
    }
    else if(step === 3){
        progressBar.style.width = "75%"
        setTimeout(()=>{
            step_four.setAttribute("style","background-color: #673AB7;color: white;")
        },500)
        nameText.innerText = fName.value+" "+lName.value
        userText.innerText = username.value
        emailText.innerText = email.value
        dateText.innerText = birthDay.value
        countryText.innerText = country.value
        cityText.innerText = city.value
        stateText.innerText = state.value
        phoneText.innerText = phone.value

        formStepThree.style.display = "none"
        formStepFour.style.display = "flex"
        nextBtn.innerText = "Register"
        step++
    }
    
})

prevBtn.addEventListener("click",()=>{

    if(step === 2){
        progressBar.style.width = "0%"
        step_two.setAttribute("style","background-color: transparent;color: black;")
        buttonsContainer.style.justifyContent = "right"
        prevBtn.style.display = "none"
        formStepTwo.style.display = "none"
        formStepOne.style.display = "block"
        step--
    }
    else if(step === 3){
        progressBar.style.width = "25%"
        step_three.setAttribute("style","background-color: transparent;color: black;")
        formStepThree.style.display = "none"
        formStepTwo.style.display = "block"
        step--
    }
    else if(step === 4){
        progressBar.style.width = "50%"
        step_four.setAttribute("style","background-color: transparent;color: black;")
        formStepFour.style.display = "none"
        formStepThree.style.display = "block"
        step--
    }
    
})