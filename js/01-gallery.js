import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const htmlForGallery = galleryItems
  .map(
    photo =>
      `<div class="gallery__item">
         <a class="gallery__link" href="${photo.original}" target="_self">
            <img
               class="gallery__image"
               src="${photo.preview}"
               data-source="${photo.original}"
               alt="${photo.description}"
            />
         </a>
      </div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', htmlForGallery);

galleryEl.addEventListener('click', evt => {
   evt.preventDefault();
   
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
});

