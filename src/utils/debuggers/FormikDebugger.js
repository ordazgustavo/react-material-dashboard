import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const FormikDebugger = ({ classes, theme, ...rest }) =>
  process.env.NODE_ENV === 'development' ? (
    <div style={{ margin: '1rem 0', width: '100%' }}>
      <div
        style={{
          background: theme.palette.background.default,
          padding: '1rem',
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius
        }}
      >
        <h2 style={{ fontFamily: 'monospace', margin: 0 }}>
          Formik debugger (development only)
        </h2>
      </div>
      <pre
        style={{
          background:
            theme.palette.type === 'light'
              ? theme.palette.grey['200']
              : theme.palette.grey.A700,
          fontSize: '1rem',
          padding: '1rem',
          margin: 0
        }}
      >
        <strong>props</strong> = {JSON.stringify(rest, null, 2)}
      </pre>
    </div>
  ) : null

export default withStyles(null, { withTheme: true })(FormikDebugger)
