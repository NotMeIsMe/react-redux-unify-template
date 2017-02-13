import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import contactValidation from './contactValidation';

class ContactForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={ renderField } type="text" label="First Name"/>
        </div>
        <div>
          <Field name="lastName" component={ renderField } type="text" label="Last Name"/>
        </div>
        <div>
          <Field name="email" component={ renderField } type="email" label="Email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'contact',
  validate: contactValidation
})(ContactForm);


