import { ADD_CARD, EDIT_CARD } from '../actions/cards';

export default (state = [], action) => {
  switch (action.type) {
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