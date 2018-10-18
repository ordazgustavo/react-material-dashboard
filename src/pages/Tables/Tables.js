import React, { Fragment } from 'react'
import { Link, Router } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

import PageHeader from '../../components/PageLayout/PageHeader'
import SimpleTable from './SimpleTable/SimpleTable'
import ComplexTable from './ComplexTable/ComplexTable'

const CustomTabs = withStyles(theme => ({
  root: {
    minHeight: theme.spacing.unit * 5
  },
  indicator: {
    background: '#fff',
    borderTopLeftRadius: theme.shape.borderRadius - 1,
    borderTopRightRadius: theme.shape.borderRadius - 1,
    height: 3
  }
}))(Tabs)

const CustomTab = withStyles(theme => ({
  root: {
    minHeight: theme.spacing.unit * 5
  }
}))(Tab)

class Tables extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { title } = this.props
    const { value } = this.state

    return (
      <Fragment>
        <PageHeader title={title}>
          <CustomTabs
            value={value}
            onChange={this.handleChange}
            component="div"
          >
            <CustomTab label="Simple Table" component={Link} to="./" />
            <CustomTab
              label="Complex Table"
              component={Link}
              to="complex-table"
            />
          </CustomTabs>
        </PageHeader>
        <Router>
          <SimpleTable path="/" title="Simple Table" />
          <ComplexTable path="complex-table" title="Complex Table" />
        </Router>
      </Fragment>
    )
  }
}

export default Tables
