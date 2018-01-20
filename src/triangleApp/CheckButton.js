import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';

export default (props) => {
  return (
    <div className={css(styles.linkContainer)}>
      <div className={css(styles.linkBlock)} onClick={props.check}>
        <span className={css(styles.link)}>
          Check this out!
        </span>
      </div>
    </div>
  );
};
