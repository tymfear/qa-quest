import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';
import {connect} from 'react-redux';
import {CLEAR_DATA} from './reducers/TriangleReducers';

const CheckButton = ({reset}) => {
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
  dispatch => {
    return ({
      reset: () => {
        document.getElementById('sideA').value = '';
        document.getElementById('sideB').value = '';
        document.getElementById('sideC').value = '';

        dispatch({
          type: CLEAR_DATA,
        });
      },
    });
  },
)(CheckButton);
