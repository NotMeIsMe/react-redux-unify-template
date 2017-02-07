import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as composeWithDevToolsDev } from 'redux-devtools-extension';
import { composeWithDevTools as composeWithDevToolsPro } from 'redux-devtools-extension/logOnlyInProduction';
import reducers from './reducer';
import config from '../config';

const enhancersDev = composeWithDevToolsDev(
  applyMiddleware(/*...middleware*/)
  // other store enhancers if any
);

const enhancersPro = composeWithDevToolsPro(
  applyMiddleware(/*...middleware*/)
  // other store enhancers if any
);

function buildStore (initState) {
  const store = createStore(reducers, config.isProduction ? enhancersPro : enhancersDev, initState);
  return store;
}

export default buildStore;
