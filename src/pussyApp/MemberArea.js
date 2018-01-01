import React from 'react';
import {connect} from 'react-redux';
import PussyToggle from './PussyToggle';
import PussyImage from './PussyImage';
import styles from './styles';
import {css} from 'aphrodite';


const MemberArea = ({showPussy}) => {
  return (
    <div className={css(styles.container)}>
      <PussyToggle/>
      {showPussy && <PussyImage/>}
    </div>
  );
};

export default connect(
  state => {
    return {showPussy: state.pussyReducers.showPussy};
  }
)(MemberArea);
