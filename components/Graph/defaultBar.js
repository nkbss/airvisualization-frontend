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
  Crosshair
} from 'react-vis'

class defaultBar extends Component {
  state = {
    crosshairValues: null
  }

  render() {
    console.log(this.state.crosshairValues)
    return (
      <XYPlot
        height={550}
        width={700}
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
          data={this.props.data}
          barWidth={0.6}
          onNearestX={(value, { index }) =>
            this.setState({
              selectedPointId: index,
              crosshairValues: [value]
            })
          }
          onValueClick={(datapoint, { index }) => {
            this.props.handleYear(datapoint.x)
            this.props.getRouteAirline(datapoint.x, this.props.airline)
            console.log(datapoint.x)
            console.log(index)
            datapoint.opacity = 0.5378465593937095
          }}
        />
        {this.state.crosshairValues && (
          <Crosshair values={this.state.crosshairValues}>
            <div
              style={{
                width: '80px',
                color: 'grey',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              <p>X: {this.state.crosshairValues[0].x}</p>
              <p>Y: {this.state.crosshairValues[0].y}</p>
            </div>
          </Crosshair>
        )}
      </XYPlot>
    )
  }
}

export default defaultBar
