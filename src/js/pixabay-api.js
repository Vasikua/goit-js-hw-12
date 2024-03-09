import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const KEY = '42549902-185aac32f1223c9241b6c0bc7';
const BASE_URI = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export async function getImages(searchTerm, page, per_page) {
    loader.style.display = 'block';
    try {
        const response = await axios.get(BASE_URI, {
            params: {
                key: KEY,
                q: searchTerm,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: per_page,
            },
        });

        const data = response.data;
        if (data.hits.length === 0) {
                    iziToast.error({
                        position: 'topRight',
                        message: ("Sorry, there are no images matching your search query. Please try again!")
                    });
        }
                   
        loader.style.display = 'none';
        return data;
    } catch (error) {
    console.error('Error ', error.message);
        }
}

