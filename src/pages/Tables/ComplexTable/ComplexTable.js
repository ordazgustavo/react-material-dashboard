import React, { Fragment, useState } from 'react'
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

import CustomTablePagination from '../../../components/Table/Pagination/Pagination'
import PageWrapper from '../../../components/PageLayout/PageWrapper'
import CustomTableCell from '../../../components/Table/Table'
import styles from './ComplexTable.styles'

let counter = 0
function createData(name, calories, fat) {
  counter += 1
  return { id: counter, name, calories, fat }
}

const rows = [
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
].sort((a, b) => (a.calories < b.calories ? -1 : 1))

function ComplexTable({ classes }) {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <Fragment>
      <PageWrapper>
        <Paper className={classes.root}>
          <form className={classes.filters} onSubmit={e => e.preventDefault()}>
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
                  onChangePage={(e, pageNumber) => setPage(pageNumber)}
                  onChangeRowsPerPage={e => setRowsPerPage(e.target.value)}
                  ActionsComponent={CustomTablePagination}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </PageWrapper>
    </Fragment>
  )
}

ComplexTable.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default withStyles(styles)(ComplexTable)
