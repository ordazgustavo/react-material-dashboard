import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, TextField } from '@material-ui/core'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class Forms extends Component {
  state = { name: '' }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { classes, title } = this.props

    return (
      <Fragment>
        <PageHeader title={title} />
        <PageWrapper>
          <Paper className={classes.root}>
            <form className={classes.container}>
              <TextField
                id="standard-name"
                label="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
                className={classes.textField}
              />
            </form>
          </Paper>
        </PageWrapper>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Forms)
