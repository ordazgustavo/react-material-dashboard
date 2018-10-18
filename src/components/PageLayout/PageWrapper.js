import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 6
  }
})

const PageWrapper = ({ classes, children }) => (
  <Typography className={classes.root} variant="body1" component="div">
    {children}
  </Typography>
)

export default withStyles(styles)(PageWrapper)
