import React, { Component } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  Hint,
  Crosshair,
  DiscreteColorLegend
} from 'react-vis'
var commaNumber = require('comma-number')

class defaultBar extends Component {
  state = {
    crosshairValues: null
  }

  render() {
    console.log(this.state.crosshairValues)
    return (
      <React.Fragment>
        <XYPlot
          height={550}
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
            color={this.props.type === 'airport' ? '#1662cc' : '#12939a'}
            data={this.props.data}
            barWidth={0.6}
            onNearestX={(value, { index }) =>
              this.setState({
                selectedPointId: index,
                crosshairValues: [value]
              })
            }
            onValueClick={(datapoint, { index }) => {
              console.log('index', datapoint.index)
              this.props.handleYear(datapoint.x, datapoint.index)
              if (this.props.type === 'airline') {
                this.props.selectTypeRouteAirline(
                  this.props.state.defaultY,
                  datapoint.x,
                  this.props.airline
                )
                // this.props.getRouteAirline(datapoint.x, this.props.airline)
              }
              if (this.props.type === 'airport') {
                this.props.handleYear(datapoint.x, datapoint.index)
                this.props.getAirlineAirport(datapoint.x, this.props.airport)
                this.props.selectTypeAirlineAirport(
                  this.props.state.defaultY,
                  datapoint.x,
                  this.props.airport
                )
              }
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
                <p>Y: {commaNumber(this.state.crosshairValues[0].y)}</p>
              </div>
            </Crosshair>
          )}
        </XYPlot>
      </React.Fragment>
    )
  }
}

export default defaultBar
