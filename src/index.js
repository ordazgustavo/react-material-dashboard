import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'
import ErrorBoundary from './hoc/ErrorBoundary'

import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const APP = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </MuiThemeProvider>
)

ReactDOM.render(APP, document.getElementById('root'))
registerServiceWorker()
