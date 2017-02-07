import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import routes from './routes';
import store from './redux/store';

render((
  <Provider store={store} key="provider">
    <Router history={browserHistory} children={routes} />
  </Provider>
), document.getElementById('root'));
