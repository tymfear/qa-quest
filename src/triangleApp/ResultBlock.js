import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  return (
    <div className={css(props.isSuccess ? styles.successResult : styles.errorResult)}>
      {props.message}
    </div>
  );
};
