import React from 'react';
import {css} from 'aphrodite';
import styles from './styles';
import {connect} from 'react-redux';
import {CALCULATE_TRIANGLE} from './reducers/TriangleReducers';

const CheckButton = ({checkTriangle}) => {
  return (
    <div className={css(styles.linkBlock)} onClick={checkTriangle}>
        <span className={css(styles.link)}>
          Check this out!
        </span>
    </div>
  );
};

export default connect(
  state => state,
  dispatch => ({
    checkTriangle: () => {
      dispatch({
        type: CALCULATE_TRIANGLE,
        sideA: document.getElementById('sideA').value,
        sideB: document.getElementById('sideB').value,
        sideC: document.getElementById('sideC').value,
      });
    },
  }),
)(CheckButton);
