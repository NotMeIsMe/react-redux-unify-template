import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import config from './config.js';

export default class Html extends Component {
  render () {
    const { assets, component, store } = this.props;
    const icon = require('./containers/favicon.ico');
    const content = ReactDOM.renderToString(component);
    const assetsJss = Object.keys(assets.javascript).map((javascript, key) => <script src={assets.javascript[javascript]} key={key} charSet="UTF-8"/>);
    const externalsJss = Object.keys(config.externals).map((javascript, key) => <script src={config.externals[javascript]} key={key} charSet="UTF-8"/>);
    const assetsCsss = Object.keys(assets.styles).map((style, key) => <link href={assets.styles[style]} key={key} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8"/>);

    const html =
    (<html lang="zh-CN">
        <head>
          <meta charSet="utf-8"/>
          <title>react-redux-unify-template</title>
          <meta name="description" content="react-redux-unify-template"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <link rel="react-redux-unify-template" href={icon}/>
          { assetsCsss }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          { externalsJss }
          { assetsJss }
        </body>
      </html>);
    return html;
  }
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.object,
  store: PropTypes.object,
  jskey: PropTypes.string
};
