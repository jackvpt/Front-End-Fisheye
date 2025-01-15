import getData from "../utils/fetchData.js"

// Modèle de base
class MediaModel {
  constructor(data) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
  }
}

// Modèle pour les images
class ImageModel extends MediaModel {
  constructor(data) {
    super(data)
    this.image = data.image // Spécifique aux images
  }
}

// Modèle pour les vidéos
class VideoModel extends MediaModel {
  constructor(data) {
    super(data)
    this.video = data.video // Spécifique aux vidéos
  }
}

// Factory pour créer le bon type de média
class MediaFactory {
  static createMedia(data) {
    if (data.image) {
      return new ImageModel(data)
    } else if (data.video) {
      return new VideoModel(data)
    } else {
      throw new Error("Type de média non pris en charge")
    }
  }
}

// Classe pour gérer les médias
export default class MediaModelManager {
  /**
   * Récupère tous les médias
   * @returns {Promise<Array>} Liste des médias
   */
  static async fetchMediasByPhotographerId(id) {
    const data = await getData("./src/data/photographers.json")
    const medias = data.media
      .filter((media) => media.photographerId === parseInt(id))
      .map((media) => MediaFactory.createMedia(media))

    return medias
  }
}
