import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { UserState } from './ducks/user/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
  user: UserState;
}

const sagamiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagamiddleware),
);

sagamiddleware.run(rootSaga);

export default store;
