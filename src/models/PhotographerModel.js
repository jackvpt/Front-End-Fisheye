import getData from "../utils/fetchData.js"

export default class PhotographerModel {
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
   * Get all photographers
   * @returns List of photographers
   */
  static async fetchPhotographers() {
    const data = await getData("/src/data/photographers.json")
    return data.photographers.map(
      (photographer) => new PhotographerModel(photographer)
    )
  }

  /**
   * Get one photographer
   * @param {int} id
   * @returns Photographer based on ID
   */
  static async fetchPhotographerById(id) {
    const photographers =await this.fetchPhotographers()
    const photographerSelected = photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )
    if (!photographerSelected) {
      throw new Error(`Photographer with ID ${id} not found.`)
    }
    return photographerSelected
  }
}
