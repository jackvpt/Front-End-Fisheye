import getData from "/src/utils/fetchData.js"

/**
 * PHOTOGRAPHER MODEL
 * Represents a photographer and provides static methods to fetch data
 */
export default class PhotographerModel {
  /**
   * Create a Photographer instance
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.city = data.city
    this.country = data.country
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait

    /** Set directory as photographer's name, replacing spaces by _ */
    this.directory = data.name.replace(/\s+/g, "_")
  }

  /**
   * GET ALL PHOTOGRAPHERS
   * @returns List of photographers
   */
  static async fetchPhotographers() {
    const data = await getData("/src/data/photographers.json")
    return data.photographers.map(
      (photographer) => new PhotographerModel(photographer)
    )
  }

  /**
   * GET ONE PHOTOGRAPHER
   * @param {int} id
   * @returns Photographer based on ID
   */
  static async fetchPhotographerById(id) {
    if (!id || isNaN(id)) {
      throw new Error("Invalid photographer ID provided.")
    }

    const photographers = await this.fetchPhotographers()
    const photographerSelected = photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )
    if (!photographerSelected) {
      throw new Error(`Photographer with ID ${id} not found.`)
    }
    return photographerSelected
  }
}
