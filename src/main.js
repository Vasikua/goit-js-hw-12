import { getImages } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let page;
let searchTerm;
const per_page = 15;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.add-content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    gallery.innerHTML = "";
    searchTerm = event.target.elements.serchfield.value.trim();
    
    if (searchTerm.length > 0) {
        getImages(searchTerm, page, per_page).then((data) => renderData(data));
        page = 1;
        form.reset();
    } else {
        loadMoreBtn.style.display = 'none';
    }
});

loadMoreBtn.addEventListener('click', () => {
    page++;
     
    getImages(searchTerm, page, per_page).then((data) => {
        renderData(data); 
        smoothScrolling();
        if (data.hits.length < 15) {
            loadMoreBtn.style.display = 'none';
            iziToast.error({
                    position: 'topRight',
                    message: ("We're sorry, but you've reached the end of search results.")
                });
            }
        });
    
});

function smoothScrolling() {
    const pictHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({
        top: 2 * pictHeight, 
        behavior: 'smooth',
    })
}