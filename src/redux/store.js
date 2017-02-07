import { createStore } from 'redux';
import reducers from './reducer';

function buildStore (initState) {
  const store = createStore(reducers, initState);
  return store;
}

export default buildStore;
