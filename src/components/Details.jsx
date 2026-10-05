import { useEffect, useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import { getExerciseImage } from '../utils/helper';


const Details = ({ exerciseDetail }) => {

  const { bodyPart, imgGif, name, target } = exerciseDetail;

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const url = await getExerciseImage(imgGif);
      setImageUrl(url);
    };

    loadImage();
  }, [imgGif]);

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
  ];

  return (
    <Stack
      sx={{
        gap: '60px',
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
      }}
    >

      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
      />

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

        <Typography
          sx={{
            fontSize: { lg: '45px', xs: '25px' },
            fontWeight: '700',
            textTransform: "capitalize"
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{ fontSize: { lg: '20px', xs: '15px' } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>
            {name}
          </span>{' '}
          bup is one
          of the best <br />
          exercises to target your {target}. It will help you improve your{' '}
          <br />
          mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            sx={{
              gap: "24px",
              alignItems: 'center'
            }}
          >
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: '50px',
                  height: '50px'
                }}
              />
            </Button>

            <Typography
              sx={{
                fontSize: {
                  lg: '30px',
                  xs: '20px'
                },
                textTransform: "capitalize"
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}

      </Stack>
    </Stack>
  );
};

export default Details;