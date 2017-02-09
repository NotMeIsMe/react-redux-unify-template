import { combineReducers } from 'redux';
import TestReducer from './test/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  auth: authReducer,
  test: TestReducer
});

