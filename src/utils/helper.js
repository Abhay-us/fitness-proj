import axios from "axios";

const public_url_1 = "https://abhay-us.github.io/fintess-videos-1/";

const public_url_2 = "https://abhay-us.github.io/fintess-videos-2/";

export const getExerciseImage = async (imgGif) => {

    const imgName = imgGif.split("/videos/")[1];

    const url1 = public_url_1 + imgName;
    const url2 = public_url_2 + imgName;

    try {
        const res1 = await axios.get(url1);

        if (res1.status === 200) {
            return url1;
        }
    } catch (error) {
        console.log("GIF not found in repository 1", error);
    }

    try {
        const res2 = await axios.get(url2);

        if (res2.status === 200) {
            return url2;
        }
    } catch (error) {
        console.log("GIF not found in repository 2", error);
    }

    return null;
};