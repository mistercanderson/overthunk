import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export default function Form({ checkSentiment, message, setMessage }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label name='message'>Message:</label>
      <textarea
        autoComplete='off'
        placeholder='Put your test message here'
        rows={5}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
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
