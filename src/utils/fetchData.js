import axios from "axios";
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8943834fbcmshf086bd25684be37p1f0553jsn1ff858f62399',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8943834fbcmshf086bd25684be37p1f0553jsn1ff858f62399',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    try {
        const response = await axios.request({
            url,
            ...options,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};