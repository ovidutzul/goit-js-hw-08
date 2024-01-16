// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery");

const liImage = galleryItems.map( ({ original, preview, description }) =>
 `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
 </li>`).join("");

galleryContainer.insertAdjacentHTML("afterbegin", liImage);

const lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
lightbox.on("show.simpleLightbox");

galleryContainer.style.listStyle = "none";