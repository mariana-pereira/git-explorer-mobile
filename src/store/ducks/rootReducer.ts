import { combineReducers } from 'redux';

import user from './user';
import repositories from './repositories';

export default combineReducers({
  user,
  repositories,
});
