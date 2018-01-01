import React from 'react';
import {connect} from 'react-redux';

const PussyToggle = ({showPussy, onPussyToggle}) => {
  return (
    <div>
      <input type='checkbox' id='pussyToggle'
             checked={showPussy}
             onChange={onPussyToggle}/>
      <label htmlFor="pussyToggle">{showPussy ? 'Hide' : 'Show me'} a Pussy</label>
    </div>
  );
};

export default connect(
  state => {
    return {showPussy: state.pussyReducers.showPussy};
  },
  dispatch => ({
    onPussyToggle: (cb) => {
      dispatch({type: 'TOGGLE_PUSSY', state: cb.target.checked});
    }
  }),
)(PussyToggle);
