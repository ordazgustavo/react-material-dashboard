import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import auth from '../../utils/auth'

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

const CustomPaper = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 4,
    width: '90%',
    maxWidth: 400
  }
}))(Paper)

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  submitHandler = event => {
    event.preventDefault()
    auth.authenticate(() => {})
    navigate('/dashboard')
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <main className={classes.layout}>
        <CustomPaper>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Sign in</Typography>
          <form onSubmit={this.submitHandler} className={classes.loginForm}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              // autoFocus
              margin="normal"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="raised"
              color="primary"
            >
              Submit
            </Button>
          </form>
          <Typography variant="caption">
            Hint: just hit submit, you'll be redirected to the dashboard
          </Typography>
        </CustomPaper>
      </main>
    )
  }
}

export default withStyles(styles)(Login)