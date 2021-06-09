import React from 'react';
import './Drafts.css';

export default function Draft({ drafts }) {
  const draftsDisplay = drafts.map((d) => <p className='draft'>{d}</p>);
  return <div className='drafts'>{draftsDisplay}</div>;
}
