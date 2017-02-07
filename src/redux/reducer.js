import { combineReducers } from 'redux';
import TestReducer from './test';

export default combineReducers({
  test: TestReducer,
});

