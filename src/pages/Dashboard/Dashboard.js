import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

import Chart from '../../components/Charts/Charts'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    color: theme.palette.text.primary
  }
})

class Dashboard extends Component {
  state = {
    spark: {
      options: {
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          width: 3,
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
          gradient: {
            enabled: false
          }
        },
        markers: {
          size: 0
        },
        tooltip: {
          fixed: {
            enabled: true
          }
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$424,652',
          offsetX: 0,
          style: {
            color: this.props.theme.palette.text.primary,
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        subtitle: {
          text: 'Sales',
          offsetX: 0,
          style: {
            fontSize: '14px',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      },
      series: [
        {
          data: [
            47,
            45,
            54,
            38,
            56,
            24,
            65,
            31,
            37,
            39,
            62,
            51,
            35,
            41,
            35,
            27,
            93,
            53,
            61,
            27,
            54,
            43,
            19,
            46
          ]
        }
      ]
    },
    bar: {
      options: {
        chart: {
          id: 'basic-bar',
          height: 300,
          width: '100%'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          labels: {
            style: {
              colors: this.props.theme.palette.text.primary
            }
          }
        },
        grid: {
          show: false
        },
        title: {
          text: 'Annual sales',
          style: {
            color: this.props.theme.palette.text.primary,
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        dataLables: {
          style: {
            colors: this.props.theme.palette.text.primary
          }
        },
        theme: {
          palette: 'palette2'
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    },
    line: {
      options: {
        chart: {
          id: 'basic-bar',
          height: 300
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          labels: {
            style: {
              colors: this.props.theme.palette.text.primary
            }
          }
        },
        grid: {
          show: false
        },
        title: {
          text: 'Annual sales',
          style: {
            color: this.props.theme.palette.text.primary,
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        theme: {
          palette: 'palette2'
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    },
    radialBar: {
      options: {
        chart: {
          type: 'radialBar',
          width: '100%'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Cricket'],
        title: {
          text: 'Progress',
          style: {
            color: this.props.theme.palette.text.primary,
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        theme: {
          palette: 'palette2'
        }
      },
      series: [70]
    }
  }

  render() {
    const { title, classes } = this.props
    const { spark, bar, line, radialBar } = this.state

    return (
      <Fragment>
        <PageHeader title={title} />
        <PageWrapper>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                  <Chart type="area" {...spark} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                  <Chart type="area" {...spark} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                  <Chart type="area" {...spark} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                  <Chart type="area" {...spark} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} xl={5}>
                <Paper className={classes.paper}>
                  <Chart type="bar" {...bar} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} xl={2}>
                <Paper className={classes.paper}>
                  <Chart type="radialBar" {...radialBar} />
                </Paper>
              </Grid>
              <Grid item xs={12} xl={5}>
                <Paper className={classes.paper}>
                  <Chart type="line" {...line} />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </PageWrapper>
      </Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard)
