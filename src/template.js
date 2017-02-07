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
          {
            Object.keys(assets.styles)
            .map((style, i) => <link href={assets.styles[style]} key={i} media="screen, projection" rel="stylesheet" type="text/css"/>)
          }
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
