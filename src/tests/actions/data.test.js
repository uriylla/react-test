import { 
  REQUEST_CARDS_DATA,
  RECIEVE_CARDS_DATA,
  requestCardsData,
  recieveCardsData
} from "../../actions/data";

import { cards } from '../fixtures/cards';

test('should create requestCardsData action', () => {
  const action = requestCardsData();
  expect(action).toEqual({
    type: REQUEST_CARDS_DATA
  })
})

test('should create recieveCardsData action', () => {
  const action = recieveCardsData(cards);
  expect(action.type).toBe(RECIEVE_CARDS_DATA);
})