import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Hello from './components/hello/hello.js';
import { ReduxAsyncConnect, reducer as reduxAsyncConnect } from 'redux-async-connect'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(combineReducers({reduxAsyncConnect}), window.__data);
// 4. Render `Router` with ReduxAsyncConnect middleware
render((
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
      <Route path="/" component={Hello}/>
    </Router>
  </Provider>
), document.getElementById('root'))
