import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Home from './containers/home/home';
import Index from './containers/index';
import MessBox from './containers/messbox/messbox.js';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const state = store.getState();
    const user = state.auth && state.auth.user;
    if (!user) {
      // oops, not logged in, so can't be here!
      replace('/');
    }
    cb();
  };

  return <Route path="/" component={Index}>
              <IndexRoute component={Home} />
              <Route onEnter={requireLogin}>
                <Route path="messbox" component={MessBox}/>
              </Route>
          </Route>;
};

