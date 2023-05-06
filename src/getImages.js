import axios from "axios";

export async function getImages(query, pageNumber, resultsAmount) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "36111500-2a8534ecb674080aefbef4ca6";

    const resp = await axios.get(`${BASE_URL}`, {
        params: {
            key: `${API_KEY}`,
            q: `${query}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page: `${pageNumber}`,
            per_page: `${resultsAmount}`
        }
    });
    return resp.data;
}