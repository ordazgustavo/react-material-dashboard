import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import RegularForm from './RegularForm/RegularForm'
import FormikForm from './FormikForm/FormikForm'
import { formsPageStyles } from './Forms.styles'

const Forms = ({ classes, title }) => (
  <Fragment>
    <PageHeader title={title} />
    <PageWrapper>
      <Paper className={classes.root}>
        <Router>
          <RegularForm path="regular-form" />
          <FormikForm path="formik-form" />
        </Router>
      </Paper>
    </PageWrapper>
  </Fragment>
)

export default withStyles(formsPageStyles)(Forms)
