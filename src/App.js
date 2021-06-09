import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import requestSentiment from '../src/util/apiCalls';
import faceSwitch from '../src/util/faceSwitch';

import Form from './components/Form/Form';
import Drafts from './components/Drafts/Drafts';

export default function App() {
  const [drafts, setDrafts] = useState([]);
  const [sentiment, setSentiment] = useState('');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('🧐');
  const [error, setError] = useState('');

  useEffect(() => {
    setSentiment(sentiment);
    const face = faceSwitch(sentiment?.result?.type);
    setEmoji(face);
  }, [sentiment]);

  const checkSentiment = (message) => {
    setError('');
    requestSentiment(message)
      .then((data) => {
        setSentiment(data);
      })
      .catch(() => setError(errorMessage));
  };

  const submitDraft = () => {
    setDrafts([...drafts, message]);
    setMessage('');
    setSentiment('');
  };

  const errorMessage = <p>Sorry, we weren't able to process your message.</p>;

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <div className='App'>
            <h1>Overthunk</h1>
            <div className='emoji'>{emoji}</div>
            <Form
              checkSentiment={checkSentiment}
              message={message}
              setMessage={setMessage}
            />
            <Drafts drafts={drafts} />
          </div>
        )}
      />
      <Route
        exact
        path='/result'
        render={() => (
          <div className='App'>
            <h1>Overthunk</h1>
            <div className='emoji'>{emoji}</div>
            {error && error}
            <div>{!error && sentiment && sentiment.result.type}</div>
            <Link to='/'>
              <button>Back</button>
            </Link>
            {!error && (
              <Link to='/'>
                <button onClick={submitDraft}>Save Draft</button>
              </Link>
            )}
          </div>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
