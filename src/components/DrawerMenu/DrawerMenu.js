import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { List, Collapse, Divider } from '@material-ui/core'

import MenuItem from './MenuItem'

const styles = ({ palette, spacing }) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: palette.background.paper
  },
  nested: {
    paddingLeft: spacing.unit * 4
  },
  menuOpen: {
    backgroundColor: palette.background.default
  }
})

function NestedList({ classes, routes, isDrawerOpen }) {
  const [isOpen, setIsOpen] = useState({})
  const [selectedRoute, setSelectedRoute] = useState('')

  function handleClick(name) {
    setIsOpen({
      ...isOpen,
      [name]: !isOpen[name]
    })
  }

  return (
    <div className={classes.root}>
      <List component="nav" disablePadding>
        {routes.length
          ? routes.map(route => (
              <div
                key={route.label}
                className={classNames(isOpen[route.name] && classes.menuOpen)}
              >
                <MenuItem
                  {...route}
                  open={isOpen[route.name]}
                  selected={selectedRoute === route.to}
                  clickHandler={handleClick}
                  selectHandler={setSelectedRoute}
                  isDrawerOpen={isDrawerOpen}
                  caption={
                    route.multiple
                      ? route.options.map(opt => opt.title).join(', ')
                      : null
                  }
                />
                {route.multiple && (
                  <Collapse
                    in={isOpen[route.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div">
                      {route.options.map(nested => (
                        <MenuItem
                          key={nested.label}
                          {...nested}
                          child
                          className={classes.nested}
                          selectHandler={setSelectedRoute}
                          selected={selectedRoute === nested.to}
                          isDrawerOpen={isDrawerOpen}
                        />
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider />
              </div>
            ))
          : null}
      </List>
    </div>
  )
}

NestedList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDrawerOpen: PropTypes.bool.isRequired
}

export default withStyles(styles)(NestedList)
