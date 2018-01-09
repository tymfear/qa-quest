import React from 'react';
import {Link} from 'react-router-dom';
import {css} from 'aphrodite';
import MainAppStyles from './MainAppStyles';
import Footer from './common/Footer'


export default () => {
  return (
    <div className={css(MainAppStyles.wrapper)}>
      <header className={css(MainAppStyles.header)}>
        Welcome to QA Quest!
      </header>
      <main className={css(MainAppStyles.container)}>
        <h1 className={css(MainAppStyles.heading)}>
          Choose your quest:
        </h1>
        <ul className={css(MainAppStyles.list)}>
          <Link to='/pussy/member' className={css(MainAppStyles.link)}>
            <li className={css(MainAppStyles.listItem)}>
              Show me a pussy!
            </li>
          </Link>
        </ul>
      </main>
      <Footer>
        © {(new Date()).getFullYear()}
      </Footer>
    </div>
  );
}
