import React from 'react'

import Dashboard from './Dashboard/Dashboard'

// Disabled because of a bug that causes apexcharts not to render initially
// const AsyncDashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const AsyncForms = React.lazy(() => import('./Forms/Forms'))
const AsyncHeadings = React.lazy(() => import('./Headings/Headings'))
const AsyncTables = React.lazy(() => import('./Tables/Tables'))

export { Dashboard, AsyncForms, AsyncHeadings, AsyncTables }
