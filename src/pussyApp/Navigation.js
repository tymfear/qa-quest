import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './styles';
import {css} from 'aphrodite';


const Navigation = ({pathname}) => {
  return (
    <div className={css(styles.navContainer)}>
      <div className={css(styles.navItem)}>
        <Link to={pathname === '/pussy/admin' ? '/pussy/member' : '/pussy/admin'}
              className={css(styles.link)}>
          Go to {pathname === '/pussy/admin' ? 'Member' : 'Admin'} Area
        </Link>
      </div>
    </div>
  );
};

export default connect(
  state => {
    return {pathname: state.router.location.pathname};
  }
)(Navigation);
