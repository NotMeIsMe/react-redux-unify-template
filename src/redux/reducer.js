import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TestReducer from './test/reducer';
import authReducer from './auth/reducer';
import homeReducer from './home/reducer';
import rootReducer from './root/reducer';

export default combineReducers({
  root: rootReducer,
  auth: authReducer,
  home: homeReducer,
  test: TestReducer,
  form: formReducer
});
