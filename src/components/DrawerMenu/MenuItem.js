import React from 'react'
import { Link } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

const MenuItem = ({
  to,
  clickHandler,
  selectHandler,
  multiple,
  name,
  icon: Icon,
  label,
  open,
  ...rest
}) => {
  if (multiple) {
    return (
      <ListItem button onClick={() => clickHandler(name)} {...rest}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText inset primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    )
  }
  return (
    <ListItem
      button
      onClick={() => selectHandler(to)}
      component={Link}
      to={to}
      {...rest}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText inset primary={label} />
    </ListItem>
  )
}

export default withStyles(styles)(MenuItem)
