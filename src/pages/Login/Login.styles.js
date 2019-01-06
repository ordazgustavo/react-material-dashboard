const styles = ({ spacing, palette }) => ({
  layout: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  avatar: {
    margin: spacing.unit,
    backgroundColor: palette.secondary.main
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  submit: {
    marginTop: spacing.unit * 3
  }
})

export default styles
