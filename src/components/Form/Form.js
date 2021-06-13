import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export default function Form({ checkSentiment, message, setMessage }) {
  const maxLength = 200;
  const [charsLeft, setCharsLeft] = useState(maxLength);

  useEffect(() => {
    setCharsLeft(maxLength - message?.length);
  }, [message]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label name='message'>Message:</label>
      <textarea
        autoComplete='off'
        placeholder='Put your message here...'
        rows={5}
        value={message}
        maxLength={maxLength}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <aside className='char-counter'>
        {charsLeft}/{maxLength}
      </aside>
      <Link to={message ? '/result' : '/'} replace tabIndex={-1}>
        <button
          onClick={() => {
            checkSentiment(message);
          }}
        >
          Check Sentiment
        </button>
      </Link>
    </form>
  );
}
