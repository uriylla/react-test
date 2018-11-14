import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './blocks/Header';
import Deck from './components/Deck';
import CardView from './components/CardView';
import Modal from './blocks/Modal';
import CloseButton from './elements/CloseButton';

export const history = createHistory()

const addCard = (props) =>
<Modal>
  <CloseButton onClick={() => history.push('/')}>Close</CloseButton>
  <CardView 
    text={'Some Card'}
    pick={1}
    adding={true}/>
</Modal>

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header > Card  game maker </Header>
      <Route path="/" component={Deck}/>
      <Route path="/add" render={addCard}/>
    </div>
  </Router>
);

export default AppRouter;