import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

import formStructure, { initialValues, validation } from './FormStructure'
import InputType from '../../../components/InputType/InputType'
import FormikDebugger from '../../../utils/debuggers/FormikDebugger'
import styles from '../form.styles'

const FormikForm = ({ classes }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validation}
    onSubmit={(values, actions) => {
      console.log(values, actions)
    }}
  >
    {props => {
      const { isSubmitting, dirty } = props
      return (
        <Form className={classes.container}>
          <div className={classes.inputContainer}>
            {formStructure.map(element => (
              <Field
                key={element.name}
                component={InputType}
                className={classes.textField}
                {...element}
              />
            ))}
          </div>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={!dirty || isSubmitting}
            >
              submit
            </Button>
          </div>
          <FormikDebugger {...props} />
        </Form>
      )
    }}
  </Formik>
)

FormikForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default withStyles(styles)(FormikForm)
