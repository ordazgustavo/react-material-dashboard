import Loadable from 'react-loadable'
import Loading from '../components/Loading/Loading'

const loadableFactory = opts =>
  Loadable({
    loading: Loading,
    delay: 500,
    timeout: 10000,
    ...opts
  })

const AsyncDashboard = loadableFactory({
  loader: () => import('./Dashboard/Dashboard')
})
const AsyncForms = loadableFactory({
  loader: () => import('./Forms/Forms')
})
const AsyncHeadings = loadableFactory({
  loader: () => import('./Headings/Headings')
})
const AsyncTables = loadableFactory({
  loader: () => import('./Tables/Tables')
})

export { AsyncDashboard, AsyncForms, AsyncHeadings, AsyncTables }
