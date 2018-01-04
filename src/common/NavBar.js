import React from 'react';
import {Link} from 'react-router-dom';
import NavBarStyles from './NavBarStyles';
import {css} from 'aphrodite';


const NavBar = () => {
  return (
    <div className={css(NavBarStyles.container)}>
      <Link to='/' className={css(NavBarStyles.link)}>{'< Choose Quest'}</Link>
      <Link to='#' className={css(NavBarStyles.link)}>{'Credits'}</Link>
    </div>
  );
};

export default NavBar;
