import { createStore } from 'redux';
import reducers from './reducer';

function buildStore() {
  const store = createStore(reducers, window.__data);
  return store;
}

export default buildStore();
