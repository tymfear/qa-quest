import React from 'react';
import NavBar from '../common/NavBar';
import {css} from 'aphrodite';
import styles from './styles';
import Navigation from './Navigation';


const PussyApp = () => {
  return (
    <div>
      <NavBar/>
      <div className={css(styles.container)}>
        <h1>Show me a pussy!</h1>
        <hr/>
        <Navigation/>
      </div>
    </div>
  );
};

export default PussyApp;
