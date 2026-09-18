import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const exercisePerPage = 9;

    const filteredExercises =
        bodyPart === "all"
            ? exercises
            : exercises.filter(
                (exercise) =>
                    exercise.bodyPart.toLowerCase() ===
                    bodyPart.toLowerCase()
            );

    useEffect(() => {
        setCurrentPage(1);
    }, [bodyPart, exercises]);

    const indexOfLastExercises =
        currentPage * exercisePerPage;

    const indexOfFirstExercises =
        indexOfLastExercises - exercisePerPage;

    const currentExercises = filteredExercises.slice(
        indexOfFirstExercises,
        indexOfLastExercises
    );

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({
            top: 1800,
            behavior: "smooth"
        });
    };

    return (
        <Box
            id="exercises"
            sx={{
                mt: {
                    lg: "100px",
                    sm: "50px"
                },
                p: "20px"
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    mb: "46px"
                }}
            >
                Showing Results
            </Typography>

            <Stack
                direction="row"
                sx={{
                    gap: {
                        lg: "110px",
                        xs: "50px"
                    },
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {currentExercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                    />
                ))}
            </Stack>

            <Stack
                sx={{
                    mt: "100px",
                    alignItems: "center"
                }}
            >
                {filteredExercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        count={Math.ceil(
                            filteredExercises.length /
                            exercisePerPage
                        )}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;