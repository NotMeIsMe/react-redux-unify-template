import { combineReducers } from 'redux';
import TestReducer from './test/reducer';

export default combineReducers({
  test: TestReducer
});

