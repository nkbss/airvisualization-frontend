import React, { Component } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  Crosshair
} from 'react-vis'

var commaNumber = require('comma-number')
class StackBar extends Component {
  state = {
    crosshairValues: null
  }

  render() {
    console.log(this.state.crosshairValues)
    return (
      <XYPlot
        height={550}
        stackBy="y"
        width={900}
        margin={{ left: 80, top: 10, bottom: 40 }}
        xType="ordinal"
        onMouseLeave={() =>
          this.setState({ selectedPointId: null, crosshairValues: null })
        }
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis
          style={{
            text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 },
            ticks: { stroke: '#ADDDE1' }
          }}
          position="middle"
        />
        <YAxis />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[0]}
          onValueMouseOver={(datapoint, event) => {
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[1]}
          onValueMouseOver={(datapoint, event) => {
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[2]}
          onValueMouseOver={(datapoint, event) => {
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[3]}
          onValueMouseOver={(datapoint, event) => {
            console.log(datapoint)
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[4]}
          onValueMouseOver={(datapoint, event) => {
            console.log(datapoint)
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        <VerticalBarSeries
          cluster="stack 1"
          data={this.props.data[5]}
          onValueMouseOver={(datapoint, event) => {
            console.log(datapoint)
            this.setState({
              crosshairValues: [datapoint]
            })
          }}
        />
        {this.state.crosshairValues && (
          <Crosshair values={this.state.crosshairValues}>
            <div
              style={{
                width: '90px',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: 'black',
                borderRadius: '10px',
                textAlign: 'center'
              }}
            >
              <p>X: {this.state.crosshairValues[0].x}</p>
              <p>
                Y:{' '}
                {this.state.crosshairValues[0].y0
                  ? commaNumber(
                      this.state.crosshairValues[0].y -
                        this.state.crosshairValues[0].y0
                    )
                  : commaNumber(this.state.crosshairValues[0].y)}
              </p>
              <p>
                Airline: {commaNumber(this.state.crosshairValues[0].airline)}
              </p>
            </div>
          </Crosshair>
        )}
      </XYPlot>
    )
  }
}

export default StackBar
