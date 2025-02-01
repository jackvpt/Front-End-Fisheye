/**
 * GET DOM ELEMENTS
 */
const mainWrapper = document.getElementById("photographer-profile")
const contactModal = document.getElementById("container__contact-modal")
const contactName = document.getElementById("contact-photographerName")

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const message = document.getElementById("message")
const contactForm = document.getElementById("wrapper-contact__form")
const contactMessage = document.getElementById("wrapper-contact-message")

const errorFirstName = document.getElementById("error-firstName")
const errorLastName = document.getElementById("error-lastName")
const errorEmail = document.getElementById("error-email")
const errorMessage = document.getElementById("error-message")

/**
 * OPEN MODAL CONTACT FORM
 * @param {string} photographerName - The name of the photographer
 */
const openContactForm = (photographerName) => {
  /** Set keyboard accessibility */
  document.addEventListener("keydown", handleModalKeyEvents)

  /** Set ARIA properties */
  mainWrapper.setAttribute("aria-hidden", "true")
  contactModal.setAttribute("aria-hidden", "false")

  contactName.textContent = photographerName
  contactModal.style.display = "flex"
  contactForm.style.display = "block"
  contactMessage.style.display = "none"

  /** Set focus on the first input */
  const firstInput = document.getElementById("firstName")
  firstInput.focus()
}

/**
 * CLOSE MODAL CONTACT FORM
 */
const closeContactModal = () => {
  /** Set ARIA properties */
  mainWrapper.setAttribute("aria-hidden", "false")
  contactModal.setAttribute("aria-hidden", "true")
  contactModal.style.display = "none"

  /** Set focus on the trigger button */
  const contactButton = document.getElementById("contact_button")
  contactButton.focus()

  /** Remove keyboard accessibility */
  document.removeEventListener("keydown", handleModalKeyEvents)
}

/**
 * CHECK FIRST NAME
 * @returns true if item is valid or false
 */
const checkFirstName = () => {
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
const checkLastName = () => {
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
const checkEmail = () => {
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
const checkMessage = () => {
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
const submitContactForm = (event) => {
  event.preventDefault()

  if (checkFirstName() && checkLastName() && checkEmail() && checkMessage()) {
    console.log("First name :>> ", firstName.value)
    console.log("Last name :>> ", lastName.value)
    console.log("E-mail :>> ", email.value)
    console.log("Message :>> ", message.value)

    contactForm.style.display = "none"
    contactMessage.style.display = "flex"

    document.forms["contact_form"].reset() // Reset all fields

    document.getElementById("btn-contact-message-close").focus()
  }
}

/**
 * SET EVENT LISTENERS
 */
const setEventListeners = () => {
  document
    .getElementById("btn-contact-close")
    .addEventListener("click", closeContactModal)
  document.getElementById("firstName").addEventListener("blur", checkFirstName)
  document.getElementById("lastName").addEventListener("blur", checkLastName)
  document.getElementById("email").addEventListener("blur", checkEmail)
  document.getElementById("message").addEventListener("blur", checkMessage)
  contactForm.addEventListener("submit", submitContactForm)
  document
    .getElementById("btn-contact-message-close")
    .addEventListener("click", closeContactModal)
}

/**
 * SET KEYBOARD ACCESSIBILITY
 */
const handleModalKeyEvents = (event) => {
  /** Close modal on Escape press */
  if (event.key === "Escape") {
    closeContactModal()
  }

  /** Submit modal on Enter press */
  if (event.key === "Enter") {
    event.preventDefault()
    if (event.target.tagName !== "TEXTAREA") submitContactForm(event)

    if (
      event.target.id === "btn-contact-message-close" ||
      event.target.id === "btn-contact-close"
    )
      closeContactModal()
  }
}

setEventListeners()

export { openContactForm, closeContactModal, submitContactForm }
