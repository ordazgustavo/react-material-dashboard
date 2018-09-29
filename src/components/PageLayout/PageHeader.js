import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme =>
  console.log(theme) || {
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing.unit * 3,
      paddingBottom: 0,
      marginTop: theme.spacing.unit * 8
    },
    title: {
      marginBottom: theme.spacing.unit * 3,
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold'
    }
  }

const PageHeader = ({ classes, title, children }) => (
  <div className={classes.root}>
    <div>
      <Typography className={classes.title} variant="title" component="h2">
        {title}
      </Typography>
    </div>
    {children}
  </div>
)

export default withStyles(styles)(PageHeader)
