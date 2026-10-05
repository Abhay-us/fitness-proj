import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import exercisesData from "../utils/exercises.json";
import { fetchData, youtubeOptions } from "../utils/fetchData";


const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await Promise.resolve(
                exercisesData.find((exercise) => exercise.id === id)
            );

            setExerciseDetail(exerciseDetailData || {}); 4
            if (exerciseDetailData?.name) {
                const exerciseVideosData = await fetchData(
                    `${youtubeSearchUrl}/search?query=${encodeURIComponent(
                        exerciseDetailData.name
                    )} exercise`,
                    youtubeOptions
                );

                setExerciseVideos(exerciseVideosData?.contents || []);
            }
        };

        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Details exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                exerciseDetail={exerciseDetail}
            />

        </Box>
    );
};

export default ExerciseDetails;