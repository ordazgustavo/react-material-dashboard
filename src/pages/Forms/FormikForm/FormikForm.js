import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, FieldArray } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

import { initialValues, validation } from './FormStructure'
import InputType from '../../../components/InputType/InputType'
import FormikDebugger from '../../../utils/debuggers/FormikDebugger'
import { formStyles } from '../Forms.styles'

const FormikForm = ({ classes }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validation}
    onSubmit={(values, actions) => {
      // eslint-disable-next-line
      console.log(values, actions)
    }}
  >
    {props => {
      const { isSubmitting, dirty, values } = props
      return (
        <Form className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Field
                component={InputType}
                className={classes.textField}
                name="firstName"
                label="Name"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                component={InputType}
                className={classes.textField}
                name="lastName"
                label="Last Name"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                component={InputType}
                className={classes.textField}
                name="email"
                label="Email"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                component={InputType}
                className={classes.textField}
                name="phoneNumber"
                label="Phone Number"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                type="select"
                component={InputType}
                className={classes.textField}
                name="type"
                label="User Type"
                margin="normal"
                options={[
                  {
                    value: 'user',
                    displayValue: 'User'
                  },
                  {
                    value: 'comercial',
                    displayValue: 'Comercial'
                  },
                  {
                    value: 'e-commerce',
                    displayValue: 'E-Commerce'
                  }
                ]}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                type="checkbox"
                component={InputType}
                className={classes.textField}
                name="isCompany"
                label="Company"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                type="radio"
                component={InputType}
                className={classes.textField}
                name="gender"
                label="Gender"
                options={[
                  {
                    value: 'female',
                    label: 'Female'
                  },
                  {
                    value: 'male',
                    label: 'Male'
                  },
                  {
                    value: 'other',
                    label: 'Other'
                  }
                ]}
              />
            </Grid>
            <Grid item xs={6}>
              <FieldArray
                name="songs"
                render={arrayHelper => (
                  <InputType
                    type="checkbox-group"
                    label="Favorite Songs"
                    name="songs"
                    values={values}
                    {...arrayHelper}
                    className={classes.textField}
                    options={[
                      {
                        value: 'Stressed Out',
                        label: 'Stressed Out'
                      },
                      {
                        value: 'Addict With A Pen',
                        label: 'Addict With A Pen'
                      },
                      {
                        value: 'Car Radio',
                        label: 'Car Radio'
                      }
                    ]}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!dirty || isSubmitting}
              >
                submit
              </Button>
            </Grid>
          </Grid>
          <FormikDebugger {...props} />
        </Form>
      )
    }}
  </Formik>
)

FormikForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default withStyles(formStyles)(FormikForm)
