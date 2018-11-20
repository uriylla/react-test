import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Deck from '../components/Deck';
import Header from '../components/Header';
import CardView from '../components/CardView';
import Modal from '../blocks/Modal';
import CloseButton from '../elements/CloseButton';

export const history = createHistory()

const addCard = (props) =>
<Modal>
  <CloseButton onClick={() => history.push('/')}>Close</CloseButton>
  <CardView adding={true}/>
</Modal>

const viewCard = (props) =>
<Modal>
  <CloseButton onClick={() => history.push('/')}>Close</CloseButton>
  <CardView {...props} id={props.match.id}/>
</Modal>

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={Header}/>
      <Route path="/" component={Deck}/>
      <Route path="/add" render={addCard}/>
      <Route path="/card/:id" render={viewCard}/>
    </div>
  </Router>
);

export default AppRouter;