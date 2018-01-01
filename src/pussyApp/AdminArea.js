import React from 'react';
import {Link} from 'react-router-dom';
import PussyToggle from './PussyToggle';
import NavBar from '../common/NavBar';


export default () => {
  return (
    <div>
      <NavBar/>
      <PussyToggle/>
      <Link to='/pussy/member'>Member</Link>
    </div>
  );
};

