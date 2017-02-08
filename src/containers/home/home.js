import React from 'react';
import { Page, Button } from '../../components/onsenui/index';
import Hello from '../../components/hello/hello';

class Home extends React.Component {
  handleClick () {
    const ons = require('onsenui');
    ons.notification.alert('Hello world!');
  }

  render () {
    return <Page>
              Home:
              <Button onClick={this.handleClick}>Tap me!</Button>
            <Hello />
          </Page>;
  }
}

export default Home;

