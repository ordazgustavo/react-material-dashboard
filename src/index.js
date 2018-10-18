import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'
import ErrorBoundary from './hoc/ErrorBoundary'

import registerServiceWorker from './registerServiceWorker'

const APP = (
  <ErrorBoundary>
    <CssBaseline />
    <App />
  </ErrorBoundary>
)

ReactDOM.render(APP, document.getElementById('root'))
registerServiceWorker()
