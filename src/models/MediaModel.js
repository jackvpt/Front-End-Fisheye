import getData from "/src/utils/fetchData.js"

/**
 * Base model for media.
 * Represents shared properties and behaviors for all media types.
 */
class MediaModel {
  constructor(data, directory) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
    this.directory = directory
    this.liked = false
  }

  /**
   * Increment the like count for the media.
   * Ensures that the media can only be liked once.
   */
  addLike() {
    if (!this.liked) {
      this.likes += 1
      this.liked = true
    }
  }
}

/**
 * Model for image media.
 * Adds an additional property specific to image files.
 */
class ImageModel extends MediaModel {
  constructor(data, directory) {
    super(data, directory)
    this.image = data.image
  }
}

/**
 * Model for video media.
 * Adds an additional property specific to video files.
 */
class VideoModel extends MediaModel {
  constructor(data, directory) {
    super(data, directory)
    this.video = data.video
  }
}

/**
 * Factory class to create media objects.
 * Decides the appropriate model to instantiate based on the media type.
 */
class MediaFactory {
  /**
   * Create a media object based on the data provided.
   * @param {Object} data - Media data (e.g., title, likes, image, video).
   * @param {string} directory - Directory where the media files are stored.
   * @returns {MediaModel} - An instance of ImageModel or VideoModel.
   * @throws {Error} - If the media type is unsupported.
   */
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

/**
 * Manager class for handling media-related operations.
 */
export default class MediaModelManager {
  /**
   * Retrieve all media objects associated with a specific photographer.
   * @param {number} id - The ID of the photographer.
   * @param {string} directory - Directory where the media files are stored.
   * @returns {Promise<Array>} - A promise that resolves to a list of media objects.
   */
  static async fetchMediasByPhotographerId(id, directory) {
    /** Fetch data from the photographers.json file */
    const data = await getData("/src/data/photographers.json")

    /** Find the photographer by ID */
    const photographer = data.photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )

    /** Filter media associated with the photographer and create media objects */
    const medias = data.media
      .filter((media) => media.photographerId === parseInt(id))
      .map((media) => MediaFactory.createMedia(media, directory))
    return medias
  }
}
