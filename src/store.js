import { createStore, combineReducers } from "redux";
import cardsReducer from './reducers/cards'

const store = createStore(
  combineReducers({
    cardsReducer
  })
);

export default store;
