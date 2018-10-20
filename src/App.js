import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home'
import Login from './pages/Login/Login'

import AuthProvider from './utils/auth/AuthProvider'
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'

const App = () => (
  <AuthProvider>
    <Router>
      <ProtectedRoute component={Home} path="/*" />
      <Login path="/login" />
    </Router>
  </AuthProvider>
)

export default App
