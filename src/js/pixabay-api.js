import axios from 'axios';

export const fetchPhotosByQuery = (searchQuery, currentPage) => {

    const axiosParams = {
        params: {
            key: "48343538-15a5755b500219024f825f792",
            q: searchQuery,
            page: currentPage,
            per_page: 15,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    }

    return axios.get(`https://pixabay.com/api/`, axiosParams);
}