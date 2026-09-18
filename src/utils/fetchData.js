export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8943834fbcmshf086bd25684be37p1f0553jsn1ff858f62399',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);

    const data = await response.json();

    return data;
};