// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const ConfirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};

PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");
};

ConfirmPasswordInput.onkeyup = () => {
  ConfirmPasswordInput.classList.remove("is-valid");
  ConfirmPasswordInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOK = false;
  // isEmailOK = false;
  isPasswordOK = false;
  isConfirmPasswordOK = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
if (lastNameInput.value === "") {
  lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
if (validateEmail(EmailInput.value)===false) {
  EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    isEmailOK = true;
  }
  // validate password
if (PasswordInput.value.length < 6 ){
  PasswordInput.classList.add("is-invalid");
  } else {
    PasswordInput.classList.add("is-valid");
    isPasswordOK = true;
}
  // validate confirm password
if (ConfirmPasswordInput.value === PasswordInput.value && PasswordInput.value.length >= 6){
  ConfirmPasswordInput.classList.add("is-valid");
  isConfirmPasswordOK = true;
  } else {
    ConfirmPasswordInput.classList.add("is-invalid");
}

  if (isFirstNameOk && isLastNameOk && isEmailOK && isPasswordOK && isConfirmPasswordOK) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value ="";
  lastNameInput.value ="";
  EmailInput.value ="";
  PasswordInput.value ="";
  ConfirmPasswordInput.value ="";

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");

  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");

  ConfirmPasswordInput.classList.remove("is-valid");
  ConfirmPasswordInput.classList.remove("is-invalid");
}
