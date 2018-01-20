import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';
import CheckButton from './CheckButton';
import ClearButton from './ClearButton';

export default () => {
  return (
    <div className={css(styles.linkContainer)}>
      <ClearButton/>
      <CheckButton/>
    </div>
  );
};
