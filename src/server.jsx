import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-async-connect';
import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const app = express();

function htmlServerRender(routes, rdc, req, res, jskey) {
  if (isDeveloping) WebpackIsomorphicTools.refresh();
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
      res.send(`<!doctype html>\n${renderToString(<Html assets={global.WebpackIsomorphicTools.assets()} jskey={jskey} component={component} store={store}  />)}`);
    } else {
      res.send(404, 'Not found');
    }
  });
}


app.get('*', (req, res) => {
  htmlServerRender(sRouter, sRdc, req, res, 'shop');
});

app.listen(3000);

