import uniqid from 'uniqid';

export const REQUEST_CARDS_DATA = 'REQUEST_CARDS_DATA';
export const RECIEVE_CARDS_DATA = 'RECIEVE_CARDS_DATA';

export const requestCardsData = () => ({
  type: REQUEST_CARDS_DATA
})

export const recieveCardsData = (data) => ({
  type: RECIEVE_CARDS_DATA,
  data: data.map(card => ({...card, id: uniqid()}))
})