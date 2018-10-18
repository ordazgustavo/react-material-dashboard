import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Drawer, Divider, IconButton } from '@material-ui/core'
import { ChevronRight, ChevronLeft } from '@material-ui/icons'

import DrawerMenu from '../DrawerMenu/DrawerMenu'

const drawerWidth = 240

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})

const SideDrawer = ({ classes, open, theme, routes, handleDrawerState }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
    }}
    open={open}
  >
    <div className={classes.toolbar}>
      <Typography variant="subtitle1" color="inherit" noWrap>
        Dashboard
      </Typography>
      <IconButton onClick={handleDrawerState}>
        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </div>
    <Divider />
    <DrawerMenu routes={routes} />
  </Drawer>
)

export default withStyles(styles)(SideDrawer)
