import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import requestSentiment from '../src/util/apiCalls';
import faceSwitch from '../src/util/faceSwitch';

import Form from './components/Form/Form';

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
          <>
            <div>{emoji}</div>
            <Form
              checkSentiment={checkSentiment}
              message={message}
              setMessage={setMessage}
            />
          </>
        )}
      />
      <Route
        exact
        path='/result'
        render={() => (
          <>
            <div>{emoji}</div>
            {error && error}
            <div>{sentiment && sentiment.result.type}</div>
            <Link to='/'>
              <button>Back</button>
            </Link>
            {!error && (
              <Link to='/'>
                <button onClick={submitDraft}>Save Draft</button>
              </Link>
            )}
          </>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
