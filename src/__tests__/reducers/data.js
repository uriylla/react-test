import dataReducer from '../../reducers/data';
import { cards } from '../../fixtures/cards';

test('should set initial state', () => {
  const state = dataReducer(undefined,{ type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should revieve cards data', () => {
  const state = dataReducer(undefined,{ type: 'RECIEVE_CARDS_DATA', data: cards});
  expect(state).toEqual(cards);
});