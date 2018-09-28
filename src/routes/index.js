import DashboardIcon from '@material-ui/icons/Dashboard'
import InputIcon from '@material-ui/icons/Input'
import TitleIcon from '@material-ui/icons/Title'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import TableIcon from '@material-ui/icons/TableChart'

export default [
  {
    to: '/',
    label: 'Dashboard',
    title: 'React Material Dashboard',
    icon: DashboardIcon
  },
  {
    to: 'forms',
    label: 'Forms',
    title: 'Forms',
    icon: InputIcon
  },
  {
    label: 'Headings',
    title: 'Headings',
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
    title: 'Tables',
    icon: TableIcon
  }
]
