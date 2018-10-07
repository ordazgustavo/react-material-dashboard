import DashboardIcon from '@material-ui/icons/Dashboard'
import InputIcon from '@material-ui/icons/Input'
import TitleIcon from '@material-ui/icons/Title'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import TableIcon from '@material-ui/icons/TableChart'

export default [
  {
    to: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon
  },
  {
    label: 'Forms',
    icon: InputIcon,
    multiple: true,
    name: 'forms',
    options: [
      {
        to: 'forms/regular-form',
        label: 'Regular Form',
        title: 'Regular Form',
        icon: StarBorderIcon
      },
      {
        to: 'forms/formik-form',
        label: 'Formik Form',
        title: 'Formik Form',
        icon: StarBorderIcon
      }
    ]
  },
  {
    label: 'Headings',
    icon: TitleIcon,
    multiple: true,
    name: 'headings',
    options: [
      {
        to: 'headings',
        label: 'H1',
        title: 'H1',
        icon: StarBorderIcon
      }
    ]
  },
  {
    to: 'tables',
    label: 'Tables',
    icon: TableIcon
  }
]
