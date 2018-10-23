import React from 'react'
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

class NestedList extends React.Component {
  state = {
    isOpen: {},
    selectedRoute: ''
  }

  handleClick = name => {
    this.setState(state => ({
      isOpen: {
        ...state.isOpen,
        [name]: !state.isOpen[name]
      }
    }))
  }

  markSelected = route => {
    this.setState({ selectedRoute: route })
  }

  render() {
    const { classes, routes } = this.props
    const { isOpen, selectedRoute } = this.state

    return (
      <div className={classes.root}>
        <List component="nav">
          {routes.length
            ? routes.map(route => (
                <div
                  key={route.label}
                  className={classNames(
                    isOpen[route.name] && classes.menuOpen
                  )}
                >
                  <MenuItem
                    {...route}
                    open={isOpen[route.name]}
                    selected={selectedRoute === route.to}
                    clickHandler={this.handleClick}
                    selectHandler={this.markSelected}
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
                            selectHandler={this.markSelected}
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
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NestedList)
