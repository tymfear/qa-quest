import React from 'react';
import LinkedinProfileLink from '../common/LinkedinProfileLink';

export default () => {
  return (
    <div>
      <div>
        <h4>Quest Author:</h4>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
          <h1>Taras Voloshenko</h1>
          <div>
            <LinkedinProfileLink profileLink={'https://www.linkedin.com/in/taras-voloshenko-12a42912/'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
