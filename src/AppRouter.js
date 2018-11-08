import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './components/Header';
import Deck from './components/Deck';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header > Card  game maker </Header>
      <Route path="/" component={Deck}/>
    </div>
  </Router>
);

export default AppRouter;