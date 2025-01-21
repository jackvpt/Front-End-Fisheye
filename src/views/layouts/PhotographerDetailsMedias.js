import { PhotographerMediaContent } from "/src/views/templates/PhotographerMediaTemplate.js"
import { PhotographerMediaCaption } from "/src/views/templates/PhotographerMediaTemplate.js"
import { openLightbox } from "/src/utils/lightBox.js"

/**
 * RENDER ALL PHOTOGRAPHER MEDIAS
 * @param {PhotographerModel} photographer
 * @param {MediaModel[]} medias
 */
const PhotographerDetailsMedias = (photographer, medias) => {
  const container = document.querySelector(".photographer-medias")
  container.replaceChildren()

  medias.forEach((media) => {
    /** article : Media card */
    const mediaArticle = document.createElement("article")
    mediaArticle.id = `mediaCard-${media.id}`
    mediaArticle.classList.add("mediaCard")
    mediaArticle.setAttribute("role", "group")
    mediaArticle.setAttribute("aria-labelledby", `media-title-${media.id}`)

    /** div : container for media */
    const containerMedia = document.createElement("div")
    containerMedia.setAttribute("tabindex", "0")
    containerMedia.appendChild(PhotographerMediaContent(photographer, media))
    containerMedia.addEventListener("click", () => openLightbox(medias, media))

    mediaArticle.appendChild(containerMedia)

    /** div : container for caption */
    const containerMediaCaption = document.createElement("div")
    containerMediaCaption.appendChild(PhotographerMediaCaption(media))
    mediaArticle.appendChild(containerMediaCaption)

    container.appendChild(mediaArticle)
  })
}

export default PhotographerDetailsMedias
