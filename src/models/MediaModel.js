import getData from "/src/utils/fetchData.js"

/** Base model */
class MediaModel {
  constructor(data, directory) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.directory=directory
    this.liked=false;
  }

  addLike(){
    if (!this.liked){
      this.likes+=1;
      this.liked=true;
    }
  }
}

/** Images model */
class ImageModel extends MediaModel {
  constructor(data, directory) {
    super(data, directory)
    this.image = data.image
  }
}

/** Video model */
class VideoModel extends MediaModel {
  constructor(data, directory) {
    super(data, directory)
    this.video = data.video
  }
}

/** Factory to create appropriate media type */
class MediaFactory {
  static createMedia(data, directory) {
    if (data.image) {
      return new ImageModel(data, directory)
    } else if (data.video) {
      return new VideoModel(data, directory)
    } else {
      throw new Error("Type de média non pris en charge")
    }
  }
}

export default class MediaModelManager {
  /**
   * Retrieve all medias
   * @returns {Promise<Array>} List of Media
   */
  static async fetchMediasByPhotographerId(id, directory) {
    const data = await getData("../data/photographers.json")
    const photographer = data.photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )
    const medias = data.media
      .filter((media) => media.photographerId === parseInt(id))
      .map((media) => MediaFactory.createMedia(media, directory))
    return medias
  }
}
