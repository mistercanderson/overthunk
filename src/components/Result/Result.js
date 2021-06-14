import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import { Link } from 'react-router-dom';

export default function Result({ error, sentiment, submitDraft, drafts }) {
  useEffect(() => {
    const polarity = document.querySelector('.polarity');
    polarity?.classList?.add('animate__animated', 'animate__fadeIn');
    return () => {
      polarity?.classList?.remove('animate__fadeIn');
    };
  }, [sentiment]);

  return (
    <div className='result'>
      <p className={error ? 'hidden' : 'result-message-start'}>
        This message conveys a
      </p>
      <p className={error ? 'hidden' : 'polarity'}>
        {!error && sentiment ? sentiment : '...'}
      </p>
      <p className={error ? 'error' : 'result-message-end'}>
        {error ? error : 'tone.'}
      </p>
      <Link className={error ? 'back-error' : 'back'} to='/' tabIndex={-1}>
        <button>Back</button>
      </Link>
      {!error && (
        <Link className='submit-draft' to='/' tabIndex={-1}>
          <button
            onClick={() => {
              if (drafts.length < 3) {
                return submitDraft();
              } else {
                window.alert(
                  "You've already written 3 drafts, make sure you don't overthink it!"
                );
              }
            }}
          >
            Save
          </button>
        </Link>
      )}
    </div>
  );
}

Result.propTypes = {
  error: PropTypes.string,
  sentiment: PropTypes.string,
  submitDraft: PropTypes.func,
  drafts: PropTypes.array,
};
