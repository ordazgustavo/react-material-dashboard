import Dashboard from './Dashboard/Dashboard'
import Forms from './Forms/Forms'
import Headings from './Headings/Headings'
import Tables from './Tables/Tables'

export default [
  {
    to: 'dashboard',
    path: 'dashboard/*',
    title: 'Dashboard',
    component: Dashboard
  },
  {
    to: 'forms',
    path: 'forms/*',
    title: 'Forms',
    component: Forms
  },
  {
    to: 'headings',
    path: 'headings/*',
    title: 'Headings',
    component: Headings
  },
  {
    to: 'tables',
    path: 'tables/*',
    title: 'Tables',
    component: Tables
  }
]
