import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme =>
  console.log(theme) || {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 8
    },
    title: {
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold'
    }
  }

const PageHeader = ({ classes, title, children }) => (
  <div className={classes.root}>
    <Typography className={classes.title} variant="title" component="h2">
      {title}
    </Typography>
    {children}
  </div>
)

export default withStyles(styles)(PageHeader)
