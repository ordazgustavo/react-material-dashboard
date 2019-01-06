import React from 'react'
import { Link } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLessRounded, ExpandMoreRounded } from '@material-ui/icons'

const styles = ({ palette }) => ({
  root: {
    color: palette.text.primary
  }
})

const CustomListItem = withStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing.unit * 2 + 4,
    paddingBottom: spacing.unit * 2 + 4,
    paddingRight: spacing.unit * 3,
    paddingLeft: spacing.unit * 3
  }
}))(ListItem)

const SmallListItem = withStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing.unit,
    paddingBottom: spacing.unit
  }
}))(ListItem)

const SmallListItemText = withStyles(({ typography }) => ({
  primary: {
    ...typography.subtitle2
  },
  secondary: {
    ...typography.caption
  }
}))(ListItemText)

// const CustomListItemIcon = withStyles(() => ({
//   root: {
//     margin: 0
//   }
// }))(ListItemIcon)

function MenuItem({
  to,
  clickHandler,
  selectHandler,
  multiple,
  name,
  icon: Icon,
  label,
  caption,
  open,
  isDrawerOpen,
  child,
  ...rest
}) {
  if (multiple) {
    return (
      <CustomListItem button onClick={() => clickHandler(name)} {...rest}>
        {isDrawerOpen ? (
          <>
            <ListItemText
              primary={label}
              secondary={caption}
              secondaryTypographyProps={{
                noWrap: true,
                variant: 'caption'
              }}
            />
            {open ? <ExpandLessRounded /> : <ExpandMoreRounded />}
          </>
        ) : (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
      </CustomListItem>
    )
  }
  if (child) {
    return (
      <SmallListItem
        button
        onClick={() => selectHandler(to)}
        component={Link}
        to={to}
        {...rest}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <SmallListItemText primary={label} />
      </SmallListItem>
    )
  }
  return (
    <CustomListItem
      button
      onClick={() => selectHandler(to)}
      component={Link}
      to={to}
      {...rest}
    >
      {isDrawerOpen ? (
        <ListItemText primary={label} />
      ) : (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
    </CustomListItem>
  )
}

export default withStyles(styles)(MenuItem)
