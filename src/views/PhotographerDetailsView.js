import PhotographerDetailsHeader from "./layouts/PhotographerDetailsHeader.js"
import PhotographerDetailsMedias from "./layouts/PhotographerDetailsMedias.js"

export default class PhotographerDetailsView {
  static renderPhotographerDetails(photographer, medias) {
    /** Header */
    PhotographerDetailsHeader(photographer)

    /** Medias */
    PhotographerDetailsMedias(photographer, medias)

    /** Infos */
    const likes = document.getElementById("photographer-infos__likes")
    likes.innerHTML = medias.reduce((acc, media) => acc + media.likes, 0)

    const price = document.getElementById("photographer-infos__price")
    price.innerHTML = `${photographer.price}€ / jour`
  }

  update(data) {
    alert("update",data)
  }
}
