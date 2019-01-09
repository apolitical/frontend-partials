// @flow
import { call, takeEvery, put } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import { getMemberRaw } from './api';
import type { Action } from '../../types';

function* fetchMember(action): Saga<?Action> {
  const memberResponse = yield call(getMemberRaw, action.slug);
  if (memberResponse.status >= 200 && memberResponse.status < 300) {
    const member = yield call(() => memberResponse.json());
    yield put({ type: 'ME_RECEIVED', member });
  } else if (memberResponse.status === 401) {
    yield put({ type: 'ME_REQUEST_UNAUTHORIZED' });
  } else if (memberResponse.status === 404) {
    yield put({ type: 'ME_NOT_FOUND' });
  } else {
    throw memberResponse;
  }
}

export default function* meRequestSaga() : Saga<?Action> {
  yield takeEvery('ME_GET', fetchMember, { slug: 'me' });
}
