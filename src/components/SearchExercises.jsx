import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import exercisesData from "../utils/exercises.json";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const uniqueBodyParts = [
            ...new Set(exercisesData.map((exercise) => exercise.bodyPart))
        ];

        setBodyParts(["all", ...uniqueBodyParts]);
    }, []);

    const handleSearch = () => {    
        if (!search.trim()) {
            return;
        }

        const searchTerm = search.toLowerCase().trim();

        const searchedExercises = exercisesData.filter((exercise) => {
            return (
                exercise.name.toLowerCase().includes(searchTerm) ||
                exercise.bodyPart.toLowerCase().includes(searchTerm) ||
                exercise.target.toLowerCase().includes(searchTerm)
            );
        });

        setExercises(searchedExercises);

        window.scrollTo({
            top: 1800,
            left: 100,
            behavior: "smooth"
        });

        setSearch("");
    };

    return (
        <Stack
            sx={{
                alignItems: "center",
                mt: "37px",
                justifyContent: "center",
                p: "20px",
                textAlign: "center"
            }}
        >
            <Typography
                fontWeight={600}
                sx={{
                    fontSize: {
                        lg: "44px",
                        xs: "30px"
                    }
                }}
                mb="50px"
            >
                Awesome Exercise You <br />
                Should Know
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    mb: "72px"
                }}
            >
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px"
                        },
                        width: {
                            lg: "1170px",
                            xs: "350px"
                        },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                        height: "76px"
                    }}
                    value={search}
                    placeholder="Search Exercises"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    type="text"
                />

                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: {
                            lg: "173px",
                            xs: "80px"
                        },
                        height: "56px",
                        position: "absolute",
                        right: "0px",
                        fontSize: {
                            lg: "20px",
                            xs: "14px"
                        }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    p: "20px"
                }}
            >
                <HorizontalScrollBar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    bodyParts
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;