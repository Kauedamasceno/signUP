const email = document.querySelector(".email");
const errorEmail = document.querySelector(".error");

const submit = document.querySelector(".submit");

const validate = () => {
  if (!email.value || !email.value.includes("@")) {
    errorEmail.textContent = "Validate email required";
    email.classList.remove("email");
    email.classList.add("email_error");
  } else {
    errorEmail.textContent = "";
    email.classList.remove("email_error");
    email.classList.add("email");
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
