import React from 'react';
import {Link} from 'react-router-dom';
import NavBarStyles from './NavBarStyles';
import {css} from 'aphrodite';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {show} from 'redux-modal';


const NavBar = ({props, show}) => {
  this.showModal = () => show('credits', {
    title: 'Credits',
    message: props.credits,
  });

  return (
    <div className={css(NavBarStyles.container)}>
      <Link to='/' className={css(NavBarStyles.link)}>{'< Choose Quest'}</Link>
      <a className={css(NavBarStyles.link)} onClick={this.showModal}>
        {'Credits'}
      </a>
    </div>
  );
};

export default connect(
  (state, props) => {
    return {state, props};
  },
  dispatch => bindActionCreators({show}, dispatch),
)(NavBar);
