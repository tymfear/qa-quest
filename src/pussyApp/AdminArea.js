import React from 'react';
import PussyToggle from './PussyToggle';
import styles from './styles';
import {css} from 'aphrodite';


export default () => {
  return (
    <div className={css(styles.container)}>
      <h2>Admin Area</h2>
      <PussyToggle/>
    </div>
  );
};

