import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = ({ spacing }) => ({
  root: {
    margin: spacing.unit * 3,
    marginTop: spacing.unit * 6
  }
})

function PageWrapper({ classes, children }) {
  return (
    <Typography className={classes.root} variant="body1" component="div">
      {children}
    </Typography>
  )
}

export default withStyles(styles)(PageWrapper)
