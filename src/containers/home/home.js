import React from 'react';
import Hello from '../../components/hello/hello';
import ToolBar from '../../components/toolbar/toolbar';
import NavBar from '../../components/navbar/navbar';
import Simple from '../../components/alert/simple';
import styles from './home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      closeAlert: true
    };
  }
  render () {
    return <div className={styles.home}>
                <Simple toClose={this.state.closeAlert} onLclick={() => {
                  this.setState({ closeAlert: true });
                }} onRclick={() => {
                  this.setState({ closeAlert: true });
                }} content="确定跳转?"/>
                <ToolBar count={2} title="App" onLclick={() => {
                  this.setState({ closeAlert: false });
                }} onRclick={() => { console.log('mess'); }}/>
                <NavBar contents={[<Hello />,
                  <div></div>
                ]} navcontents={[{
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

