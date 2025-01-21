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
 * This function generates the caption for a media (title and "like" button).
 * @param {MediaModel} media - The media object
 * @returns {string} The HTML content for the caption
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
