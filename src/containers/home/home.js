import React from 'react';
// import Hello from '../../components/hello/hello';
import NavBar from '../../components/navbar/navbar';
import Tab from '../../components/tab/tab';
import FloatBt from '../../components/floatbt/button';
import List from '../../components/list/list';
import styles from './home.css';

class Home extends React.Component {
  render () {
    return <div className={styles.home}>
                <NavBar toMargin={this.props.isBarHide} contents={[
                  <div><List /> <FloatBt /></div>,
                  <Tab rData={[
                    { className: '测试1', arrs: [ <div />, <div /> ] },
                    { className: '测试2', arrs: [ <div />, <div />, <div /> ] },
                    { className: '测试3', arrs: [ <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div />, <div /> ] }
                  ]} />
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

Home.propTypes = {
  isBarHide: React.PropTypes.bool
};

export default Home;

