import PhotographerPicture from "/src/views/templates/PhotographerPictureTemplate.js"

const PhotographerDetailsHeader = (photographer) => {
  /** GET DOM ELEMENTS */
  const container = document.getElementById("photographer-header")

  const picture = PhotographerPicture(photographer.portrait)

  container.replaceChildren()
  /** Header infos : name, contact button and photographer portrait */
  const headerInfos = document.createElement("div")
  headerInfos.classList.add("photographer-header__info")
  headerInfos.setAttribute("role", "region")
  headerInfos.setAttribute("aria-labelledby", "photographer-name")

  /** h1 : photographer name */
  const h1 = document.createElement("h1")
  h1.id = "photographer-name"
  h1.tabIndex = 0
  h1.innerText = photographer.name

  /** h2 : photographer location */
  const h2 = document.createElement("h2")
  h2.setAttribute("aria-label", `Localisation de ${photographer.name}`)
  h2.tabIndex = 0
  h2.innerText = `${photographer.city}, ${photographer.country}`

  /** h3 : photographer tagline */
  const h3 = document.createElement("h3")
  h3.setAttribute("aria-label", `Devise de ${photographer.name}`)
  h3.tabIndex = 0
  h3.innerText = photographer.tagline

  headerInfos.appendChild(h1)
  headerInfos.appendChild(h2)
  headerInfos.appendChild(h3)

  /** Header button container */
  const headerButton = document.createElement("div")
  headerButton.classList.add("photographer-header__button")

  /** Contact button */
  const contactButton = document.createElement("button")
  contactButton.id = "contact_button"
  contactButton.classList.add("contact_button")
  contactButton.setAttribute("role", "button")
  contactButton.setAttribute("aria-label", `Contacter ${photographer.name}`)
  contactButton.innerText = "Contactez-moi"

  headerButton.appendChild(contactButton)

  /** Header picture */
  const headerPicture = document.createElement("div")
  headerPicture.classList.add("photographer-header__picture")
  headerPicture.appendChild(picture)

  container.appendChild(headerInfos)
  container.appendChild(headerButton)
  container.appendChild(headerPicture)
}

export default PhotographerDetailsHeader
