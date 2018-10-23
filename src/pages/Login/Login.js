import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { LockRounded } from '@material-ui/icons'

import AuthContext from '../../utils/auth/AuthContext'

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

  submitHandler = authenticate => e => {
    e.preventDefault()
    const { email, password } = this.state
    authenticate(email, password)
    navigate('/')
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    const { email, password } = this.state

    return (
      <AuthContext.Consumer>
        {context => (
          <main className={classes.layout}>
            <CustomPaper>
              <Avatar className={classes.avatar}>
                <LockRounded />
              </Avatar>
              <Typography variant="h5">Sign in</Typography>
              <form
                onSubmit={this.submitHandler(context.authenticate)}
                className={classes.loginForm}
              >
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  // autoFocus
                  margin="normal"
                  fullWidth
                />
                <TextField
                  label="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  margin="normal"
                  fullWidth
                />
                <Button
                  className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            </CustomPaper>
          </main>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default withStyles(styles)(Login)
