import React, { Suspense, useState, useContext } from 'react'
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

import { Dashboard, AsyncForms, AsyncHeadings, AsyncTables } from './index'

import styles from './Home.styles'
import routes from '../routes'
import Toolbar from '../components/Toolbar/Toolbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import AuthContext from '../utils/auth/AuthContext'

function ProfileMenu({ anchorEl, isMenuOpen, handleMenuClose }) {
  return (
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
}

function MobileMenu({
  classes,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  handleLogout,
  changeTheme
}) {
  return (
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
          <Badge
            className={classes.margin}
            badgeContent={11}
            color="secondary"
          >
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
}

function Home({ classes, theme }) {
  const [open, setOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const authContext = useContext(AuthContext)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleDrawerState() {
    setOpen(!open)
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMenuClose() {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  return (
    <div className={classes.root}>
      <Toolbar
        isMenuOpen={isMenuOpen}
        open={open}
        isMobileMenuOpen={isMobileMenuOpen}
        handleDrawerState={handleDrawerState}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMenuClose={handleMenuClose}
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleLogout={authContext.logout}
        changeTheme={authContext.changeTheme}
      >
        <ProfileMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
        <MobileMenu
          classes={classes}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleLogout={authContext.logout}
          changeTheme={authContext.changeTheme}
        />
      </Toolbar>
      <SideDrawer
        routes={routes}
        open={open}
        theme={theme}
        handleDrawerState={handleDrawerState}
      />
      <main className={classes.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Dashboard path="/*" title="Dashboard" />
            <AsyncForms path="forms/*" title="Forms" />
            <AsyncHeadings path="headings/*" title="Headings" />
            <AsyncTables path="tables/*" title="Tables" />
          </Router>
        </Suspense>
      </main>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Home)
