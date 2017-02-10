import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/loading/load';
import { loaded } from '../redux/home/actions';
import './favicon.ico';

class Index extends React.Component {
  constructor (props) {
    super(props);
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
