import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { requestSentiment } from '../src/util/apiCalls';

import Form from './components/Form/Form';

export default function App() {
  const [drafts, setDrafts] = useState([]);
  const [sentiment, setSentiment] = useState('');

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

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Form checkSentiment={checkSentiment} />}
      />
      <Route
        exact
        path='/check-sentiment'
        render={() => (
          <>
            <div>{sentiment}</div>
            <Link to='/'><button>Back</button></Link>
          </>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
