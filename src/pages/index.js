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

// export default [
//   {
//     to: 'dashboard',
//     path: '/',
//     title: 'Dashboard',
//     component: Dashboard
//   },
//   {
//     to: 'forms',
//     path: 'forms/*',
//     title: 'Forms',
//     component: Forms
//   },
//   {
//     to: 'headings',
//     path: 'headings/*',
//     title: 'Headings',
//     component: Headings
//   },
//   {
//     to: 'tables',
//     path: 'tables/*',
//     title: 'Tables',
//     component: Tables
//   }
// ]
