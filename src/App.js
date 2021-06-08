import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { requestSentiment } from '../src/util/apiCalls';

import Form from './components/Form/Form';

export default function App() {
  const [drafts, setDrafts] = useState([]);
  const [sentiment, setSentiment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSentiment(sentiment);
  }, [sentiment]);

  const checkSentiment = (message) => {
    requestSentiment(message)
      .then((data) => {
        setSentiment(data.result.type);
      })
      .catch((error) => console.log('error', error));
  };

  const submitDraft = () => {
    setDrafts([...drafts, message]);
    setMessage('');
  };

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <Form
            checkSentiment={checkSentiment}
            message={message}
            setMessage={setMessage}
          />
        )}
      />
      <Route
        exact
        path='/check-sentiment'
        render={() => (
          <>
            <div>{sentiment}</div>
            <Link to='/'>
              <button>Back</button>
            </Link>
            <Link to='/'>
              <button onClick={submitDraft}>Save Draft</button>
            </Link>
          </>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
