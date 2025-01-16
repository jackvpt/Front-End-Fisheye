import PhotographerPicture from "../templates/PhotographerPictureTemplate.js"

function openContactForm(photographerName) {
  const modalName = document.getElementById("modal-photographerName")
  modalName.textContent = photographerName
  const contactModal = document.getElementById("contact_modal")
  contactModal.style.display = "flex"
}

const PhotographerDetailsHeader = (photographer) => {
  const picture = PhotographerPicture(photographer.portrait)

  const container = document.querySelector(".photographer-header")
  container.innerHTML = `
    <div class="photographer-header__info" role="region" aria-labelledby="photographer-name">
        <h1 id="photographer-name">${photographer.name}</h1>
        <h2 aria-label="Localisation de ${photographer.name}">
            ${photographer.city}, ${photographer.country}
        </h2>
        <h3 aria-label="Devise de ${photographer.name}">
            ${photographer.tagline}
        </h3>
    </div>
    <div class="photographer-header__button">
        <button
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

  const contactButton = container.querySelector(".contact_button")
  contactButton.addEventListener("click", openContactForm(photographer.name))
}

export default PhotographerDetailsHeader
