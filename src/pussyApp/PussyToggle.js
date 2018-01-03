import React from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite';
import styles from './styles';

const PussyToggle = ({showPussy, onPussyToggle}) => {
  return (
    <div className={css(styles.pussyToggleBlock)}>
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
