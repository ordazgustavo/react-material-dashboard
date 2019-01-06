export const spark = ({ palette }) => ({
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
        color: palette.text.primary,
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
})

export const bar = theme => ({
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
          colors: theme.palette.text.primary
        }
      }
    },
    grid: {
      show: false
    },
    title: {
      text: 'Annual sales',
      style: {
        color: theme.palette.text.primary,
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    dataLables: {
      style: {
        colors: theme.palette.text.primary
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
})

export const line = theme => ({
  options: {
    chart: {
      id: 'basic-bar',
      height: 300
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        style: {
          colors: theme.palette.text.primary
        }
      }
    },
    grid: {
      show: false
    },
    title: {
      text: 'Annual sales',
      style: {
        color: theme.palette.text.primary,
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
})

export const radialBar = theme => ({
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
        color: theme.palette.text.primary,
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    theme: {
      palette: 'palette2'
    }
  },
  series: [70]
})
