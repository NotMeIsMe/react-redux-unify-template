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
      cbDialog: true,
      toHideBar: false,
      scrollTop: 0
    };

    this.rootLoad = this.props.rootLoad.bind(this);
  }

  componentDidMount () {
    // 加载完毕
    this.rootLoad(true);
  }

  render () {
    return (
      <div onScroll={e => {
        const scrollTopCurr = e.target.scrollTop;
        const scrollTop = this.state.scrollTop;
        const toHideBar = this.state.toHideBar;

        if ((scrollTopCurr - scrollTop) > 0 && !toHideBar) {
          this.setState({ scrollTop: scrollTopCurr, toHideBar: true });
        } else if ((scrollTopCurr - scrollTop) < 0 && toHideBar) {
          this.setState({ scrollTop: scrollTopCurr, toHideBar: false });
        } else {
          this.setState({ scrollTop: scrollTopCurr });
        }
      }}>
        <ToolBar toHide={ this.state.toHideBar } count={2} title="App" onLclick={() => {
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
        <Loading toClose={this.props.isrootLoaded}/>

        { React.cloneElement(this.props.children, { isBarHide: this.state.toHideBar }) }
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
    rootLoad: bool => dispatch(rootLoad(bool))
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Index);
