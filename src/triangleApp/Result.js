import React from 'react';

export default (props) => {
  return (
    <div className={props.isSuccess ? 'success' : 'error'}>
      {props.message}
    </div>
  );
};
