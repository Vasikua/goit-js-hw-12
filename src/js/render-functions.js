
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.add-content');
const lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: 'bottom',
    captionDelay: '250',
    captionsData: 'alt',
    close: true,
    animationSpeed: 200,
    preloading: true,
    loop:	true,
    scaleImageToRatio: true,
    scrollZoomFactor: 0.9,
    overlay: true,
    overlayOpacity: 1.0,
    spinner:	true
});
export function renderData(data) {

    
       const img = data.hits;
       const arrayOfImg = img.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `<li class="list-link">
                            
                                <a href="${largeImageURL}">
                                <img class="gallery-links" src="${webformatURL}" alt="${tags}"></a>
                            
                                <div class="parameters">
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">likes:</li>
                                        <li class="parameters-list-item">${likes}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">views:</li>
                                        <li class="parameters-list-item">${views}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">comments:</li>
                                        <li class="parameters-list-item">${comments}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">downloads:</li>
                                        <li class="parameters-list-item">${downloads}</li>
                                    </ul>
                            </div>
                            </li>`
       }).join('');
        
    gallery.insertAdjacentHTML('beforeend', arrayOfImg);
    if (arrayOfImg.length > 0) {
        loadMoreBtn.style.display = 'block';
    }
    
    lightbox.refresh();
      
};
