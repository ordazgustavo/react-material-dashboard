import {
  DashboardRounded,
  InputRounded,
  TitleRounded,
  StarRounded,
  TableChartRounded
} from '@material-ui/icons'

export default [
  {
    to: '/',
    label: 'Dashboard',
    icon: DashboardRounded
  },
  {
    label: 'Forms',
    icon: InputRounded,
    multiple: true,
    name: 'forms',
    options: [
      {
        to: 'forms/regular-form',
        label: 'Regular Form',
        title: 'Regular Form',
        icon: StarRounded
      },
      {
        to: 'forms/formik-form',
        label: 'Formik Form',
        title: 'Formik Form',
        icon: StarRounded
      }
    ]
  },
  {
    label: 'Headings',
    icon: TitleRounded,
    multiple: true,
    name: 'headings',
    options: [
      {
        to: 'headings',
        label: 'H1',
        title: 'H1',
        icon: StarRounded
      }
    ]
  },
  {
    to: 'tables/simple-table',
    label: 'Tables',
    icon: TableChartRounded
  }
]
