import PhotographerPicture from "./templates/PhotographerPictureTemplate.js"

export default class PhotographersView {
  static renderPhotographerCard(photographer) {
    // Use Photographer picture template
    const picture = PhotographerPicture(photographer.portrait)

    return `
      <article>
        <a
          href="photographer.html?id=${photographer.id}"
          aria-label="Voir la page de ${photographer.name}"
        >
          ${picture}
          <h2>${photographer.name}</h2>
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

  static renderPhotographersList(photographers) {
    const container = document.querySelector(".photographer_section")
    container.innerHTML = photographers
      .map(this.renderPhotographerCard)
      .join("")
  }
}
