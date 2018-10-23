import React, { Component } from 'react'
import { Router } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core'
import {
  MailRounded,
  NotificationsRounded,
  AccountCircleRounded,
  InvertColorsRounded,
  ExitToAppRounded
} from '@material-ui/icons'

import {
  AsyncDashboard,
  AsyncForms,
  AsyncHeadings,
  AsyncTables
} from './index'

import styles from './Home.styles'
import routes from '../routes'
import Toolbar from '../components/Toolbar/Toolbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import AuthContext from '../utils/auth/AuthContext'

const ProfileMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
)

const MobileMenu = ({
  classes,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  handleLogout,
  changeTheme
}) => (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton color="inherit">
        <Badge className={classes.margin} badgeContent={4} color="secondary">
          <MailRounded />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton color="inherit">
        <Badge className={classes.margin} badgeContent={11} color="secondary">
          <NotificationsRounded />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton color="inherit">
        <AccountCircleRounded />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
    <MenuItem onClick={changeTheme}>
      <IconButton color="inherit">
        <InvertColorsRounded />
      </IconButton>
      <p>Theme</p>
    </MenuItem>
    <MenuItem onClick={handleLogout}>
      <IconButton color="inherit">
        <ExitToAppRounded />
      </IconButton>
      <p>Sign out</p>
    </MenuItem>
  </Menu>
)

class Home extends Component {
  state = {
    open: false,
    anchorEl: null,
    mobileMoreAnchorEl: null
  }

  handleDrawerState = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  render() {
    console.log('render -> <Home />')
    const { classes, theme } = this.props

    const { open, anchorEl, mobileMoreAnchorEl } = this.state

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    return (
      <AuthContext.Consumer>
        {context => (
          <div className={classes.root}>
            <Toolbar
              isMenuOpen={isMenuOpen}
              open={open}
              isMobileMenuOpen={isMobileMenuOpen}
              handleDrawerState={this.handleDrawerState}
              handleProfileMenuOpen={this.handleProfileMenuOpen}
              handleMenuClose={this.handleMenuClose}
              handleMobileMenuOpen={this.handleMobileMenuOpen}
              handleMobileMenuClose={this.handleMobileMenuClose}
              handleLogout={context.logout}
              changeTheme={context.changeTheme}
            >
              <ProfileMenu
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={this.handleMenuClose}
              />
              <MobileMenu
                classes={classes}
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={this.handleMobileMenuClose}
                handleProfileMenuOpen={this.handleProfileMenuOpen}
                handleLogout={context.logout}
                changeTheme={context.changeTheme}
              />
            </Toolbar>
            <SideDrawer
              routes={routes}
              open={open}
              theme={theme}
              handleDrawerState={this.handleDrawerState}
            />
            <main className={classes.content}>
              <Router>
                <AsyncDashboard path="/*" title="Dashboard" />
                <AsyncForms path="forms/*" title="Forms" />
                <AsyncHeadings path="headings/*" title="Headings" />
                <AsyncTables path="tables/*" title="Tables" />
              </Router>
            </main>
          </div>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Home)
