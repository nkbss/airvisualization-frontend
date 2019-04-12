import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis'

const RouteAirlineBar = props => {
  return (
    <XYPlot
      height={350}
      width={900}
      margin={{ left: 80, top: 10, bottom: 40 }}
      xType="ordinal"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis
        style={{
          text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 },
          ticks: { stroke: '#ADDDE1' }
          // title: { fontSize: '20px', tranform: 'translate(100px,100px)' }
        }}
        position="middle"
      />
      <YAxis
      //  title={props.yTitle}
      />
      <VerticalBarSeries
        color="#28c1b2"
        data={props.data}
        // barWidth={0.6}
        // onValueClick={(datapoint, { index }) => {
        //   props.handleYear(datapoint.x)
        //   props.getRouteAirline(datapoint.x, props.airline)
        //   console.log(datapoint.x)
        //   console.log(index)
        // }}
      />
    </XYPlot>
  )
}

export { RouteAirlineBar }
