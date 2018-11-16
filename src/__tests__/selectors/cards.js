import { getCardById, getWhiteCards, getBlackCards } from '../../selectors/cards';
import { cards, whiteCards, blackCards } from '../../fixtures/cards';

test('shoud get all white cards from the store', () => {
  const result = getWhiteCards(cards);
  expect(result).toEqual(whiteCards);
});

test('shoud get all black cards from the store', () => {
  const result = getBlackCards(cards);
  expect(result).toEqual(blackCards);
});

test('shoud find a card by its id', () => {
  const card = cards[1];
  const result = getCardById(cards, card.id);
  expect(result).toEqual(card);
})