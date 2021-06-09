import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css'

export default function Form({ checkSentiment, message, setMessage }) {
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label name='message'>
        Message:
      </label>
        <input
          type='text'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
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
