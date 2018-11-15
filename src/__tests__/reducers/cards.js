import cardsReducer from '../../reducers/cards';

import { whiteCards, blackCards, cards } from '../../fixtures/cards';

test('should set initial state', () => {
  const state = cardsReducer(undefined,{ type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add a card', () => {
  const state = cardsReducer([], {
    type: 'ADD_CARD',
    card: cards[0]
  });
  expect(state).toEqual([cards[0]]);
});

test('should remove a card', () => {
  const state = cardsReducer(whiteCards, {
    type: 'REMOVE_CARD',
    id: whiteCards[0].id
  });
  expect(state).toEqual([whiteCards[1], whiteCards[2], whiteCards[3], whiteCards[4]]);
});

test('should not remove a card for an undefined id', () => {
  const state = cardsReducer(whiteCards, {
    type: 'REMOVE_CARD',
    id: undefined
  });
  expect(state).toEqual(whiteCards);
});

test('should edit an existing white card', () => {
  const id = whiteCards[0].id;
  const text = 'some text';
  const state = cardsReducer(whiteCards, {
    type: 'EDIT_CARD',
    card: { id, text }
  });
  expect(state).toEqual([{ id, text }, whiteCards[1], whiteCards[2], whiteCards[3], whiteCards[4]]);
});

test('should edit an existing black card', () => {
  const id = blackCards[0].id;
  const text = 'some text';
  const pick = 1;
  const state = cardsReducer(blackCards, {
    type: 'EDIT_CARD',
    card: { id, text, pick }
  });
  expect(state).toEqual([{ id, text, pick }, blackCards[1], blackCards[2], blackCards[3], blackCards[4]]);
});

test('should not edit any card with an undefined id', () => {
  const id = undefined;
  const text = 'some text';
  const pick = 1;
  const state = cardsReducer(blackCards, {
    type: 'EDIT_CARD',
    card: { id, text }
  });
  expect(state).toEqual(blackCards);
});