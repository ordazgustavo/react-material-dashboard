import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'
import Login from './pages/Login/Login'
import registerServiceWorker from './registerServiceWorker'

const APP = (
  <Fragment>
    <CssBaseline />
    <Router>
      <Login path="/" />
      <App path="dashboard/*" />
    </Router>
  </Fragment>
)

ReactDOM.render(APP, document.getElementById('root'))
registerServiceWorker()
