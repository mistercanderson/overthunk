import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <h1>Hello</h1>
            <h5>Hello</h5>
          </div>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
