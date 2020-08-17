import { all } from 'redux-saga/effects';

import user from './user/sagas';
import repositories from './repositories/sagas';

export default function* rootSaga() {
  return yield all([user, repositories]);
}
