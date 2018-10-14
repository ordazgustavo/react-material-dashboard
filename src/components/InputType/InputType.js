/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@material-ui/core'

const Input = ({ field, form, ...props }) => {
  const hasError =
    field && form ? form.errors[field.name] && form.touched[field.name] : false
  switch (props.type) {
    case 'text':
      return (
        <TextField
          helperText={hasError ? form.errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        />
      )

    case 'select':
      return (
        <TextField
          select
          helperText={hasError ? form.errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        >
          {props.native ? (
            <option value="">None</option>
          ) : (
            <MenuItem value="">None</MenuItem>
          )}
          {props.options.map(
            option =>
              props.native ? (
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

    case 'checkbox':
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={form.values[field.name]}
              {...field}
              {...props}
            />
          }
          label={props.label}
        />
      )

    case 'checkbox-group':
      console.log(props.className)
      return (
        <FormControl
          component="fieldset"
          style={props.style}
          className={props.className}
        >
          <FormLabel component="legend">{props.label}</FormLabel>
          <FormGroup>
            {props.options.map(check => (
              <FormControlLabel
                key={check.value}
                control={
                  <Checkbox
                    name={props.name}
                    value={check.name}
                    checked={props.values[props.name].includes(check.value)}
                    onChange={e => {
                      if (e.target.checked) {
                        props.push(check.value)
                      } else {
                        const idx = props.values[props.name].indexOf(
                          check.value
                        )
                        props.remove(idx)
                      }
                    }}
                  />
                }
                label={check.label}
              />
            ))}
          </FormGroup>
          {props.helper && <FormHelperText>{props.helper}</FormHelperText>}
        </FormControl>
      )

    default:
      return (
        <TextField
          helperText={hasError ? form.errors[field.name] : ''}
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
