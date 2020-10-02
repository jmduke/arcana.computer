const eligibleImages = document.querySelectorAll("img");
Array.from(eligibleImages).map((imageElement, i) => {
  const lightboxTemplate = `
		<div class="image-lightbox">
			<a id="lightbox-link-${i}" class="image-lightbox__link" href="#lightbox-${i}">
				<img src="${imageElement.src}" />
			</a>
			<a href="#lightbox-link-${i}">
				<div class="image-lightbox__overlay" id="lightbox-${i}">
					<div class="image-lightbox__content">
						<img src="${imageElement.src}">
					</div>
				</div>
			</a>
		</div>
	`;
  const lightbox = document
    .createRange()
    .createContextualFragment(lightboxTemplate);
  imageElement.replaceWith(lightbox);
});
