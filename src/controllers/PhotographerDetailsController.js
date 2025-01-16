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
      const photographer = await PhotographerModel.fetchPhotographerById(id)
      const medias = await MediaModelManager.fetchMediasByPhotographerId(id)
      PhotographerDetailsView.renderPhotographerDetails(photographer, medias)
    } catch (error) {
      console.error(error)
    }
  }
}
