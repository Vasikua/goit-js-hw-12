import { getImages } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let page = 1; 
let per_page;
let totalHits;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.add-content');


form.addEventListener('submit', (event) => {

    event.preventDefault();
    gallery.innerHTML = "";
    const QUERY = event.target.elements.serchfield.value.trim();
    if (QUERY.length > 0) {
        getImages(QUERY, page).then((data) => renderData(data));
        per_page = QUERY;
        form.reset();
    } else {
        loadMoreBtn.style.display = 'none';
    }
});


loadMoreBtn.addEventListener('click', (event) => {
        page++;
    const QUERY = per_page;
  
    getImages(QUERY, page).then((data) => {
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
        top: 4 * pictHeight, 
        behavior: 'smooth',
    })
}