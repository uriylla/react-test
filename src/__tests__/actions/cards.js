import { 
  addCard, 
  editCard, 
  clearDeck, 
  removeCard,
  ADD_CARD,
  EDIT_CARD,
  CLEAR_DECK,
  REMOVE_CARD
} from '../../actions/cards';

import {whiteCards, blackCards } from '../../fixtures/cards';

test('should create addCard action for a black card', () => {
  const { text, pick } = blackCards[0];
  const action = addCard({text, pick})
  expect(action).toEqual({
    type: ADD_CARD,
    card: {
      text,
      pick,
      id: expect.any(String)
    }
  })
});

test('should create addCard action for a white card', () => {
  const { text } = whiteCards[0];
  const action = addCard({text})
  expect(action).toEqual({
    type: ADD_CARD,
    card: {
      text,
      id: expect.any(String)
    }
  })
});

test('should create editCard action for a black card', () => {
  const card = blackCards[0];
  const action = editCard(card)
  expect(action).toEqual({
    type: EDIT_CARD,
    card
  })
})

test('should create editCard action for a white card', () => {
  const card = whiteCards[0];
  const action = editCard(card)
  expect(action).toEqual({
    type: EDIT_CARD,
    card
  })
})

test('should create clearDeck action', () => {
  expect(clearDeck()).toEqual({
    type: CLEAR_DECK,
  })
})

test('should create removeCard action', () => {
  const id = 'joiitie2';
  expect(removeCard(id)).toEqual({
    type: REMOVE_CARD,
    id
  });
});