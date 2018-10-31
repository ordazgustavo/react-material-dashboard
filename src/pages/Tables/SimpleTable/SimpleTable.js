import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core'

import PageWrapper from '../../../components/PageLayout/PageWrapper'
import CustomTableCell from '../../../components/Table/Table'
import styles from './SimpleTable.styles'

let counter = 0
function createData(data) {
  counter += 1
  return { id: counter, ...data }
}

function SimpleTable({ classes }) {
  const cols = [
    createData({ label: 'Dessert (100g serving)' }),
    createData({ label: 'Calories', numeric: true }),
    createData({ label: 'Protein (g)', numeric: true })
  ]
  const rows = [
    createData({ name: 'Cupcake', calories: 305, fat: 3.7 }),
    createData({ name: 'Donut', calories: 452, fat: 25.0 }),
    createData({ name: 'Eclair', calories: 262, fat: 16.0 }),
    createData({ name: 'Frozen yoghurt', calories: 159, fat: 6.0 }),
    createData({ name: 'Gingerbread', calories: 356, fat: 16.0 }),
    createData({ name: 'Honeycomb', calories: 408, fat: 3.2 }),
    createData({ name: 'Ice cream sandwich', calories: 237, fat: 9.0 }),
    createData({ name: 'Jelly Bean', calories: 375, fat: 0.0 }),
    createData({ name: 'KitKat', calories: 518, fat: 26.0 }),
    createData({ name: 'Lollipop', calories: 392, fat: 0.2 }),
    createData({ name: 'Marshmallow', calories: 318, fat: 0 }),
    createData({ name: 'Nougat', calories: 360, fat: 19.0 }),
    createData({ name: 'Oreo', calories: 437, fat: 18.0 })
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1))

  return (
    <PageWrapper>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {cols.map(({ label, ...rest }) => (
                <CustomTableCell key={rest.id} {...rest}>
                  {label}
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </PageWrapper>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default withStyles(styles)(SimpleTable)
