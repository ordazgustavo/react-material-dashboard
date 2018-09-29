import React, { Component, Fragment } from 'react'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'

export default class Dashboard extends Component {
  state = {}

  render() {
    const { title } = this.props

    return (
      <Fragment>
        <PageHeader title={title} />
        <PageWrapper>This is the Dashboard component</PageWrapper>
      </Fragment>
    )
  }
}
