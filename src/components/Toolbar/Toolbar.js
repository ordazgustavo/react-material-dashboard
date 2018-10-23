import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
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

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

const AppToolbar = ({
  classes,
  isMenuOpen,
  open,
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
