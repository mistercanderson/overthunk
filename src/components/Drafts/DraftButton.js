import React from 'react';
import PropTypes from 'prop-types';

export default function DraftButton({ index, handleClick }) {
  return (
    <button className='draft-button' name={index} onClick={handleClick}>
      Draft {index + 1}
    </button>
  );
}

DraftButton.propTypes = {
  index: PropTypes.number,
  handleClick: PropTypes.func,
};
