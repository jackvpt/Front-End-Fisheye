/**
 * Create the media content (image or video)
 * This function generates the media content (image or video) based on the type of media.
 * @param {PhotographerModel} photographer - The photographer object
 * @param {MediaModel} media - The media object (image or video)
 * @returns {string} The HTML content to insert into the page
 */
const PhotographerMediaContent = (photographer, media) => {
  /** Generate the path to the media file (replace spaces with underscores in the photographer's name) */
  const directory = photographer.name.replace(/\s+/g, "_")
  const path = `/src/assets/images/sample_photos/${directory}/${
    media.image || media.video
  }`

  /** Set media according to type (image or video) */
  let mediaSource

  if (media.image) {
    mediaSource = document.createElement("img")
    mediaSource.src = path
    mediaSource.alt = ""
    mediaSource.role = "img"
  } else if (media.video) {
    mediaSource = document.createElement("video")
    mediaSource.controls = true
    mediaSource.ariaLabel = `Vidéo de ${photographer.name}`
    mediaSource.innerHTML = `<source src="${path}" type="video/mp4" />`

    const source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "video/mp4")
    const fallbackText = document.createTextNode(
      "Votre navigateur ne supporte pas ce type de vidéo."
    )

    mediaSource.appendChild(source)
    mediaSource.appendChild(fallbackText)
  } else {
    console.warn("Le média n'est pas valide: ", media)
  }

  return mediaSource
}

/**
 * Create the media caption
 * This function generates the caption for a media (title and "like" button).
 * @param {MediaModel} media - The media object
 * @returns {string} The HTML content for the caption
 */
const PhotographerMediaCaption = (media) => {
  /** Caption for image title, likes counter and like button */
  const caption = document.createElement("div")
  caption.classList.add("info")

  /** h2 : image title */
  const h2 = document.createElement("h2")
  h2.id = `media-title-${media.id}`
  h2.tabIndex = 0
  h2.innerText = media.title

  /** div : likes counter */
  const infoLikes = document.createElement("div")
  infoLikes.classList.add("info__likes")

  const likesCount = document.createElement("span")
  likesCount.id = `info__likes-count-#${media.id}`
  likesCount.classList.add("info__likes-count")
  likesCount.tabIndex = 0
  likesCount.innerText = media.likes

  /** button : like button */
  const likeButton = document.createElement("button")
  likeButton.classList.add("media-btn_like")
  likeButton.setAttribute("data-key", media.id)
  likeButton.setAttribute("aria-label", `J'aime ${media.title}`)
  likeButton.tabIndex = 0
  likeButton.innerHTML = `<i class="fas fa-heart"></i>`

  infoLikes.appendChild(likesCount)
  infoLikes.appendChild(likeButton)
  caption.appendChild(h2)
  caption.appendChild(infoLikes)

  return caption
}

export { PhotographerMediaContent, PhotographerMediaCaption }
