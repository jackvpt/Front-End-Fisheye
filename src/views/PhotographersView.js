import PhotographerPicture from "./templates/PhotographerPictureTemplate.js"

/**
 * RENDER PHOTOGRAPHER CARD
 * @param {PhotographerModel} photographer - The photographer to render
 * @returns {string} - String containing the HTML for the photographer card
 */
const renderPhotographerCard = (photographer) => {
  // Use Photographer picture template
  const picture = PhotographerPicture(photographer.portrait)

  return `
    <article aria-labelledby="photographer-${photographer.id}-name">
      <a
        href="/src/pages/photographer.html?id=${photographer.id}"
        aria-label="Voir la page de ${photographer.name}"
      >
        ${picture}
      <h2 id="photographer-${photographer.id}-name">${photographer.name}</h2>
        <h3 aria-label="Localisation de ${photographer.name}">
          ${photographer.city}, ${photographer.country}
        </h3>
        <h4 aria-label="Devise de ${photographer.name}">
          ${photographer.tagline}
        </h4>
        <h5 aria-label="Prix par jour de ${photographer.name}">
          ${photographer.price}€/jour
        </h5>
      </a>
  </article>
  `
}

/**
 * RENDER ALL PHOTOGRAPHERS
 * @param {PhotographerModel[]} photographers - List of photographers to render
 */
export const renderPhotographersList = (photographers) => {
  const container = document.getElementById("photographer_section")
  container.innerHTML = photographers.map(renderPhotographerCard).join("")
}
