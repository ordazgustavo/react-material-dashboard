import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

const CustomTabs = withStyles(theme => ({
  root: {
    minHeight: theme.spacing.unit * 5
  },
  indicator: {
    background: '#fff',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    height: 3
  }
}))(Tabs)

const CustomTab = withStyles(theme => ({
  root: {
    minHeight: theme.spacing.unit * 5
  }
}))(Tab)

export { CustomTabs, CustomTab }
