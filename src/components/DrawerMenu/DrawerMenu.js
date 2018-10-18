import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, Collapse } from '@material-ui/core'

import MenuItem from './MenuItem'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class NestedList extends React.Component {
  state = {
    isOpen: {}
  }

  handleClick = name => {
    this.setState(state => ({
      isOpen: {
        ...state.isOpen,
        [name]: !state.isOpen[name]
      }
    }))
  }

  render() {
    const { classes, routes } = this.props
    const { isOpen } = this.state

    return (
      <div className={classes.root}>
        <List component="nav">
          {routes.length
            ? routes.map(route => (
                <React.Fragment key={route.label}>
                  <MenuItem
                    {...route}
                    open={isOpen[route.name]}
                    clickHandler={this.handleClick}
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
                          />
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
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
