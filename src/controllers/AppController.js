import PhotographerModel from "../models/PhotographerModel.js"
import PhotographersView from "../views/PhotographersView.js"

export default class AppController {
  static async init() {
    const photographers = await PhotographerModel.fetchPhotographers()
    PhotographersView.renderPhotographersList(photographers)
  }
}
