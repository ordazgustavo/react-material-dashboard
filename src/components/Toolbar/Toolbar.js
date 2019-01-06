import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Input,
  Badge
} from '@material-ui/core'
import {
  MenuRounded,
  SearchRounded,
  MailRounded,
  NotificationsRounded,
  MoreRounded,
  InvertColorsRounded,
  AccountCircleRounded,
  ExitToAppRounded
} from '@material-ui/icons'

import styles from './Toolbar.styles'

const AppToolbar = ({
  classes,
  isMenuOpen,
  open,
  isTop,
  handleDrawerState,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
  handleLogout,
  changeTheme,
  children
}) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerState}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <MenuRounded />
      </IconButton>
      <Typography
        className={classes.title}
        variant="h6"
        color="inherit"
        noWrap
      >
        React Material Dashboard
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchRounded />
        </div>
        <Input
          placeholder="Search…"
          disableUnderline
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton color="inherit">
          <Badge className={classes.margin} badgeContent={4} color="secondary">
            <MailRounded />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge
            className={classes.margin}
            badgeContent={17}
            color="secondary"
          >
            <NotificationsRounded />
          </Badge>
        </IconButton>
        <IconButton
          aria-owns={isMenuOpen ? 'material-appbar' : null}
          aria-haspopup="true"
          onClick={changeTheme}
          color="inherit"
        >
          <InvertColorsRounded />
        </IconButton>
        <IconButton
          aria-owns={isMenuOpen ? 'material-appbar' : null}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleRounded />
        </IconButton>
        <IconButton onClick={handleLogout} color="inherit">
          <ExitToAppRounded />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreRounded />
        </IconButton>
      </div>
    </Toolbar>
    {children}
  </AppBar>
)

export default withStyles(styles)(AppToolbar)
