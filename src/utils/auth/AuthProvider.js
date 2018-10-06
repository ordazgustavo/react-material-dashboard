/* eslint react/no-unused-state: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AuthContext from './AuthContext'

export default class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    id: null,
    name: '',
    email: ''
  }

  authenticate = (email, password) => {
    console.log(email, password)

    this.setState({
      id: 'lima123',
      name: 'Gustavo',
      email: 'me@ordazgustavo.com'
    })
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    const { children } = this.props
    return (
      <AuthContext.Provider
        value={{
          user: this.state,
          authenticate: this.authenticate,
          logout: this.logout
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}
