import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import formStructure from './FormStructure'
import { formStyles } from '../Forms.styles'

class RegularForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired
  }

  state = {}

  handleSubmit = event => {
    event.preventDefault()
    // Do Something
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div className={classes.inputContainer}>
          {formStructure.map(element => (
            <TextField
              key={element.name}
              id={element.name}
              value={this.state[element.name]}
              onChange={this.handleChange}
              margin={element.margin}
              className={classes.textField}
              style={{ width: `${(element.size * 100) / 12}%` }}
              {...element}
            />
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            submit
          </Button>
        </div>
      </form>
    )
  }
}

export default withStyles(formStyles)(RegularForm)
