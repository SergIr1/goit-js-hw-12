import axios from 'axios';

export const fetchPhotosByQuery = searchQuery => {

    const axiosParams = {
        params: {
        key: "48343538-15a5755b500219024f825f792",
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        }
    }
    // const searchParams = new URLSearchParams({
    //     key: "48343538-15a5755b500219024f825f792",
    //     q: searchQuery,
    //     image_type: 'photo',
    //     orientation: 'horizontal',
    //     safesearch: true,
    // });

    return axios.get(`https://pixabay.com/api/`, axiosParams);

    // return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(response.status);
    //         }
    //         return response.json();
    //     });
}