import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
import exercisesData from "../utils/exercises.json";

const SimilarExercises = ({ exerciseDetail }) => {
    const targetMuscleExercises = exercisesData.filter(
        (exercise) =>
            exercise.target === exerciseDetail.target &&
            exercise.id !== exerciseDetail.id
    );

    const bodyPartExercises = exercisesData.filter(
        (exercise) =>
            exercise.bodyPart === exerciseDetail.bodyPart &&
            exercise.id !== exerciseDetail.id
    );

    return (
        <Box
            sx={{
                mt: {
                    lg: "100px",
                    xs: "0px",
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        lg: "44px",
                        xs: "25px",
                    },
                    ml: "20px",
                    fontWeight: 700,
                    color: "#000",
                    mb: "33px",
                }}
            >
                Similar{" "}
                <Box
                    component="span"
                    sx={{
                        color: "#FF2625",
                        textTransform: "capitalize",
                    }}
                >
                    Target Muscle
                </Box>{" "}
                exercises
            </Typography>

            <Stack
                direction="row"
                sx={{
                    p: 2,
                    position: "relative",
                }}
            >
                {targetMuscleExercises.length !== 0 ? (
                    <HorizontalScrollBar data={targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>

            <Typography
                sx={{
                    fontSize: {
                        lg: "44px",
                        xs: "25px",
                    },
                    ml: "20px",
                    mt: {
                        lg: "100px",
                        xs: "60px",
                    },
                    fontWeight: 700,
                    color: "#000",
                    mb: "33px",
                }}
            >
                Similar{" "}
                <Box
                    component="span"
                    sx={{
                        color: "#FF2625",
                        textTransform: "capitalize",
                    }}
                >
                    Body Part
                </Box>{" "}
                exercises
            </Typography>

            <Stack
                direction="row"
                sx={{
                    p: 2,
                    position: "relative",
                }}
            >
                {bodyPartExercises.length !== 0 ? (
                    <HorizontalScrollBar data={bodyPartExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;