import React from 'react'
import { Link } from '@reach/router'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

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
