import React from 'react';
import PussyToggle from './PussyToggle';
import styles from './styles';
import {css} from 'aphrodite';


export default () => {
  return (
    <div className={css(styles.container)}>
      <PussyToggle/>
    </div>
  );
};

