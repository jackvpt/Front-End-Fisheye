const photographerPicture = (imgSrc) => {
  const img = document.createElement("img")
  img.setAttribute("src", imgSrc)
  img.setAttribute("alt", "")
  img.setAttribute("role", "img")
  return img
}

export default photographerPicture
