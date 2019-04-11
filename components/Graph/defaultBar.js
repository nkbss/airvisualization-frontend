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

const defaultBar = props => {
  return (
    <XYPlot
      height={600}
      width={630}
      margin={{ left: 80, top: 10, bottom: 40 }}
      xType="ordinal"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis
        // attr="x"
        // attrAxis="y"
        // orientation="bottom"
        // position="end"
        // title="x-axis"
        // title={props.xTitle}
        style={{
          text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 },
          ticks: { stroke: '#ADDDE1' }
          // title: { fontSize: '20px', tranform: 'translate(100px,100px)' }
        }}
        position="middle"
      />
      <YAxis
        // attr="y"
        // attrAxis="x"
        // orientation="left"
        // position="end"
        title={props.yTitle}
      />
      <VerticalBarSeries data={props.data} barWidth={0.6} />
    </XYPlot>
  )
}

export default defaultBar
