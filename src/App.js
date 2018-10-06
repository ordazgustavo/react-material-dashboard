import React from 'react'
import { Router, Redirect } from '@reach/router'

import Home from './pages/Home'
import Login from './pages/Login/Login'

import AuthProvider from './utils/auth/AuthProvider'
import AuthContext from './utils/auth/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {context => {
      if (context.user.id) {
        return <Component {...rest} />
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
