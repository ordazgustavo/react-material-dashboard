const drawerWidth = 240

const styles = ({ transitions, spacing, breakpoints, mixins, palette }) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    }),
    width: spacing.unit * 7,
    [breakpoints.up('sm')]: {
      width: spacing.unit * 9
    }
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    padding: spacing.unit * 3,
    minHeight: '150px'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    overflow: 'auto'
  },
  grow: {
    flexGrow: 1
  }
})

export default styles
