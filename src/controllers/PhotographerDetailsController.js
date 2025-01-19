import PhotographerModel from "../models/PhotographerModel.js"
import MediaModelManager from "../models/MediaModel.js"
import PhotographerDetailsView from "../views/PhotographerDetailsView.js"

export default class PhotographerDetailsController {
  static async init() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    // if (!id) {
    //   PhotographerDetailsView.renderError("No photographer ID provided in URL.")
    //   return
    // }

    try {
      /** Fetch data */
      const photographer = await PhotographerModel.fetchPhotographerById(id)
      const directory = photographer.directory
      const medias = await MediaModelManager.fetchMediasByPhotographerId(
        id,
        directory
      )

      /** Render view */
      PhotographerDetailsView.renderPhotographerDetails(photographer, medias)

      /** Add event listeners */
      const btnLike = document.querySelectorAll(".btn_like")

      btnLike.forEach((btn) => {
        const mediaId = btn.getAttribute("data-key")
        btn.addEventListener("click", () => addLike(medias, mediaId))
      })
    } catch (error) {
      console.error(error)
    }
  }
}

function addLike(medias, mediaId) {
  const selectedMedia = medias.find((media) => media.id === parseInt(mediaId))
  selectedMedia.addLike()
  const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)
  const likesCount = document.getElementById(
    `info__likes-count-#${selectedMedia.id}`
  )
  likesCount.innerText = selectedMedia.likes
  const photographerLikes = document.getElementById("photographer-infos__likes")
  photographerLikes.innerText = totalLikes
}
