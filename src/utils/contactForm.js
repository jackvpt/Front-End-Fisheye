/**
 * GET DOM ELEMENTS
 */
const mainWrapper = document.getElementById("photographer-profile")
const modal = document.getElementById("container__contact_modal")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const message = document.getElementById("message")

const triggerButton = document.querySelector(".contact_button")

const errorFirstName = document.getElementById("error-firstName")
const errorLastName = document.getElementById("error-lastName")
const errorEmail = document.getElementById("error-email")
const errorMessage = document.getElementById("error-message")

/**
 * CLOSE MODAL
 */
function closeContactModal() {
  /** Set ARIA properties */
  mainWrapper.setAttribute("aria-hidden", "false")
  modal.setAttribute("aria-hidden", "true")
  modal.style.display = "none"

  /** Set focus on the trigger button */
  triggerButton.focus()
}

/**
 * CHECK FIRST NAME
 * @returns true if item is valid or false
 */
function checkFirstName() {
  if (!firstName.checkValidity()) {
    errorFirstName.textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom"
    firstName.classList.add("input-invalid")
    return false
  }
  errorFirstName.textContent = ""
  firstName.classList.remove("input-invalid")
  return true
}

/**
 * CHECK LAST NAME
 * @returns true if item is valid or false
 */
function checkLastName() {
  if (!lastName.checkValidity()) {
    errorLastName.textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom"
    lastName.classList.add("input-invalid")
    return false
  }
  errorLastName.textContent = ""
  lastName.classList.remove("input-invalid")
  return true
}

/**
 * CHECK EMAIL
 * @returns true if item is valid or false
 */
function checkEmail() {
  const emailPattern = new RegExp(email.pattern)

  if (!email.checkValidity() || !emailPattern.test(email.value)) {
    errorEmail.textContent = "Veuillez entrer une adresse e-mail valide"
    email.classList.add("input-invalid")
    return false
  }
  errorEmail.textContent = ""
  email.classList.remove("input-invalid")
  return true
}

/**
 * CHECK MESSAGE
 * @returns true if item is valid or false
 */
function checkMessage() {
  if (!message.checkValidity()) {
    errorMessage.textContent = "Veuillez écrire au moins 10 caractères"
    message.classList.add("input-invalid")
    return false
  }
  errorMessage.textContent = ""
  message.classList.remove("input-invalid")
  return true
}

/**
 * VALIDATE THE WHOLE FORM
 * @param {*} event
 * @returns true if all items are valid or false
 */
function submitContactForm(event) {
  event.preventDefault()

  if (checkFirstName() && checkLastName() && checkEmail() && checkMessage()) {
    console.log("First name :>> ", firstName.value)
    console.log("Last name :>> ", lastName.value)
    console.log("E-mail :>> ", email.value)
    console.log("Message :>> ", message.value)

    closeContactModal()
    document.forms["contact_form"].reset() // Reset all fields
  }
}
