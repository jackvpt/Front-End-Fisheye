import PhotographerDetailsHeader from "/src/views/layouts/PhotographerDetailsHeader.js"
import PhotographerDetailsMedias from "/src/views/layouts/PhotographerDetailsMedias.js"

export default class PhotographerDetailsView {
  /**
   * Render the photographer's details page
   * This method updates the photographer's details, including the header, media, and photographer information.
   * @param {PhotographerModel} photographer - The photographer object containing details like name, city, etc.
   * @param {MediaModel[]} medias - The array of media objects (photos, videos) associated with the photographer
   */
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

  /**
   * Render an error message if the photographer's page is not found
   * This method updates the page with an error message when the photographer's details are not available.
   */
  static renderError() {
    const header = document.getElementById("photographer-header")
    const errorMessage = document.createElement("h2")
    errorMessage.classList.add("error404")
    errorMessage.textContent = "Page du photographe introuvable."
    header.replaceChildren(errorMessage)
  }
}
