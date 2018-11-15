import { ADD_CARD, EDIT_CARD } from '../actions/cards';
import { RECIEVE_CARDS_DATA } from '../actions/data';

export default (state = [], action) => {
  switch (action.type) {
    case RECIEVE_CARDS_DATA:
      return action.data
    case ADD_CARD:
      return [
        ...state,
        action.card
      ];
    case EDIT_CARD:
      return state.map(card => card.id === action.card.id ? action.card : card);
    default:
      return state
  }
}