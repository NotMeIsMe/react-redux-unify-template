import path from 'path';
import express from 'express';
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

const app = express();
app.use(device.capture());
app.use(express.static(path.join(__dirname, '../dist')));

// 默认初始化state
const initState = {
  auth: {
    user3: {}
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
      if (!config.isProduction) {
        res.redirect(301, `http://${config.host}:${config.devPort}/mobile/404.html`);
      } else {
        res.status(404).sendFile(path.join(__dirname, '../dist/mobile/404.html'));
      }
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

