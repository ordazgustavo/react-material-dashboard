import React, { Component } from 'react'
import { Router } from '@reach/router'
import withStyles from '@material-ui/core/styles/withStyles'
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'

import Dashboard from './Dashboard/Dashboard'
import Forms from './Forms/Forms'
import Headings from './Headings/Headings'
import Tables from './Tables/Tables'

import styles from './Home.styles'
import routes from '../routes'
import Toolbar from '../components/Toolbar/Toolbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'

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
  handleProfileMenuOpen
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
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton color="inherit">
        <Badge className={classes.margin} badgeContent={11} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
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
            <Dashboard path="dashboard/*" />
            <Forms path="forms/*" />
            <Headings path="headings/*" />
            <Tables path="tables/*" />
          </Router>
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Home)
