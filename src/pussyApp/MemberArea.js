import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PussyToggle from './PussyToggle';
import PussyImage from './PussyImage';


const MemberArea = ({showPussy}) => {
  return (
    <div>
      <PussyToggle/>
      {showPussy && <PussyImage/>}
      <Link to='/pussy/admin'>Admin</Link>
    </div>
  );
};

export default connect(
  state => {
    return {showPussy: state.pussyReducers.showPussy};
  }
)(MemberArea);
