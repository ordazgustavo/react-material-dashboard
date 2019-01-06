import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Drawer, Divider, IconButton } from '@material-ui/core'
import { ChevronRightRounded, ChevronLeftRounded } from '@material-ui/icons'

import DrawerMenu from '../DrawerMenu/DrawerMenu'

import { drawerWidthMultiplier } from '../../utils/constants'

const styles = ({ transitions, spacing, mixins }) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: spacing.unit * drawerWidthMultiplier,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    }),
    width: spacing.unit * 8.5
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...mixins.toolbar
  }
})

function SideDrawer({ classes, open, theme, routes, handleDrawerState }) {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <Typography variant="subtitle1" noWrap>
          Dashboard
        </Typography>
        <IconButton onClick={handleDrawerState}>
          {theme.direction === 'rtl' ? (
            <ChevronRightRounded />
          ) : (
            <ChevronLeftRounded />
          )}
        </IconButton>
      </div>
      <Divider />
      <DrawerMenu routes={routes} isDrawerOpen={open} />
    </Drawer>
  )
}

export default withStyles(styles)(SideDrawer)
