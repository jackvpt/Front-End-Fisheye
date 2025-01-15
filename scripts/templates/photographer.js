import photographerPicture from "./photographerPictureTemplate"

export function photographerTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data

  const picture = `assets/images/portraits/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement("article")
    article.setAttribute("role", "region")
    article.setAttribute("aria-labelledby", "user-name")

    const link = document.createElement("a")
    link.setAttribute("href", `photographer.html?id=${id}`)
    link.setAttribute("aria-label", `Voir la page de ${name}`)

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")
    const img = document.createElement("img")
    img.setAttribute("src", picture)
    img.setAttribute("alt", "")
    img.setAttribute("role", "img")
    imgContainer.appendChild(img)

    const h2 = document.createElement("h2")
    h2.textContent = name
    h2.setAttribute("id", "user-name")

    const details = document.createElement("div")
    details.classList.add("details")
    details.setAttribute("role", "group")
    details.setAttribute("aria-label", "Détails du photographe")

    const h3 = document.createElement("h3")
    h3.textContent = `${city}, ${country}`
    h3.setAttribute("aria-label", `Localisation: ${city}, ${country}`)

    const h4 = document.createElement("h4")
    h4.textContent = tagline
    h4.setAttribute("aria-label", `Devise: ${tagline}`)

    const h5 = document.createElement("h5")
    h5.textContent = `${price}€/jour`
    h5.setAttribute("aria-label", `Tarif: ${price} euros par jour`)

    article.appendChild(link)
    link.appendChild(imgContainer)
    link.appendChild(h2)
    link.appendChild(details)
    details.appendChild(h3)
    details.appendChild(h4)
    details.appendChild(h5)


 

    return article
  }

  return { name, picture, getUserCardDOM }
}
