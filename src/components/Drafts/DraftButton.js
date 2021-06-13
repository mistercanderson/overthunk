import React from 'react';

export default function DraftButton({ index, handleClick }) {
  return (
    <button className='draft-button' name={index} onClick={handleClick}>
      Draft {index + 1}
    </button>
  );
}
