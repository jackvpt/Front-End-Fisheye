import PhotographerPicture from "../templates/PhotographerPictureTemplate.js"

const PhotographerDetailsHeader = (photographer) => {
  const picture = PhotographerPicture(photographer.portrait)

  const container = document.querySelector(".photographer-header")
  container.innerHTML = `

            <div class="photographer-header__info">
                <h1>${photographer.name}</h1>
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
                    aria-label="Contacter ${photographer.name}">
                    Contactez-moi
                </button>
            </div>
            <div class="photographer-header__picture">
                ${picture}
            </div>
        `
}

export default PhotographerDetailsHeader
