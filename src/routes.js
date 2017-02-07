import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Home from './containers/home/home';
import Index from './containers/index';

export default
    (<Route path="/" component={Index}>
      <IndexRoute component={Home} />
    </Route>);
