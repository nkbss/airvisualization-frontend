import React from 'react'
import { Button, Container } from '../../../node_modules/semantic-ui-react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  HorizontalBarSeries
} from 'react-vis'

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 }
]

const TotalPaxPerMonthCard = props => {
  return (
    <div>
      <Button onClick={() => props.getTotalPaxPerMonth()}>CLICKED</Button>
      {props.showtotalpaxpermonth ? (
        <div style={{ paddingLeft: '50px' }}>
          <XYPlot
            height={500}
            width={600}
            // yDomain={[props.min, props.max]}
            margin={{ left: 80, right: 5, top: 10, bottom: 40 }}
          >
            {/* <VerticalBarSeries width={}/>
            <HorizontalBarSeries /> */}
            <VerticalBarSeries data={props.totalpaxpermonth} />
            <YAxis height={200} />
            <XAxis />
          </XYPlot>
        </div>
      ) : null}
      <div style={{ paddingLeft: '50px' }}>
        <XYPlot
          height={200}
          width={200}
          yDomain={[0, 1000000]}
          margin={{ left: 80, right: 5, top: 10, bottom: 40 }}
        >
          {/* <VerticalBarSeries />
        <HorizontalBarSeries /> */}
          <XAxis style={{ width: '50px' }} />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    </div>
  )
}
export { TotalPaxPerMonthCard }
