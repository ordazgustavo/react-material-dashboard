import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const APP = (
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>
)

ReactDOM.render(APP, document.getElementById('root'))
registerServiceWorker()
