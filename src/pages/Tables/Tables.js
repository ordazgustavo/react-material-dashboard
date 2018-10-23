import React, { Fragment } from 'react'
import { Link, Router, Location } from '@reach/router'
import { Slide } from '@material-ui/core'

import PageHeader from '../../components/PageLayout/PageHeader'
import { CustomTabs, CustomTab } from '../../components/Tabs/Tabs'
import SimpleTable from './SimpleTable/SimpleTable'
import ComplexTable from './ComplexTable/ComplexTable'

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
            <CustomTab
              label="Simple Table"
              component={Link}
              to="simple-table"
            />
            <CustomTab
              label="Complex Table"
              component={Link}
              to="complex-table"
            />
          </CustomTabs>
        </PageHeader>
        <Location>
          {({ location }) => (
            <Slide
              key={location.key}
              direction="left"
              in
              mountOnEnter
              unmountOnExit
            >
              <Router location={location}>
                <SimpleTable path="simple-table" title="Simple Table" />
                <ComplexTable path="complex-table" title="Complex Table" />
              </Router>
            </Slide>
          )}
        </Location>
      </Fragment>
    )
  }
}

export default Tables
