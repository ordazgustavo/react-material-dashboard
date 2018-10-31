import React, { Fragment } from 'react'

import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'

function Headings({ title }) {
  return (
    <Fragment>
      <PageHeader title={title} />
      <PageWrapper>This is the Headings page</PageWrapper>
    </Fragment>
  )
}

export default Headings
