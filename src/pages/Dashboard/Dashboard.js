import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

import Chart from '../../components/Charts/Charts'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import styles from './Dashboard.styles'
import { spark, bar, line, radialBar } from './charts'

function Dashboard({ title, classes, theme }) {
  return (
    <>
      <PageHeader title={title} />
      <PageWrapper>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper>
                <Chart type="area" {...spark(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper>
                <Chart type="area" {...spark(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper>
                <Chart type="area" {...spark(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper>
                <Chart type="area" {...spark(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} xl={5}>
              <Paper className={classes.paper}>
                <Chart type="bar" {...bar(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} xl={2}>
              <Paper className={classes.paper}>
                <Chart type="radialBar" {...radialBar(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={5}>
              <Paper className={classes.paper}>
                <Chart type="line" {...line(theme)} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </PageWrapper>
    </>
  )
}

export default withStyles(styles, { withTheme: true })(Dashboard)
