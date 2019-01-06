const styles = ({ mixins, spacing, palette }) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    ...mixins.gutters(),
    paddingTop: spacing.unit * 2,
    paddingBottom: spacing.unit * 2,
    color: palette.text.primary
  }
})

export default styles
