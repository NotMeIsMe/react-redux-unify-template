import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

var a;

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.object,
    store: PropTypes.object,
    jskey: PropTypes.string,
  };
  render() {
    const { assets, jskey, component, store } = this.props;
    const content = ReactDOM.renderToString(component);
    const icon = require('./favicon.ico');
    const html =
    (<html lang="zh-CN">
        <head>
          <meta charSet="utf-8"/>
          <title>佧云-服务美好生活</title>
          <meta name="description" content="服务美好生活"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <link rel="佧云" href={icon} />
          {
            Object.keys(assets.styles)
            .map((style, i) => <link href={assets.styles[style]} key={i} media="screen, projection" rel="stylesheet" type="text/css"/>)
          }
        </head>
        <body className="fullWidth">
          <div className="fullWidth" id="root" dangerouslySetInnerHTML={{__html: content }}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript[jskey]} key={jskey}/>
        </body>
      </html>);
    return html;
  }
}

