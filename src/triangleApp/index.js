import React from 'react';
import NavBar from '../common/NavBar';
import {css} from 'aphrodite';
import styles from './styles';
import SideInput from './SideInput';
import {connect} from 'react-redux';
import Result from './Result';
import CheckButton from './CheckButton';

const TriangleApp = ({triangleType, checkTriangle}) => {
  return (
    <div>
      <NavBar/>
      <div className={css(styles.container)}>
        <div className={css(styles.inputBlock)}>
          <SideInput id='sideA' label='Side A'/>
          <SideInput id='sideB' label='Side B'/>
          <SideInput id='sideC' label='Side C'/>
        </div>
        <CheckButton check={checkTriangle}/>

        {
          triangleType && <Result isSuccess={triangleType.success} message={triangleType.message}/>
        }
      </div>
    </div>
  );
};

export default connect(
  state => {
    return {triangleType: state.triangleReducers.checkTriangle.triangleType};
  },
  dispatch => ({
    checkTriangle: () => {
      dispatch({
        type: 'CALCULATE_TRIANGLE',
        sideA: document.getElementById('sideA').value,
        sideB: document.getElementById('sideB').value,
        sideC: document.getElementById('sideC').value,
      });
    },
  }),
)(TriangleApp);
