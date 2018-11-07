import { RECIEVE_CARDS_DATA } from '../actions/data';

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_CARDS_DATA:
      return {
        ...action.data
      };
    default:
      return state
  }
}