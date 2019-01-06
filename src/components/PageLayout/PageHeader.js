import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = ({ palette, spacing, mixins }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    padding: spacing.unit * 3,
    paddingBottom: 0,
    marginTop: mixins.toolbar.minHeight
  },
  title: {
    marginBottom: spacing.unit * 3,
    color: palette.primary.contrastText
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
