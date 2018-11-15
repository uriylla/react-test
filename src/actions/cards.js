export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const CLEAR_DECK = 'CLEAR_DECK';

export const addCard = card => ({
  type: ADD_CARD,
  card
})

export const editCard = card => ({
  type: EDIT_CARD,
  card
})

export const clearDeck = () => ({
  type: CLEAR_DECK
})