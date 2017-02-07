import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logger from './log4j/log4j';
import TestReducers from './redux/reducer';
import TestRoutes from './routes';
import config from './config';
import Html from './template';

const app = express();

function htmlServerRender (routes, rdc, req, res, jskey) {
  if (!config.isProduction) WebpackIsomorphicTools.refresh();
  const store = createStore(rdc);
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
      res.send(`<!doctype html>\n${renderToString(<Html assets={global.WebpackIsomorphicTools.assets()} jskey={jskey} component={component} store={store} />)}`);
    } else {
      res.send(404, 'Not found');
    }
  });
}

app.get('*', (req, res) => {
  htmlServerRender(TestRoutes, TestReducers, req, res, 'client');
});

app.listen(config.port, (err) => {
  if (err) logger.error(err);
  logger.info('Master server listening on port %s', `${config.port}`);
});

