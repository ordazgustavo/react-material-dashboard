import React, { Component, useState, useContext } from 'react'
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
import styles from './Login.styles'

const LoginPaper = withStyles(theme => ({
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

function Login({ classes }) {
  const email = useFormInput('')
  const password = useFormInput('')

  const authContext = useContext(AuthContext)

  function handleSubmit(authenticate) {
    return e => {
      e.preventDefault()
      authenticate(email.value, password.value)
      navigate('/')
    }
  }

  return (
    <main className={classes.layout}>
      <LoginPaper>
        <Avatar className={classes.avatar}>
          <LockRounded />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <form
          onSubmit={handleSubmit(authContext.authenticate)}
          className={classes.loginForm}
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            margin="normal"
            fullWidth
            {...email}
          />
          <TextField
            label="Password"
            name="password"
            margin="normal"
            fullWidth
            {...password}
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
      </LoginPaper>
    </main>
  )
}

export default withStyles(styles)(Login)
