import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const Input = ({
  field,
  form: { touched, errors },
  options,
  children,
  native,
  ...props
}) => {
  const hasError = errors[field.name] && touched[field.name]
  switch (props.type) {
    case 'text':
      return (
        <TextField
          helperText={hasError ? errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        />
      )

    case 'select':
      return (
        <TextField
          select
          helperText={hasError ? errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        >
          {native ? (
            <option value="">None</option>
          ) : (
            <MenuItem value="">None</MenuItem>
          )}
          {options.map(
            option =>
              native ? (
                <option key={option.value} value={option.value}>
                  {option.displayValue}
                </option>
              ) : (
                <MenuItem key={option.value} value={option.value}>
                  {option.displayValue}
                </MenuItem>
              )
          )}
        </TextField>
      )

    default:
      return (
        <TextField
          helperText={hasError ? errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        />
      )
  }
}

const InputType = props => (
  <Input style={{ width: `${(props.size * 100) / 12}%` }} {...props} />
)

export default InputType
