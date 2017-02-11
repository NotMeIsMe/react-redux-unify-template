import path from 'path';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import device from 'express-device';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logger from './log4j/log4j';
import TestReducers from './redux/reducer';
import buildRoutes from './routes';
import config from './config';
import Html from './template';

import api from '../api/server/api';

const app = express();
app.use(session({
  secret: 'dsd823h2heh98r2h9r9299e9ue',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());
app.use(device.capture());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(api.toolsApi);

// 默认初始化state
const initState = {
  auth: {
    user: {}
  },
  root: {
    isrootLoaded: false
  },
  test: {}
};

function htmlServerRender (buildRoutes, rdc, req, res, jskey) {
  if (!config.isProduction) WebpackIsomorphicTools.refresh();

  const store = createStore(rdc, initState);
  const routes = buildRoutes(store);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      );
      res.status(200).send(`<!doctype html>\n${renderToString(<Html assets={WebpackIsomorphicTools.assets()} component={component} store={store} />)}`);
    } else {
      res.status(404).sendFile(path.join(__dirname, '../dist/mobile/404.html'));
    }
  });
}

app.get('*', (req, res) => {
  if (req.device.type === 'phone') {
    htmlServerRender(buildRoutes, TestReducers, req, res, 'client');
  } else {
    res.status(404).send('undefined');
  }
});

app.listen(config.port, (err) => {
  if (err) logger.error(err);
  logger.info('Master server listening on port %s', `${config.port}`);
});

