import React from 'react';
import Hello from '../../components/hello/hello';
import ToolBar from '../../components/toolbar/toolbar';
import NavBar from '../../components/navbar/navbar';
import Simple from '../../components/alert/simple';
import Tab from '../../components/tab/tab';
import styles from './home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cbDialog: true
    };
  }
  render () {
    return <div className={styles.home}>
                <Simple toClose={this.state.cbDialog} onLclick={() => {
                  this.setState({ cbDialog: true });
                }} onRclick={() => {
                  this.setState({ cbDialog: true });
                }} content="确定跳转?"/>
                <ToolBar count={2} title="App" onLclick={() => {
                  this.setState({ cbDialog: false });
                }} onRclick={() => { console.log('mess'); }}/>
                <NavBar contents={[<Hello />,
                  <Tab rData={[{ className: '测试1', arrs: [ <div />, <div /> ] },
                  { className: '测试2', arrs: [ <div />, <div />, <div /> ] },
                  { className: '测试3', arrs: [ <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div /> ] }]}/>
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

