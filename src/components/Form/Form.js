import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form({ checkSentiment, message, setMessage }) {
  
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
      <Link to='/result'>
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
