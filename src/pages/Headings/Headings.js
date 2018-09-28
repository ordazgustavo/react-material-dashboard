import React, { Component } from 'react'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'

export default class Headings extends Component {
  state = {}

  render() {
    const { title } = this.props

    return (
      <div>
        <PageHeader title={title} />
        <PageWrapper>This is the Headings page</PageWrapper>
      </div>
    )
  }
}
