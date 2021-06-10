import React, { useEffect } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';

export default function Result({ error, sentiment, submitDraft }) {
  useEffect(() => {
    const polarity = document.querySelector('.polarity');
    polarity?.classList?.add('animate__animated', 'animate__fadeIn');
    return () => {
      polarity?.classList?.remove('animate__fadeIn');
    };
  }, [sentiment]);

  return (
    <div className='result'>
      <p className='result-message-start'>This message conveys a </p>
      <p className='polarity'>
        {!error && sentiment ? sentiment.result.type : '...'}
      </p>
      <p className='result-message-end'>tone.</p>
      <Link className='back' to='/' tabIndex={-1}>
        <button>Back</button>
      </Link>
      {!error && (
        <Link className='submit-draft' to='/' tabIndex={-1}>
          <button onClick={submitDraft}>Save</button>
        </Link>
      )}
    </div>
  );
}
