import React from 'react';
import NavBar from '../common/NavBar';
import {css} from 'aphrodite';
import styles from './styles';
import Navigation from './Navigation';
import Credits from './Credits';


const PussyApp = () => {
  return (
    <div>
      <NavBar
        credits={<Credits/>}
      />
      <div className={css(styles.container)}>
        <h1 className={css(styles.mainHeading)}>Show me a pussy!</h1>
        <hr/>
        <Navigation/>
      </div>
    </div>
  );
};

export default PussyApp;
