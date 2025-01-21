import getData from "/src/utils/fetchData.js"

/**
 * PHOTOGRAPHER MODEL
 * Represents a photographer and provides static methods to fetch data
 */
export default class PhotographerModel {
  /**
   * Create a Photographer instance.
   * @param {Object} data - The data object containing photographer details.
   */
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.city = data.city
    this.country = data.country
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait

    /**
     * Directory path for the photographer's assets,
     * created by replacing spaces in the name with underscores.
     */
    this.directory = data.name.replace(/\s+/g, "_")
  }

  /**
   * GET ALL PHOTOGRAPHERS
   * Fetches the list of all photographers from the JSON file.
   * @returns {Promise<PhotographerModel[]>} A promise that resolves to a list of PhotographerModel instances.
   */
  static async fetchPhotographers() {
    const data = await getData("/src/data/photographers.json")
    return data.photographers.map(
      (photographer) => new PhotographerModel(photographer)
    )
  }

  /**
   * GET ONE PHOTOGRAPHER
   * Fetches a single photographer based on the provided ID.
   * @param {number} id - The ID of the photographer to retrieve.
   * @returns {Promise<PhotographerModel>} A promise that resolves to the PhotographerModel instance.
   * @throws {Error} If the ID is invalid or the photographer is not found.
   */
  static async fetchPhotographerById(id) {
    /** Validate the provided ID */
    if (!id || isNaN(id)) {
      throw new Error("Invalid photographer ID provided.")
    }

    /** Fetch all photographers */
    const photographers = await this.fetchPhotographers()

    /** Find the photographer with the matching ID */
    const photographerSelected = photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )

    /** Throw an error if no photographer is found */
    if (!photographerSelected) {
      throw new Error(`Photographer with ID ${id} not found.`)
    }
    return photographerSelected
  }
}
