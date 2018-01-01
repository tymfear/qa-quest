import React from 'react';
import {Link} from 'react-router-dom';


export default () => {
  return (
    <div>
      <h1>Select a quest:</h1>
      <ul>
        <li>
          <Link to='/pussy/member'>Show me a pussy!</Link>
        </li>
      </ul>
    </div>
  );
}
