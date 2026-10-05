import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { getExerciseImage } from '../utils/helper';
import { useEffect, useState } from 'react';

const ExerciseCard = ({ exercise }) => {

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const url = await getExerciseImage(exercise.imgGif);
            setImageUrl(url);
        };

        loadImage();
    }, [exercise.imgGif]);

    return (
        <Link
            className="exercise-card"
            to={`/exercise/${exercise.id}`}
        >
            <img
                src={imageUrl}
                alt={exercise.name}
                loading="lazy"
                style={{
                    marginTop: '50px',
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                }}

            />

            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#FFA9A9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>

                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#FCC757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>

            <Typography
                sx={{
                    ml: '21px',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: {
                        lg: '16px',
                        xs: '20px'
                    },
                    mt: '11px',
                    pb: '10px',
                    textTransform: 'capitalize'
                }}
            >
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;