import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css';

export default function DraftContainer({ draft, index, animate, handleClick }) {
  return (
    <div
      className={
        animate
          ? 'draft-container animate__animated animate__fadeInDown animate__faster	500ms'
          : 'draft-container animate__faster	500ms'
      }
    >
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
  );
}

DraftContainer.propTypes = {
  draft: PropTypes.object,
  index: PropTypes.number,
  animate: PropTypes.bool,
  handleClick: PropTypes.func,
};
