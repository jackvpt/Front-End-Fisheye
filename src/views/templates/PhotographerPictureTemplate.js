/**
 * CREATE PHOTOGRAPHER PICTURE TEMPLATE
 * @param {string} imgSrc - The source URL for the image
 * @returns {string} - String containing the HTML for the photographer picture
 */
const PhotographerPicture = (imgSrc) => {
  const picture = document.createElement("div")
  picture.classList.add("container__photographer-picture")
  
  /** img : photographer portrait */
  const img = document.createElement("img")
  img.src = `/src/assets/images/portraits/${imgSrc}`
  img.alt = ""
  img.role = "img"

  picture.appendChild(img)

  return picture
}

export default PhotographerPicture
