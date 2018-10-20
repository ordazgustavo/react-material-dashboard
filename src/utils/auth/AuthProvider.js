/* eslint react/no-unused-state: 0 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AuthContext from './AuthContext'

export default class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    theme: localStorage.theme,
    id: 'lima123',
    name: 'Gustavo',
    email: 'me@ordazgustavo.com'
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

  changeTheme = () => {
    this.setState(prevState => {
      const theme = prevState.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
      return {
        theme
      }
    })
  }

  render() {
    const { children } = this.props
    return (
      <AuthContext.Provider
        value={{
          user: this.state,
          authenticate: this.authenticate,
          logout: this.logout,
          changeTheme: this.changeTheme
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}
