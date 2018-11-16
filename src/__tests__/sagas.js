import { testSaga } from 'redux-saga-test-plan';
import { getCardsData } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchData } from '../fetch';
import { cards } from '../fixtures/cards';

const recieveCardsData = (data) => ({
  type: 'RECIEVE_CARDS_DATA',
  data: data
})

it ('test getCardsData saga', () => {
  const saga = testSaga(getCardsData);
  saga
    .next()
    .call(fetchData)
    .next(cards)
    .put(recieveCardsData(cards))
    .next()
    .isDone()
})
