import PhotographerPicture from "/src/views/templates/PhotographerPictureTemplate.js"

/**
 * RENDER PHOTOGRAPHER CARD
 * @param {PhotographerModel} photographer - The photographer to render
 * @returns {<article>} - DOM element containing the HTML for the photographer card
 */
const renderPhotographerCard = (photographer) => {
  // Use Photographer picture template
  const picture = PhotographerPicture(photographer.portrait)

  const article = document.createElement("article")
  article.setAttribute("aria-labelledby", `photographer-${photographer.id}-name`)

  /** anchor to link to photographer page */
  const anchor = document.createElement("a")
  anchor.href = `/src/pages/photographer.html?id=${photographer.id}`
  anchor.setAttribute("aria-label", `Voir la page de ${photographer.name}`)
  anchor.tabIndex = 0
  anchor.appendChild(picture)

  /** h2 : photographer name */
  const h2 = document.createElement("h2")
  h2.id = `photographer-${photographer.id}-name`
  h2.innerText = photographer.name

  /** h3 : photographer location */
  const h3 = document.createElement("h3")
  h3.setAttribute("aria-label", `Localisation de ${photographer.name}`)
  h3.innerText = `${photographer.city}, ${photographer.country}`

  /** h4 : photographer tagline */
  const h4 = document.createElement("h4")
  h4.setAttribute("aria-label", `Devise de ${photographer.name}`)
  h4.innerText = photographer.tagline

  /** h5 : photographer price */
  const h5 = document.createElement("h5")
  h5.setAttribute("aria-label", `Prix par jour de ${photographer.name}`)
  h5.innerText = `${photographer.price}€/jour`

  article.appendChild(anchor)
  article.appendChild(h2)
  article.appendChild(h3)
  article.appendChild(h4)
  article.appendChild(h5)

  return article
}

/**
 * RENDER ALL PHOTOGRAPHERS
 * @param {PhotographerModel[]} photographers - List of photographers to render
 */
export const renderPhotographersList = (photographers) => {
  const container = document.getElementById("photographer_section")
  photographers.forEach((photographer) => {
    container.appendChild(renderPhotographerCard(photographer))
  })
}
