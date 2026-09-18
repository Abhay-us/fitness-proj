import { useState } from "react";
import { Box } from "@mui/material";
import "./home.css";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import exercisesData from "../utils/exercises.json";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState(exercisesData);

  return (
    <Box>
      <HeroBanner />

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;