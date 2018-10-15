import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ApexCharts from 'apexcharts'

export default class Charts extends Component {
  constructor(props) {
    super(props)
    this.chartRef = React.createRef()
    this.chart = null
  }

  componentDidMount() {
    const { current } = this.chartRef
    this.chart = new ApexCharts(current, this.getConfig())
    this.chart.render()
  }

  componentDidUpdate(prevProps) {
    if (!this.chart) return
    const { options, series } = this.props
    const prevOptions = JSON.stringify(prevProps.options)
    const prevSeries = JSON.stringify(prevProps.series)
    const currentOptions = JSON.stringify(options)
    const currentSeries = JSON.stringify(series)

    if (prevOptions !== currentOptions || prevSeries !== currentSeries) {
      if (prevSeries === currentSeries) {
        // series is not changed,but options are changed
        this.chart.updateOptions(this.getConfig())
      } else if (prevOptions === currentOptions) {
        // options are not changed, just the series is changed
        this.chart.updateSeries(series)
      } else {
        // both might be changed
        this.chart.updateOptions(this.getConfig())
      }
    }
  }

  componentWillUnmount() {
    if (this.chart && typeof this.chart.destroy === 'function')
      this.chart.destroy()
  }

  getConfig() {
    const { type, height, width, series, options } = this.props
    const newOptions = {
      chart: {
        type,
        height,
        width
      },
      series
    }

    return ApexCharts.merge(newOptions, options)
  }

  render() {
    const { type, width, height, series, options, ...props } = this.props
    return React.createElement('div', {
      ref: this.chartRef,
      ...props
    })
  }
}

Charts.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  series: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired
}

Charts.defaultProps = {
  width: '100%',
  height: 'auto'
}
