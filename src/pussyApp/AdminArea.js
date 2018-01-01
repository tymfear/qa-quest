import React from 'react';
import {Link} from 'react-router-dom';
import PussyToggle from './PussyToggle';


export default () => {
  return (
    <div>
      <PussyToggle/>
      <Link to='/pussy/member'>Member</Link>
    </div>
  );
};

