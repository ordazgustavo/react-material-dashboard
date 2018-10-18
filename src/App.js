import React from 'react'
import { Router, Redirect } from '@reach/router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from './pages/Home'
import Login from './pages/Login/Login'

import AuthProvider from './utils/auth/AuthProvider'
import AuthContext from './utils/auth/AuthContext'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'dark'
  }
})

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {context => {
      if (context.user.id) {
        return (
          <MuiThemeProvider
            theme={context.user.theme === 'light' ? theme : darkTheme}
          >
            <Component {...rest} />
          </MuiThemeProvider>
        )
      }
      return <Redirect noThrow from="/" to="/login" />
    }}
  </AuthContext.Consumer>
)

const App = () => (
  <AuthProvider>
    <Router>
      <ProtectedRoute component={Home} path="/*" />
      <Login path="/login" />
    </Router>
  </AuthProvider>
)

export default App
