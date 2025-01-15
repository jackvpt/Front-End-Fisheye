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
  }

  /**
   * Get all photographers
   * @returns List of photographers
   */
  static async fetchPhotographers() {
    const data = await getData("./src/data/photographers.json")
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
    const data = await getData("./src/data/photographers.json")
    const photographer = data.photographers.find(
      (photographer) => photographer.id === parseInt(id)
    )
    if (!photographer) {
      throw new Error(`Photographer with ID ${id} not found.`)
    }
    return new PhotographerModel(photographer)
  }
}
