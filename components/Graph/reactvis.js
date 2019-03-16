import React from 'react'
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis'

const ReactVis = props => {
  console.log(props.totalpaxpermonth)
  return (
    <div>
      {props.totalpaxpermonth ? (
        <div>
          <XYPlot
            height={500}
            width={600}
            margin={{ left: 80, right: 5, top: 10, bottom: 40 }}
          >
            <VerticalBarSeries data={props.totalpaxpermonth} />
            <YAxis height={200} />
            <XAxis />
          </XYPlot>
        </div>
      ) : null}
    </div>
  )
}

export { ReactVis }
