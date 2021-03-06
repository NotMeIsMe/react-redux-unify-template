import { createStore, applyMiddleware } from 'redux';
import asyncMiddleware from './middleware/async';
// import thunk from 'redux-thunk';
import { composeWithDevTools as composeWithDevToolsDev } from 'redux-devtools-extension';
import { composeWithDevTools as composeWithDevToolsPro } from 'redux-devtools-extension/logOnlyInProduction';
import reducers from './reducer';
import config from '../config';

// asyncMiddleware:
// resolve when any prop is a promise middleware for Redux.
const enhancersDev = composeWithDevToolsDev(
  applyMiddleware(asyncMiddleware)
  // other store enhancers if any
);

const enhancersPro = composeWithDevToolsPro(
  applyMiddleware(asyncMiddleware)
  // other store enhancers if any
);

function buildStore (initState) {
  const store = createStore(reducers, initState, config.isProduction ? enhancersPro : enhancersDev);
  return store;
}

export default buildStore;
