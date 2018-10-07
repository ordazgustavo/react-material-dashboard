export default theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: theme.direction === 'ltr' ? 'flex-end' : 'flex-start'
  },
  textField: {
    paddingRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
})
