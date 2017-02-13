import React from 'react';
import { connect } from 'react-redux';
import styles from './hello.css';
import { userLogin } from '../../redux/test/actions';
import ContactForm from './contactForm';

class Hello extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (values) {
    this.props.userLogin(values);
  }
  render () {
    return <div className={ styles.hello }>
            <ContactForm onSubmit={this.handleSubmit} />
            <h3> { this.props.isFetching ? <span>isFetching for 2012...</span> : <pre>{ JSON.stringify(this.props.user)}</pre> }</h3>
            { this.props.errorMessage && <div className="error">{ this.props.errorMessage }</div> }
          </div>;
  }
}

Hello.propTypes = {
  user: React.PropTypes.object,
  isFetching: React.PropTypes.bool,
  uid: React.PropTypes.number,
  errorMessage: React.PropTypes.string,
  userLogin: React.PropTypes.func.isRequired
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
    userLogin: value => dispatch(userLogin(value))
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Hello);
