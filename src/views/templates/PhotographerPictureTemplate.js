const PhotographerPicture = (imgSrc) => {
  const picture = 
 `<div class="container__photographer-picture">
          <img 
            src="../../src/assets/images/portraits/${imgSrc}" 
            alt="" 
            role="img">
        </div>`
    return picture
}

export default PhotographerPicture
