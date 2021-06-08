import React, { useState } from 'react';

export default function Form({ checkSentiment }) {
  const [message, setMessage] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label for='message'>
        Message
        <input
          type='text'
          name='message'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          checkSentiment(message);
          setMessage('');
        }}
      >
        Check Sentiment
      </button>
    </form>
  );
}
