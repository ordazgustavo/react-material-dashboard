import React from 'react'

const FormikDebugger = props =>
  process.env.NODE_ENV === 'development' ? (
    <div style={{ margin: '1rem 0', width: '100%' }}>
      <div
        style={{
          background: '#ccc',
          padding: '1rem',
          borderRadius: '8px 8px 0 0'
        }}
      >
        <h2 style={{ fontFamily: 'monospace', margin: 0 }}>
          Formik debugger (development only)
        </h2>
      </div>
      <pre
        style={{
          background: '#f6f8fa',
          fontSize: '1rem',
          padding: '1rem',
          margin: 0
        }}
      >
        <strong>props</strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  ) : null

export default FormikDebugger
