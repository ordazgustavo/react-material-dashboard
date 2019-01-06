import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import {
  FirstPageRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  LastPageRounded
} from '@material-ui/icons'

const actionsStyles = ({ palette, spacing }) => ({
  root: {
    flexShrink: 0,
    color: palette.text.secondary,
    marginLeft: spacing.unit * 2.5
  }
})

function CustomTablePagination({
  classes,
  count,
  page,
  rowsPerPage,
  onChangePage,
  theme
}) {
  function handleFirstPageButtonClick(e) {
    onChangePage(e, 0)
  }
  function handleBackButtonClick(e) {
    onChangePage(e, page - 1)
  }
  function handleNextButtonClick(e) {
    onChangePage(e, page + 1)
  }
  function handleLastPageButtonClick(e) {
    onChangePage(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? (
          <LastPageRounded />
        ) : (
          <FirstPageRounded />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRightRounded />
        ) : (
          <KeyboardArrowLeftRounded />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeftRounded />
        ) : (
          <KeyboardArrowRightRounded />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? (
          <FirstPageRounded />
        ) : (
          <LastPageRounded />
        )}
      </IconButton>
    </div>
  )
}

CustomTablePagination.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withStyles(actionsStyles, {
  withTheme: true
})(React.memo(CustomTablePagination))
