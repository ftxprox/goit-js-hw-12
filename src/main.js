// main.js
import { addLoader, clearGallery, hideLoading, renderGallery, showInfo } from './js/render-functions.js';
import { getGallery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('[name="searchQuery"]');
const gallery = document.querySelector('.gallery');


form.addEventListener("submit", event => {
event.preventDefault(); 

const query = input.value.trim(); 
if (!query) { 
    iziToast.error({
    title: `Error`,
    message: `Please enter a search query.`,
    position: 'topRight',
    });
    return;
}

    clearGallery(); 
    addLoader(gallery); 

    getGallery(query)
    .then(data => {
    hideLoading(); 
    if (!data || data.hits.length === 0) {
        showInfo(`Sorry, there are no images matching your search query. Please try again!`);
        return;
}
    renderGallery(data.hits); 
})
    .catch(error => {
    console.error(`Error fetching images:`, error); 
    iziToast.error({
        title: `Error`,
        message: `Error: ${error.message}`, 
        position: 'topRight',
});
})
    .finally(() => {
    hideLoading(); 
    });
});