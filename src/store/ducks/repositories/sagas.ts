import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { RepositoriesTypes, LoadRequestAction } from './types';
import { loadSuccess, loadFailure } from './actions';

export function* load(action: LoadRequestAction) {
  try {
    const response = yield call(api.get, `users/${action.payload}/repos`);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
