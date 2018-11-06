import { createStore, combineReducers } from "redux";
import cardsReducer from './reducers/cards'

const store = createStore(
  combineReducers({
    cardsReducer
  }),
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
