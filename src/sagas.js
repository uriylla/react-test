import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_CARDS_DATA, recieveCardsData } from './actions/data';
import { fetchData } from './fetch';

export function* getCardsData() {
  try {
    const data = yield call(fetchData);
    yield put(recieveCardsData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_CARDS_DATA, getCardsData);
}