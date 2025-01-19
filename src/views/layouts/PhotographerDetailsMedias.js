import {PhotographerMediaContent} from "../templates/PhotographerMediaTemplate.js"
import {PhotographerMediaCaption} from "../templates/PhotographerMediaTemplate.js"

const PhotographerDetailsMedias = (photographer, medias) => {
  const container = document.querySelector(".photographer-medias")
  container.replaceChildren()
  
  medias.forEach((media) => {
    const mediaArticle = document.createElement("article")
    mediaArticle.id = `mediaCard-${media.id}`
    mediaArticle.classList.add("mediaCard")
    mediaArticle.setAttribute("role", "group")
    mediaArticle.setAttribute("aria-labelledby", `media-title-${media.id}`)

    const containerMedia = document.createElement("div")
    containerMedia.innerHTML = PhotographerMediaContent(photographer, media)
    containerMedia.addEventListener("click", () => openLightbox(medias, media))

    mediaArticle.appendChild(containerMedia)

    const containerMediaCaption = document.createElement("div")
    containerMediaCaption.innerHTML = PhotographerMediaCaption(media)
    mediaArticle.appendChild(containerMediaCaption)

    container.appendChild(mediaArticle)
  })
}

export default PhotographerDetailsMedias
