const email = document.querySelector(".email")
const errorEmail = document.querySelector('.error')

const submit = document.querySelector('.submit')

const validate = () => {
  if (!email.value || !email.value.includes('@')){
    errorEmail.textContent = 'Validate email required'
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  validate()

})