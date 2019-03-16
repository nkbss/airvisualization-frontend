import React from 'react'
import Chart from 'react-google-charts'
const GoogleCharts = props => {
  return (
    <div>
      <Chart
        width={900}
        height={500}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          vAxis: {
            title: 'Passenger'
          },
          hAxis: {
            title: 'Month'
          }
        }}
      />
    </div>
  )
}

export { GoogleCharts }
