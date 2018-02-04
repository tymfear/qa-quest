import React from 'react';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';

export default ({profileLink}) => {
  return (
    <a href={profileLink} target={'_blank'} style={{margin: 5}}>
      <FaLinkedin size={54} color={'#0077B5'}/>
    </a>
  );
}
