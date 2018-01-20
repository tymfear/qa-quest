import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  return (
    <div className={css(props.isSuccess ? 'success' : 'error')}>
      {props.message}
    </div>
  );
};
