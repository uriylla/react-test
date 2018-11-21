import { testSaga } from 'redux-saga-test-plan';
import { getCardsData } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchData } from '../fetch';
import { cards } from '../fixtures/cards';
import { recieveCardsData } from '../actions/data';

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
