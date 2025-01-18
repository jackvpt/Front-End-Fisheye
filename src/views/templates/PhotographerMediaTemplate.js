/**
 * Create the media content (image or video)
 * @param {PhotographerModel} photographer
 * @param {MediaModel} media
 * @returns string
 */
const PhotographerMediaContent = (photographer, media) => {
  /** Set directory as photographer's name, replacing spaces by _ */
  const directory = photographer.name.replace(/\s+/g, "_")
  const path = `./src/assets/images/sample_photos/${directory}/${
    media.image || media.video
  }`

  /** Set media according to type (image or video) */
  let mediaSource
  if (media.image) {
    mediaSource = `<img 
      src="${path}"
      alt=""
      role="img"
      />`
  } else if (media.video) {
    mediaSource = `<video
      controls
      aria-label="Vidéo de ${photographer.name}">
      <source src="${path}" type="video/mp4" />
      Votre navigateur ne supporte pas ce type de vidéo.
    </video>`
  } else {
    console.warn("Le média n'est pas valide: ", media)
  }

  return mediaSource
}

/**
 * Create the media caption
 * @param {MediaModel} media
 * @returns string
 */
const PhotographerMediaCaption = (media) => {
  return `
    <div class="info">
      <h2 id="media-title-${media.id}">${media.title}</h2>
      <div class="info__likes">
        <span class="info__likes-count">${media.likes}</span>
        <i class="fas fa-heart" role="button" aria-label="J'aime ${media.title}"></i>
      </div>
    </div>`
}

export { PhotographerMediaContent, PhotographerMediaCaption }
