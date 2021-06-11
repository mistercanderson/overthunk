import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'animate.css';

import requestSentiment from '../src/util/apiCalls';
import faceSwitch from '../src/util/faceSwitch';

import Form from './components/Form/Form';
import Drafts from './components/Drafts/Drafts';
import Result from './components/Result/Result';
import Title from './components/Title/Title';
import Emoji from './components/Emoji/Emoji';

export default function App() {
  const [drafts, setDrafts] = useState([]);
  const [sentiment, setSentiment] = useState('');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('🧐');
  const [error, setError] = useState('');
  // const [draftLimit, setDraftLimit] = useState(false);

  useEffect(() => {
    setSentiment(sentiment);
    const face = faceSwitch(sentiment?.result?.type);
    setEmoji(face);
  }, [sentiment]);

  useEffect(() => {
    const emoji = document.querySelector('.emoji');
    emoji?.classList?.add('animate__animated', 'animate__fadeInLeft');
    return () => {
      emoji?.classList?.remove('animate__animated', 'animate__fadeInLeft');
    };
  }, []);

  const checkSentiment = (message) => {
    setSentiment('');
    setError('');
    if (!message) {
      return alert('Please enter a message to overthink!');
    }
    requestSentiment(message)
      .then((data) => {
        setSentiment(data);
      })
      .catch(() => setError(errorMessage));
  };

  const submitDraft = () => {
    setDrafts([...drafts, { message, emoji }]);
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
            <Title />
            <Emoji emoji={emoji} />
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
        path={message ? '/result' : '/'}
        render={() => (
          <div className='App'>
            <Title />
            <Emoji emoji={emoji} />
            {error && error}
            <Result
              error={error}
              sentiment={sentiment}
              drafts={drafts}
              submitDraft={submitDraft}
            />
          </div>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
