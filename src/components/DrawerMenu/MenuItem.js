import React from 'react'
import { Link } from '@reach/router'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const MenuItem = ({
  to,
  clickHandler,
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
    <ListItem button component={Link} to={to} {...rest}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText inset primary={label} />
    </ListItem>
  )
}

export default MenuItem
