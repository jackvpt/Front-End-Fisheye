import { getData } from "../utils/fetchData.js"

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section")

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Retrieve photographers data
  const data = await getData("./data/photographers.json")
  const photographers = data.photographers

  displayData(photographers)
}

init()
