const styles = theme => ({
  layout: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

export default styles
