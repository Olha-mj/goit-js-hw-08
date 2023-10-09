import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = ({ preview, description, original }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;

const galleryMarkup = galleryItems.map(createGalleryMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', 
{sourceAttr: 'href', 
captions: true, 
captionsData: 'alt', 
captionDelay: 250});
