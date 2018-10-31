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
  RadioGroup,
  Radio,
  FormHelperText
} from '@material-ui/core'

function InputType({ field, form, ...props }) {
  const hasError =
    field && form ? form.errors[field.name] && form.touched[field.name] : false
  switch (props.type) {
    case 'select':
      return (
        <TextField
          select
          helperText={hasError ? form.errors[field.name] : ''}
          error={hasError}
          {...field}
          {...props}
        >
          {props.defaultOption &&
            props.native && <option value="">{props.defaultOption}</option>}
          {props.defaultOption &&
            !props.native && (
              <MenuItem value="">{props.defaultOption}</MenuItem>
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
              aria-label={props.label}
              {...field}
              {...props}
            />
          }
          label={props.label}
        />
      )

    case 'checkbox-group':
      return (
        <FormControl component="fieldset" className={props.className}>
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

    case 'radio':
      return (
        <FormControl component="fieldset" className={props.className}>
          <FormLabel component="legend">{props.label}</FormLabel>
          <RadioGroup
            aria-label={props.label}
            {...field}
            value={form.values[field.name]}
          >
            {props.options.map(radio => (
              <FormControlLabel
                key={radio.value}
                value={radio.value}
                control={<Radio />}
                label={radio.label}
              />
            ))}
          </RadioGroup>
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

export default InputType
