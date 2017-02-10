import React from 'react';
import { connect } from 'react-redux';
import ToolBar from '../components/toolbar/toolbar';
import Simple from '../components/alert/simple';
import Loading from '../components/loading/load';
import { loaded } from '../redux/home/actions';
import './favicon.ico';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cbDialog: true
    };

    this.loaded = this.props.loaded.bind(this);
  }

  componentDidMount () {
    // 加载完毕
    // console.log('componentDidMount...');
    this.loaded();
    // setTimeout(this.loaded, 4000);
  }

  render () {
    return (
      <div>
        <ToolBar count={2} title="App" onLclick={() => {
          this.setState({ cbDialog: false });
        }} onRclick={() => {
          this.props.router.push('/messbox');
        }}/>
        <Simple toClose={this.state.cbDialog} onLclick={() => {
          this.setState({ cbDialog: true });
        }} onRclick={() => {
          this.setState({ cbDialog: true });
          this.props.router.goBack();
        }} content="确定跳转?"/>
        <Loading toClose={this.props.isloaded}/>
        { this.props.children }
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.object.isRequired
};

function mapStateToProps (state) {
  const home = state.home;
  return {
    isloaded: home.isloaded
  };
}

function mapDispatchProps (dispatch) {
  return {
    loaded: () => dispatch(loaded())
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Index);
