import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'
import ErrorBoundary from './hoc/ErrorBoundary'

import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme({
  shape: {
    borderRadius: 8
  },
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ErrorBoundary>
      <CssBaseline />
      <App />
    </ErrorBoundary>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
