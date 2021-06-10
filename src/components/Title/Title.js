import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

export default function Title() {
  return (
    <Link className='title' to='/' tabIndex={-1}>
      <h1>Overthunk</h1>
      <h2>let us do the overthinking for you</h2>
    </Link>
  );
}
