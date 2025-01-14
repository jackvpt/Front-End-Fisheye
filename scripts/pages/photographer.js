import { getData } from "../utils/fetchData.js"

/**
 * Display photographer profile
 * @param {*} photographer
 */
function displayData(photographer) {
    const photographerProfile = document.querySelector(".photograph-profile")
    
  // Header
  const headerModel = photographerProfileHeaderTemplate(photographer)
  const userCardDOM = headerModel.getUserCardDOM()
  photographerProfile.appendChild(userCardDOM)


}

async function init() {
  // Retrieve photographers data
  const data = await getData("./data/photographers.json")
  const photographers = data.photographers
  const params = new URL(document.location).searchParams
  const id = params.get("id")
  const photographer = photographers.find(
    (photographer) => photographer.id === parseInt(id)
  )
  displayData(photographer)
}

init()
