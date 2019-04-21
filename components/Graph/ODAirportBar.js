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

class ODAirportBar extends Component {
  state = {
    crosshairValues: null
  }

  render() {
    return (
      <XYPlot
        height={500}
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
          //   color={this.props.type === 'airport' ? '#15a1cc' : '#28c1b2'}
          barWidth={this.props.data.length <= 4 ? 0.3 : 0.9}
          data={this.props.data}
          onNearestX={(value, { index }) =>
            this.setState({
              selectedPointId: index,
              crosshairValues: [value]
            })
          }
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
    )
  }
}

// const RouteAirlineBar = props => {
//   return (

//   )
// }

export { ODAirportBar }
