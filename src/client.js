import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import routes from './routes';
import buildStore from './redux/store';

const store = buildStore(window.__data);
render((
  <Provider store={store} key="provider">
    <Router history={browserHistory} children={routes} />
  </Provider>
), document.getElementById('root'));
