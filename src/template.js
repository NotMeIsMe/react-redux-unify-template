import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
  render () {
    const { assets, component, store } = this.props;
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
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          {Object.keys(assets.javascript).map((javascript, key) =>
            <script src={assets.javascript[javascript]} key={key} charSet="UTF-8"/>
          )}
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
