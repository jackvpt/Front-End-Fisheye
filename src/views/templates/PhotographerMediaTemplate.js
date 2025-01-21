/**
 * Create the media content (image or video)
 * @param {PhotographerModel} photographer
 * @param {MediaModel} media
 * @returns string
 */
const PhotographerMediaContent = (photographer, media) => {
  /** Set directory as photographer's name, replacing spaces by _ */
  const directory = photographer.name.replace(/\s+/g, "_")
  const path = `/src/assets/images/sample_photos/${directory}/${
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
      <h2 id="media-title-${media.id}" tabindex="0">${media.title}</h2>
      <div class="info__likes">
        <span id="info__likes-count-#${media.id}" class="info__likes-count" tabindex="0">${media.likes}</span>
        <button class="media-btn_like" data-key="${media.id}" aria-label="J'aime ${media.title}" tabindex="0">
          <i class="fas fa-heart"></i>
        </button>      
      </div>
    </div>
    `
}

export { PhotographerMediaContent, PhotographerMediaCaption }
