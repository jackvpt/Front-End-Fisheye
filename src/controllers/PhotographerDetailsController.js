import PhotographerModel from "/src/models/PhotographerModel.js"
import MediaModelManager from "/src/models/MediaModel.js"
import PhotographerDetailsView from "/src/views/PhotographerDetailsView.js"
// import KeySort from "./keySortState.js"

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

      sortMedias(photographer, medias, "")

      /** Manage sort options */
      const sortbarOptions = document.querySelectorAll(
        ".sortbar-options-list li"
      )
      sortbarOptions.forEach((option) => {
        option.addEventListener("click", () => {
          const value = option.getAttribute("data-value")
          updateSortBar(value)
          sortMedias(photographer, medias, value)
        })
      })
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * SORT MEDIAS
 * @param {PhotgrapherModel} photographer 
 * @param {MediaModel} medias 
 * @param {string} sortOption 
 */
function sortMedias(photographer, medias, sortOption="popularity") {
  switch (sortOption) {
    case "popularity":
      medias.sort((a, b) => b.likes - a.likes)
      break
    case "date":
      medias.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case "title":
      medias.sort((a, b) => a.title.localeCompare(b.title))
      break
    default:
      medias.sort((a, b) => b.likes - a.likes)
      break
  }
  // KeySort.keySort = sortOption
  renderView(photographer, medias)
}

/**
 * RENDER VIEW
 * @param {Photographer} photographer 
 * @param {MediaModel} medias 
 */
function renderView(photographer, medias) {
  PhotographerDetailsView.renderPhotographerDetails(photographer, medias)

  /** Manage like button */
  const btnLike = document.querySelectorAll(".btn_like")
  btnLike.forEach((btn) => {
    const mediaId = btn.getAttribute("data-key")
    btn.addEventListener("click", () => addLike(photographer, medias, mediaId))
  })
}

/**
 * ADD LIKE TO MEDIA
 * @param {MediaModel} medias 
 * @param {string} mediaId 
 */
function addLike(photographer,medias, mediaId) {
  const selectedMedia = medias.find((media) => media.id === parseInt(mediaId))
  selectedMedia.addLike()
  const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)
  const likesCount = document.getElementById(
    `info__likes-count-#${selectedMedia.id}`
  )
  likesCount.innerText = selectedMedia.likes
  const photographerLikes = document.getElementById("photographer-infos__likes")
  photographerLikes.innerText = totalLikes

  // if (KeySort.keySort === "popularity" || KeySort.keySort === "") {
  //   sortMedias(photographer, medias, "popularity")
  // }
}
