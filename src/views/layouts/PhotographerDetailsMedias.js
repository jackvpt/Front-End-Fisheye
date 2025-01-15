const PhotographerDetailsMedias = (photographer) => {
  const picture = PhotographerPicture(photographer.portrait)

  const container = document.querySelector(".photograph-profile")
  container.innerHTML = `
        <section role="region" aria-labelledby="photographer-medias">
            <div id="photographer-medias" class="photographer-medias">
            
            </div>
        </section>
        `
}

export default PhotographerDetailsMedias
