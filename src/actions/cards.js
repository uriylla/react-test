import uniqid from 'uniqid';

export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const CLEAR_DECK = 'CLEAR_DECK';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addCard = card => ({
  type: ADD_CARD,
  card: {
    ...card,
    id: uniqid()
  }
})

export const editCard = card => ({
  type: EDIT_CARD,
  card
})

export const clearDeck = () => ({
  type: CLEAR_DECK
})

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  id
})