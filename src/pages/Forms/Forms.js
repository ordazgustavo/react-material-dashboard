import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import RegularForm from './RegularForm/RegularForm'
import FormikForm from './FormikForm/FormikForm'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    overflowX: 'auto'
  }
})

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

export default withStyles(styles)(Forms)
