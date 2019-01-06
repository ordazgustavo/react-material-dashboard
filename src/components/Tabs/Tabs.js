import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

const CustomTabs = withStyles(({ spacing, shape }) => ({
  root: {
    minHeight: spacing.unit * 5
  },
  indicator: {
    background: '#fff',
    borderTopLeftRadius: shape.borderRadius,
    borderTopRightRadius: shape.borderRadius,
    height: 3
  }
}))(Tabs)

const CustomTab = withStyles(({ spacing }) => ({
  root: {
    minHeight: spacing.unit * 5
  }
}))(Tab)

export { CustomTabs, CustomTab }
