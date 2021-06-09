import React from 'react';
import './Result.css';
import { Link } from 'react-router-dom';

export default function Result({ error, sentiment, submitDraft }) {
  return (
    <div className='Result'>
      <div className='polarity'>
        {!sentiment && 'Loading...'}
        {!error && sentiment && sentiment.result.type}
      </div>
      <Link className='back' to='/' tabIndex={-1}>
        <button>Back</button>
      </Link>
      {!error && (
        <Link className='submit-draft' to='/' tabIndex={-1}>
          <button onClick={submitDraft}>Save Draft</button>
        </Link>
      )}
    </div>
  );
}
