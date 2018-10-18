import {
  Dashboard,
  Input,
  Title,
  StarBorder,
  TableChart
} from '@material-ui/icons'

export default [
  {
    to: 'dashboard',
    label: 'Dashboard',
    icon: Dashboard
  },
  {
    label: 'Forms',
    icon: Input,
    multiple: true,
    name: 'forms',
    options: [
      {
        to: 'forms/regular-form',
        label: 'Regular Form',
        title: 'Regular Form',
        icon: StarBorder
      },
      {
        to: 'forms/formik-form',
        label: 'Formik Form',
        title: 'Formik Form',
        icon: StarBorder
      }
    ]
  },
  {
    label: 'Headings',
    icon: Title,
    multiple: true,
    name: 'headings',
    options: [
      {
        to: 'headings',
        label: 'H1',
        title: 'H1',
        icon: StarBorder
      }
    ]
  },
  {
    to: 'tables',
    label: 'Tables',
    icon: TableChart
  }
]
