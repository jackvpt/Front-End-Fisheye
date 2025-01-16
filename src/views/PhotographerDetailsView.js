import PhotographerDetailsHeader from "./layouts/PhotographerDetailsHeader.js"
import PhotographerDetailsMedias from "./layouts/PhotographerDetailsMedias.js"

export default class PhotographerDetailsView {
  static renderPhotographerDetails(photographer, medias) {
    // Header
    PhotographerDetailsHeader(photographer)

    // Medias
    PhotographerDetailsMedias(photographer, medias)
  }
}
