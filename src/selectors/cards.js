export const getCardById = (cards, id) => cards.find(card => card.id === id)
export const getBlackCards = cards => cards.filter(({pick}) => !!pick)
export const getWhiteCards = cards => cards.filter(({pick}) => !pick)