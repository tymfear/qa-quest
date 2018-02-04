import React from 'react';
import {css} from 'aphrodite';
import LinkedinProfileLink from '../common/LinkedinProfileLink';
import CreditsStyles from './CreditsStyles';

export default ({fullName, profileLink}) => {
  return (
    <div>
      <div>
        <h4>Quest Author:</h4>
        <div className={css(CreditsStyles.author)}>
          <h1>{fullName}</h1>
          <div>
            <LinkedinProfileLink profileLink={profileLink}/>
          </div>
        </div>
      </div>
    </div>
  );
}
