var loginForm = document.getElementById("loginForm"),
    returnToLogin = document.getElementById("return-to-login"),
    registerBtn = document.getElementById("registerBtn"),
    emailValue = document.getElementById("email"),
    fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    username = document.getElementById("username"),
    passwordValue = document.getElementById("password"),
    confirmPasswordvalue = document.getElementById("confirmPassword"),
    question = document.getElementById("question"),
    answer = document.getElementById("answer"),
    doneMsgBox = document.getElementById("doneMsgBox"),
    form = document.getElementById("form"),
    msgBoxError = document.getElementById("msgBoxError")

const messageBox = (message) => {

    msgBoxError.innerText = message
    msgBoxError.style.opacity = "1"
    setTimeout(() => {
        msgBoxError.style.opacity = "0"
    }, 5000)

}


registerBtn.addEventListener("click", () => {

    const email = emailValue.value,
        emailSplited = email.split("@")
    var emailIsValid = false
    if (emailSplited.length === 2) {

        emailIsValid = true

    }
    if (username.value != "" && fname.value != "" && lname.value != "" && emailValue.value != "" && passwordValue.value != "" && confirmPasswordvalue.value != "" && question.value != "" && answer.value != "") {

        if (emailIsValid) {

            if (passwordValue.value === confirmPasswordvalue.value) {

                document.body.style.overflowY = "hidden"
                document.body.scrollBy(0, -(document.body.scrollHeight))
                form.style.display = "none"
                doneMsgBox.style.display = "flex"

            } else {
                messageBox("Passwords is not matching")
            }

        } else {

            messageBox("Please enter a valid email address")

        }

    } else {
        messageBox("All inputs are required")
    }

})

returnToLogin.addEventListener("click", () => {

    window.location.href = "index.html"

})
