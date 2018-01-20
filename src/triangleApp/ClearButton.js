import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';
import {connect} from 'react-redux';

const CheckButton = ({state, reset}) => {
  return (
    <div className={css(styles.clearLinkBlock)} onClick={reset}>
        <span className={css(styles.clearLink)}>
          Let's do it again!
        </span>
    </div>
  );
};

export default connect(
  state => state,
  dispatch => ({
    reset: () => {
      document.getElementById('sideA').value = '';
      document.getElementById('sideB').value = '';
      document.getElementById('sideC').value = '';

      dispatch({
        type: 'CLEAR_DATA',
      });
    },
  }),
)(CheckButton);