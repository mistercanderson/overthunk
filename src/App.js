import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { requestSentiment } from '../src/util/apiCalls';

import Form from './components/Form/Form';

export default function App() {
  const [drafts, setDrafts] = useState([]);
  const [sentiment, setSentiment] = useState({});

  const submitDraft = (draft) => {
    setDrafts([...drafts, draft]);
  };

  const checkSentiment = (message) => {
    requestSentiment(message)
      .then((data) => setSentiment(data))
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
        path='/check_sentiment'
        render={() => <div>{sentiment}</div>}
      />
      <Redirect to='/' />
    </Switch>
  );
}
