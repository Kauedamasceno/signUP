const email = document.querySelector(".email")
const errorEmail = document.querySelector(".error")
const popUp = document.querySelector("#popup")
const container = document.querySelector(".container")

const emailAdress = document.querySelector("#email-adress")

const backLogin = document.querySelector("#button_back")

const submit = document.querySelector(".submit")

const validate = () => {
    let isValid = true
    let emailAdress

    if (!email.value || !email.value.includes("@")) {
        errorEmail.textContent = "Validate email required"
        email.classList.remove("email")
        email.classList.add("email_error")
        isValid = false
    } else {
        errorEmail.textContent = ""
        email.classList.remove("email_error")
        email.classList.add("email")
        emailAdress = email.value
        isValid = true
    }

    return { isValid, emailAdress }
}

const loginSuccess = (success, email) => {
    if (success) {
        container.classList.remove("container")
        container.classList.add("invisible")
        popUp.classList.remove("invisible")
        popUp.classList.add("popup")
        emailAdress.textContent = email
    }
}

function backSignUp() {
    popUp.classList.remove("popup")
    popUp.classList.add("invisible")
    container.classList.remove("invisible")
    container.classList.add("container")
}

backLogin.addEventListener("click", () => {
    backSignUp()
})

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const validate2 = validate()
    loginSuccess(validate2.isValid, validate2.emailAdress)
})
