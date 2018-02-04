import React from 'react';
import NavBar from '../common/NavBar';
import {css} from 'aphrodite';
import styles from './styles';
import SideInput from './SideInput';
import {connect} from 'react-redux';
import Result from './ResultBlock';
import ButtonContainer from './ButtonContainer';
import Credits from '../common/Credits';

const TriangleApp = ({triangleType}) => {
  return (
    <div>
      <NavBar credits={
        <Credits fullName={'Tymur Daudov'}
                 profileLink={'https://www.linkedin.com/in/tymurdaudov'}/>
      }/>

      <div className={css(styles.container)}>
        <div className={css(styles.inputBlock)}>
          <SideInput id='sideA' label='Side A'/>
          <SideInput id='sideB' label='Side B'/>
          <SideInput id='sideC' label='Side C'/>
        </div>
        <ButtonContainer/>
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
)(TriangleApp);
