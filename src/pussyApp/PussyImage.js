import React from 'react';
import styles from './styles';
import {css} from 'aphrodite';

const PussyImage = () => {
  return (
    <div className={css(styles.pussyImage)}>

      <img
        src={`http://thecatapi.com/api/images/get?format=src&type=gif&time=${Date.now()}`}
        alt='Pussy Gif'/>
    </div>
  );
};

export default PussyImage;
