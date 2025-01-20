/**
 * CREATE PHOTOGRAPHER PICTURE TEMPLATE
 * @param {string} imgSrc - The source URL for the image
 * @returns {string} - String containing the HTML for the photographer picture
 */
const PhotographerPicture = (imgSrc) => {
  return `
    <div class="container__photographer-picture">
      <img 
        src="/src/assets/images/portraits/${imgSrc}" 
        alt="" 
        role="img">
    </div>
  `
}

export default PhotographerPicture
