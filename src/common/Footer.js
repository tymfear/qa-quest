import React from 'react';
import FooterStyles from './FooterStyles';
import {css} from 'aphrodite';

const PussyImage = (props) => {
  return (
    <footer className={css(FooterStyles.footer)}>
      {props.children}
    </footer>
  );
};

export default PussyImage;
