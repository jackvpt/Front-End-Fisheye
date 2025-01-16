const PhotographerMedia = (photographer, media) => {
  const directory = photographer.name.replace(/\s+/g, "_")
  const path = `./src/assets/images/sample_photos/${directory}/${
    media.image || media.video
  }`

  let mediaSource
  if (media.image) {
    mediaSource = `<img src="${path}" alt="${media.alt}" />`
  } else if (media.video) {
    mediaSource = `<video controls class="mediaCard__video">
                     <source src="${path}" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>`
  } else {
    console.warn("No valid media provided:", media)
  }
  return `
  <article class="mediaCard">
  ${mediaSource}
    <div class="info">
      <h2 >${media.title}</h2>
      <div class="info__likes">
        <span class="info__likes-count">${media.likes}</span>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </article>
  `
}

export default PhotographerMedia
