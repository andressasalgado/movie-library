import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';

function AvaliacaoEstrelas() {
  const [rating, setRating] = useState('');

  return (
    <form className='avaliacao'>
      {/* Referência: https://mui.com/material-ui/react-rating/ */}
      <Typography component="legend">Avaliação:</Typography>
      <Rating
        name="simple-controlled"
        rating={rating}
        onChange={(event, newValue) => {
            setRating(rating);
        }}
        />
    </form>
  );
}

export default AvaliacaoEstrelas;
