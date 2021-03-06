import React from 'react';
import { connect } from 'react-redux';
import ToolBar from '../components/toolbar/toolbar';
import Simple from '../components/alert/simple';
import Loading from '../components/loading/load';
import { rootLoad } from '../redux/root/actions';
import './favicon.ico';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cbDialog: true
    };

    this.rootLoad = this.props.rootLoad.bind(this);
  }

  componentDidMount () {
    // 加载完毕
    this.rootLoad(true);
  }

  render () {
    return (
      <div>
        <ToolBar count={2} title="App" onLclick={() => {
          this.setState({ cbDialog: false });
        }} onRclick={() => {
          this.props.router.push('/messbox');
        }} showMess={ !(this.props.children.type.name === 'Dialogue')}/>
        <Simple toClose={this.state.cbDialog} onLclick={() => {
          this.setState({ cbDialog: true });
        }} onRclick={() => {
          this.setState({ cbDialog: true });
          this.props.router.goBack();
        }} content="确定跳转?"/>
        <Loading toClose={this.props.isrootLoaded}/>
        { this.props.children }
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.object.isRequired,
  rootLoad: React.PropTypes.func,
  isrootLoaded: React.PropTypes.bool
};

function mapStateToProps (state) {
  const root = state.root;
  return {
    isrootLoaded: root.isrootLoaded
  };
}

function mapDispatchProps (dispatch) {
  return {
    rootLoad: bool => dispatch(rootLoad())
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Index);
