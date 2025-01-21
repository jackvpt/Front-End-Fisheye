import PhotographerPicture from "/src/views/templates/PhotographerPictureTemplate.js"
import {openContactForm} from "/src/utils/contactForm.js"
/**
 * GET DOM ELEMENTS
 */
// const mainWrapper = document.getElementById("photographer-profile")
const contactModal = document.getElementById("container__contact_modal")
const contactForm = document.getElementById("contact-modal__form")
const contactMessage = document.getElementById("contact-modal__message")
const container = document.getElementById("photographer-header")

const PhotographerDetailsHeader = (photographer) => {
  const picture = PhotographerPicture(photographer.portrait)

  container.innerHTML = `
    <div class="photographer-header__info" role="region" aria-labelledby="photographer-name">
        <h1 id="photographer-name" tabindex="0">${photographer.name}</h1>
        <h2 aria-label="Localisation de ${photographer.name}" tabindex="0">
          ${photographer.city}, ${photographer.country}
        </h2>
        <h3 aria-label="Devise de ${photographer.name}" tabindex="0">
            ${photographer.tagline}
        </h3>
    </div>
    <div class="photographer-header__button">
        <button
          id="contact_button"
          class="contact_button"  
          role="button"
          aria-label="Contacter ${photographer.name}">
          Contactez-moi
        </button>
    </div>
    <div class="photographer-header__picture">
        ${picture}
    </div>
`
  const contactButton = document.getElementById("contact_button")
  contactButton.addEventListener("click", () =>
    openContactForm(photographer.name)
  )
}



export default PhotographerDetailsHeader
