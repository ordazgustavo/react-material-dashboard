import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing.unit * 3,
    paddingBottom: 0,
    marginTop: theme.mixins.toolbar.minHeight
  },
  title: {
    marginBottom: theme.spacing.unit * 3,
    color: theme.palette.primary.contrastText
  }
})

function PageHeader({ classes, title, children }) {
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
      </div>
      {children}
    </div>
  )
}
export default withStyles(styles)(PageHeader)
