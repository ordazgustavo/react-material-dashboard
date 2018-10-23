import { withStyles } from '@material-ui/core/styles'
import { TableCell } from '@material-ui/core'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.background.default,
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 0
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

export { CustomTableCell }
