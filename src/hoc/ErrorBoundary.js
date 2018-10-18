import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props

    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundary
