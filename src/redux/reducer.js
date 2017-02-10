import { combineReducers } from 'redux';
import TestReducer from './test/reducer';
import authReducer from './auth/reducer';
import homeReducer from './home/reducer';

export default combineReducers({
  auth: authReducer,
  home: homeReducer,
  test: TestReducer
});

