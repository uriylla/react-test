import { ADD_CARD } from '../actions/cards';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.card
      ];
    default:
      return state
  }
}