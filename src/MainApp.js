import React from 'react';
import {Link} from 'react-router-dom';
import {css} from 'aphrodite';
import MainAppStyles from './MainAppStyles';


export default () => {
  return (
    <div>
      <header className={css(MainAppStyles.header)}>
        Welcome to QA Quest!
      </header>
      <div className={css(MainAppStyles.container)}>
        <h1 className={css(MainAppStyles.heading)}>
          Select a quest:
        </h1>
        <ul className={css(MainAppStyles.list)}>
          <Link to='/pussy/member' className={css(MainAppStyles.link)}>
            <li className={css(MainAppStyles.listItem)}>
              Show me a pussy!
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
