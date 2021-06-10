import React from 'react';
import './Emoji.css';

export default function Emoji({ emoji }) {
  return (
    <div className='emoji'>
      <div >{emoji}</div>
      <div className='emoji-shadow'></div>
    </div>
  );
}
