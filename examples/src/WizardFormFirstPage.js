import React from 'react'
import { Field, reduxForm, FormSection } from 'redux-form'
import renderField from './renderField'

const WizardFormFirstPage = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormSection name="names">
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
      </FormSection>
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  onSubmit: (values, dispatch, props) => {
    props.history.push('2');
  }

})(WizardFormFirstPage)
