import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
  render () {
    const { assets, jskey, component, store } = this.props;
    const icon = require('./containers/favicon.ico');
    const content = ReactDOM.renderToString(component);
    const html =
    (<html lang="zh-CN">
        <head>
          <meta charSet="utf-8"/>
          <title>react-redux-unify-template</title>
          <meta name="description" content="react-redux-unify-template"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <link rel="react-redux-unify-template" href={icon}/>
          <link rel="stylesheet" href="http://127.0.0.1:3001/css/onsenui.css"/>
          <link rel="stylesheet" href="http://127.0.0.1:3001/css/onsen-css-components.css"/>
          <link rel="stylesheet" href="http://127.0.0.1:3001/css/font_awesome/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="http://127.0.0.1:3001/css/ionicons/css/ionicons.min.css"/>
          <link rel="stylesheet" href="http://127.0.0.1:3001/css/material-design-iconic-font/css/material-design-iconic-font.min.css"/>
          <link href={assets.styles[jskey]} key={jskey} media="screen, projection" rel="stylesheet" type="text/css"/>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript[jskey]} key={jskey}/>
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
