import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  InputBase,
  InputAdornment,
  Divider
} from '@material-ui/core'
import { SearchRounded } from '@material-ui/icons'

import TablePaginationActions from '../../../components/TablePagination/TablePagination'
import PageWrapper from '../../../components/PageLayout/PageWrapper'

let counter = 0
function createData(name, calories, fat) {
  counter += 1
  return { id: counter, name, calories, fat }
}

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 500
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    width: '100%'
  }
})

class Tables extends React.Component {
  state = {
    rows: [
      createData('Cupcake', 305, 3.7),
      createData('Donut', 452, 25.0),
      createData('Eclair', 262, 16.0),
      createData('Frozen yoghurt', 159, 6.0),
      createData('Gingerbread', 356, 16.0),
      createData('Honeycomb', 408, 3.2),
      createData('Ice cream sandwich', 237, 9.0),
      createData('Jelly Bean', 375, 0.0),
      createData('KitKat', 518, 26.0),
      createData('Lollipop', 392, 0.2),
      createData('Marshmallow', 318, 0),
      createData('Nougat', 360, 19.0),
      createData('Oreo', 437, 18.0)
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 5
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const { classes } = this.props
    const { rows, rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    return (
      <Fragment>
        <PageWrapper>
          <Paper className={classes.root}>
            <form className={classes.filters} onSubmit={this.handleSubmit}>
              <InputBase
                id="adornment-password"
                className={classNames(classes.margin, classes.textField)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchRounded />
                  </InputAdornment>
                }
                placeholder="Search..."
              />
            </form>
            <Divider />
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                  <CustomTableCell numeric>Calories</CustomTableCell>
                  <CustomTableCell numeric>Protein (g)</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell numeric>{row.calories}</TableCell>
                      <TableCell numeric>{row.fat}</TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
        </PageWrapper>
      </Fragment>
    )
  }
}

Tables.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Tables)
