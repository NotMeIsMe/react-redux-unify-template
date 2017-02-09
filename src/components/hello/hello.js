import React from 'react';
import { connect } from 'react-redux';
import styles from './hello.css';
import { loadUser } from '../../redux/test/actions';
import Loading from '../loading/load';

class Hello extends React.Component {
  render () {
    return <div className={ styles.hello }>
            <Loading toClose={!this.props.isFetching}/>
            <button onClick={() => {
              this.props.loadUser(2012);
            }}>async</button>
            <h3> { this.props.isFetching ? <span>isFetching for 2012...</span> : <pre>{ JSON.stringify(this.props.user)}</pre> }</h3>
            { this.props.errorMessage && <div className="error">errorMessage</div> }
          </div>;
  }
}

Hello.propTypes = {
  user: React.PropTypes.object,
  isFetching: React.PropTypes.bool,
  uid: React.PropTypes.number,
  errorMessage: React.PropTypes.string,
  loadUser: React.PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const test = state.test;
  return {
    user: test.user,
    isFetching: test.isFetching,
    uid: test.uid,
    errorMessage: test.errorMessage
  };
}
function mapDispatchProps (dispatch) {
  return {
    loadUser: uid => dispatch(loadUser(uid))
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Hello);
