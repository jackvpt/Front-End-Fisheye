function photographerProfileHeaderTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data
  const picture = `assets/images/portraits/${portrait}`

  function getUserCardDOM() {
    const header = document.createElement("section")
    header.classList.add("photograph-header")

    // Info
    const info = document.createElement("div")
    info.classList.add("photograph-header__info")
    info.setAttribute("role", "region")
    info.setAttribute("aria-labelledby", "photographer-name")

    // Name
    const h1 = document.createElement("h1")
    h1.textContent = name
    h1.setAttribute("id", "photographer-name")
    h1.setAttribute("aria-label", `Nom du photographe: ${name}`)

    // City and country
    const h2 = document.createElement("h2")
    h2.textContent = `${city}, ${country}`
    h2.setAttribute("aria-label", `Localisation: ${city}, ${country}`)

    // Tagline
    const h3 = document.createElement("h3")
    h3.textContent = tagline
    h3.setAttribute("aria-label", `Devise: ${tagline}`)

    info.appendChild(h1)
    info.appendChild(h2)
    info.appendChild(h3)

    header.appendChild(info)

    // Button
    const button = document.createElement("button")
    button.classList.add("contact_button")
    button.textContent = "Contactez-moi"
    header.appendChild(button)

    // Picture
    const thumbnail = document.createElement("div")
    thumbnail.classList.add("photograph-header__picture")
    
    const img = document.createElement("img")
    img.setAttribute("src", picture)
    img.setAttribute("alt", "")
    img.setAttribute("role", "img")
    thumbnail.appendChild(img)
    header.appendChild(thumbnail)

return header
  }

  return { name, picture, getUserCardDOM }
}
