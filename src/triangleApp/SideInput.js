import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  return (
      <input type="text" id={props.id}
             maxLength={10}
             className={css(styles.sideInput)}
      placeholder={`Provide ${props.label}...`}/>
  );
};
