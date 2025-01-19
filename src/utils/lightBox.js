/**
 * GET DOM ELEMENTS
 */
const lightBoxMainWrapper = document.getElementById("container__lightbox_modal")
const lightBoxModal = document.getElementById("lightbox-modal")
const containerMedia = document.getElementById("container__lightbox-media")

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

  /** Remove event listener for keydown */
  document.removeEventListener("keydown", handleKeyboardNavigation)
}

/**
 * OPEN MODAL
 * @param {[MediaModel]} medias 
 * @param {MediaModel} selectedMedia 
 */
function openLightbox(medias, selectedMedia) {
  allMedias = medias
  const lightBoxMainWrapper = document.getElementById(
    "container__lightbox_modal"
  )
  mediaIndex = medias.findIndex((media) => media.id === selectedMedia.id)
  const lightBoxModal = document.getElementById("lightbox-modal")
  lightBoxMainWrapper.style.display = "flex"
  lightBoxModal.style.display = "flex"

  containerMedia.innerHTML = " "
  const path = `../assets/images/sample_photos/${selectedMedia.directory}/${
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

  containerMedia.innerHTML = `${mediaSource} ${caption}`

  /** Add event listener for keyboard navigation */
  document.addEventListener("keydown", handleKeyboardNavigation)
}

/** PREVIOUS MEDIA */
function previousMedia() {
  let index = mediaIndex - 1
  if (index < 0) {
    index = allMedias.length - 1
  }
  openLightbox(allMedias, allMedias[index])
}

/**
 * NEXT MEDIA
 */
function nextMedia() {
  let index = mediaIndex + 1
  if (index >= allMedias.length) {
    index = 0
  }
  openLightbox(allMedias, allMedias[index])
}

/**
 * TOGGLE VIDEO PLAYBACK
 */
function toggleVideoPlayback() {
  const videoElement = containerMedia.querySelector("video");

  if (videoElement) {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}

/**
 * HANDLE KEYBOARD NAVIGATION
 */
function handleKeyboardNavigation(event) {
  switch (event.key) {
    case "Escape": // Close modal
      closeLightboxModal()
      break
    case "ArrowLeft": // Previous media
      previousMedia()
      break
    case "ArrowRight": // Next media
      nextMedia()
      break
    case " ": // Play/Pause for video media
    case "k": // Play/Pause for video media
      toggleVideoPlayback()
      event.preventDefault()
      break
    default:
      break
  }
}
