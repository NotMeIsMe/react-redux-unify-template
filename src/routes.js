import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Home from './containers/home/home';
import Index from './containers/index';
import Dialogue from './containers/dialogue/dialogue';
import MessBox from './containers/messbox/messbox.js';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const state = store.getState();
    const user = state.auth && state.auth.user;
    if (!user) {
      replace('/');
    }
    cb();
  };
  // onEnter 的使用技巧
  // https://github.com/ReactTraining/react-router/blob/master/docs/API.md
  return <Route path="/" component={Index}>
              <IndexRoute component={Home} />
              <Route onEnter={requireLogin}>
                <Route path="messbox" component={MessBox}/>
              </Route>
              <Route path="test" component={Dialogue}/>
          </Route>;
};

