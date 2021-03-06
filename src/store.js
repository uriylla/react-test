import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dataReducer from './reducers/data';
import cardsReducer from './reducers/cards';

import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    data: dataReducer,
    cards: cardsReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(mySaga);

export default store;
