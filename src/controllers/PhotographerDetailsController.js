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
      const medias = await MediaModelManager.fetchMediasByPhotographerId(id, directory)

      // Render view
      PhotographerDetailsView.renderPhotographerDetails(photographer, medias)
    } catch (error) {
      console.error(error)
    }
  }
}
