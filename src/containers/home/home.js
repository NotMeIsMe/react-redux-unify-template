import React from 'react';
import Hello from '../../components/hello/hello';
import ToolBar from '../../components/toolbar/toolbar';
import NavBar from '../../components/navbar/navbar';
import styles from './home.css';

class Home extends React.Component {
  render () {
    return <div className={styles.home}>
              <ToolBar title="App" onclick={() => { console.log('back'); }}/>
              <Hello />
              <NavBar contents={[1]} navcontents={[{
                ico: require('./home.png'),
                subtitle: '主页'
              }, {
                ico: require('./service.png'),
                subtitle: '发现'
              }]}/>
           </div>;
  }
}

export default Home;

