import React from 'react';
import Hello from '../../components/hello/hello';
import ToolBar from '../../components/toolbar/toolbar';
import styles from './home.css';

class Home extends React.Component {
  render () {
    return <div className={styles.home}>
              <ToolBar title="App" onclick={() => { console.log('back'); }}/>
              <Hello />
           </div>;
  }
}

export default Home;

