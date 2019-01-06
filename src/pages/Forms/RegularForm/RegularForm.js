import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, Grid } from '@material-ui/core'

import { useFormInput } from '../../../utils/hooks'
import { formStyles } from '../Forms.styles'

function RegularForm({ classes }) {
  const firstName = useFormInput('')
  const lastName = useFormInput('')
  const email = useFormInput('')
  const phone = useFormInput('')

  function handleSubmit(event) {
    event.preventDefault()
    // Do Something
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.inputContainer}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="Name"
              margin="normal"
              required
              className={classes.textField}
              {...firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              margin="normal"
              required
              className={classes.textField}
              {...lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              margin="normal"
              required
              className={classes.textField}
              {...email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phone"
              label="Phone Number"
              margin="normal"
              required
              className={classes.textField}
              {...phone}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

export default withStyles(formStyles)(RegularForm)
