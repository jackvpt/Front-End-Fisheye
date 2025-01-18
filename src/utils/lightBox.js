/**
 * GET DOM ELEMENTS
 */
const lightBoxMainWrapper = document.getElementById("container__lightbox_modal")
const lightBoxModal = document.getElementById("lightbox-modal")
let mediaIndex
let allMedias

/**
 * CLOSE MODAL
 */
function closeLightboxModal() {
  /** Set ARIA properties */
  lightBoxMainWrapper.setAttribute("aria-hidden", "false")
  lightBoxMainWrapper.style.display = "none"
  lightBoxModal.setAttribute("aria-hidden", "true")
  lightBoxModal.style.display = "none"
}

/** OPEN MODAL */
function openLightbox(medias, selectedMedia) {
  allMedias = medias
  const lightBoxMainWrapper = document.getElementById(
    "container__lightbox_modal"
  )
  mediaIndex = medias.findIndex((media) => media.id === selectedMedia.id)
  const lightBoxModal = document.getElementById("lightbox-modal")
  lightBoxMainWrapper.style.display = "flex"
  lightBoxModal.style.display = "flex"

  const containerMedia = document.getElementById("container__lightbox-media")
  containerMedia.innerHTML = " "
  const path = `./src/assets/images/sample_photos/${selectedMedia.directory}/${
    selectedMedia.image || selectedMedia.video
  }`

  /** Set media according to type (image or video) */
  let mediaSource
  if (selectedMedia.image) {
    mediaSource = `<img 
      src="${path}"
      alt=""
      role="img"
      />`
  } else if (selectedMedia.video) {
    mediaSource = `<video
      controls
      <source src="${path}" type="video/mp4" />
      Votre navigateur ne supporte pas ce type de vidéo.
    </video>`
  } else {
    console.warn("Le média fournit n'est pas valide: ", selectedMedia)
  }

  const caption = `<p class="lightbox-caption_text">${selectedMedia.title}</p>`

  containerMedia.innerHTML = mediaSource + caption
}

function previousMedia() {
  let index = mediaIndex - 1
  if (index < 0) {
    index = allMedias.length - 1
  }
  openLightbox(allMedias, allMedias[index])
}

function nextMedia() {
  let index = mediaIndex + 1
  if (index >= allMedias.length) {
    index = 0
  }
  openLightbox(allMedias, allMedias[index])
}
