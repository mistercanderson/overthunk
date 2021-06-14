import React from 'react';
import PropTypes from 'prop-types';
import './Emoji.css';

export default function Emoji({ emoji }) {
  return (
    <div className='emoji'>
      <div>{emoji}</div>
      <div className='emoji-shadow'></div>
    </div>
  );
}

Emoji.propTypes = {
  emoji: PropTypes.string,
};
