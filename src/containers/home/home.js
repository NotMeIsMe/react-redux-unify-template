import React from 'react';
import Hello from '../../components/hello/hello';

class Home extends React.Component {
  render () {
    return <div>
              Home:
            <Hello />
          </div>;
  }
}

export default Home;

