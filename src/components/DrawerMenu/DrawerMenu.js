import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { List, Collapse, Divider } from '@material-ui/core'

import MenuItem from './MenuItem'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  menuOpen: {
    backgroundColor: theme.palette.background.default
  }
})

function NestedList({ classes, routes }) {
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
      <List component="nav">
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
                />
                {route.multiple && (
                  <Collapse
                    in={isOpen[route.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {route.options.map(nested => (
                        <MenuItem
                          key={nested.label}
                          {...nested}
                          className={classes.nested}
                          selectHandler={setSelectedRoute}
                          selected={selectedRoute === nested.to}
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
  routes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withStyles(styles)(NestedList)
