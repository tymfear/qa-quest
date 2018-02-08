import React from 'react';
import NavBar from '../common/NavBar';
import {css} from 'aphrodite';
import styles from './styles';
import Navigation from './Navigation';
import Credits from '../common/Credits';


const PussyApp = () => {
  return (
    <div>
      <NavBar
        credits={
          <Credits fullName={'Taras Voloshenko'}
                   profileLink={'https://www.linkedin.com/in/taras-voloshenko-12a42912'}/>
        }
      />
      <div className={css(styles.container)}>
        <h1 className={css(styles.mainHeading)}>Show me kitty!</h1>
        <hr/>
        <Navigation/>
      </div>
    </div>
  );
};

export default PussyApp;
