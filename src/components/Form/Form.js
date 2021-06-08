import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form({ checkSentiment }) {
  const [message, setMessage] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label name='message'>
        Message:
        <input
          type='text'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </label>
      <Link to='/check-sentiment'>
        <button
          onClick={() => {
            checkSentiment(message);
            setMessage('');
          }}
        >
          Check Sentiment
        </button>
      </Link>
    </form>
  );
}
