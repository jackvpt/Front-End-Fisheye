import PhotographerModel from "/src/models/PhotographerModel.js"
import { renderPhotographersList } from "/src/views/PhotographersView.js"

/**
 * APP CONTROLLER
 */
export default class AppController {
  static async init() {
    const photographers = await PhotographerModel.fetchPhotographers()
    renderPhotographersList(photographers)
  }
}
