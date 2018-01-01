import React from 'react';

const PussyImage = () => {
  return (
    <img
      src={`http://thecatapi.com/api/images/get?format=src&type=gif&time=${Date.now()}`}
    alt='Pussy Gif'/>
  );
};

export default PussyImage;
