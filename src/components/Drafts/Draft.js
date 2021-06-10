import React from 'react';

export default function Draft({ draft, index, handleClick }) {
  return (
    <div className='draft'>
      <div className='draft-container hidden'>
        <header>
          <button className='close' onClick={handleClick}>
            x
          </button>
          <p className='draft-title'>
            Draft {index + 1}: {draft.emoji}
          </p>
        </header>
        <p className='draft-text'>{draft.message}</p>
      </div>
      <button className='draft-button' name={index} onClick={handleClick}>
        Draft {index + 1}
      </button>
    </div>
  );
}
