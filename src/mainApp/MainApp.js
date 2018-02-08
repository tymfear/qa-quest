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
      <main className={css(MainAppStyles.container)}>
        <h1 className={css(MainAppStyles.heading)}>
          Choose your quest:
        </h1>
        <ul className={css(MainAppStyles.list)}>
          <li className={css(MainAppStyles.listItem)}>
            <Link to='/pussy/member' className={css(MainAppStyles.link)}>
              Show me kitty!
            </Link>
          </li>
          <li>
            <Link to='/triangle' className={css(MainAppStyles.link)}>
              Triangle Maze!
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
