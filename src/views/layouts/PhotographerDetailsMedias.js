import PhotographerMedia from "../templates/PhotographerMediaTemplate.js"

const PhotographerDetailsMedias = (photographer, medias) => {
  const container = document.querySelector(".photographer-medias")
  medias.map((media) => {
    const mediaElement = PhotographerMedia(photographer, media)
    container.innerHTML += mediaElement
  })
}

export default PhotographerDetailsMedias
