import { getImages } from "./js/pixabay-api";
import { renderData } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let page; 
let per_page;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.add-content');


form.addEventListener('submit', (event) => {

    event.preventDefault();
    gallery.innerHTML = "";
    const QUERY = event.target.elements.serchfield.value.trim();
    if (QUERY.length > 0) {
       
       getImages(QUERY).then((data) => renderData(data));
       page = 1;
       per_page = QUERY;
        form.reset();
    }
    else {
        loadMoreBtn.style.display = 'none';
    }
});


loadMoreBtn.addEventListener('click', (event) => {
    page++;
    const QUERY = per_page;
    getImages(QUERY).then((data) => renderData(data));
    endOFTheList()
    
 });

function endOFTheList() {
    if (data.totalHits <= array) {
        loadMoreBtn.style.display = 'none';
        iziToast.error({
            message: ("We're sorry, but you've reached the end of search results.")
        });

    }
}