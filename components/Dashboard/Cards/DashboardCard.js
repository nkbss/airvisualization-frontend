import React from 'react'
import { StatisticSection } from '../../StatisticSection'
import { Grid } from '../../../node_modules/semantic-ui-react'
import { ReactVis, GoogleCharts } from '../../Graph'

import dynamic from 'next/dynamic'
import { Filter } from '../../Filter/Filter'

const DynamicComponentWithNoSSR = dynamic(() => import('../../Graph/plotly'), {
  ssr: false
})

const DatamapWithNoSSR = dynamic(() => import('../../Datamaps/DataMaps'), {
  ssr: false
})

const DashboardCard = props => {
  return (
    <div className="dashboard">
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column textAlign="right">
            <label className="dashboard-title">AST2009</label>
          </Grid.Column>
          <Grid.Column textAlign="right" verticalAlign="middle">
            <Filter />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <StatisticSection
              totalflight={props.totalflight}
              totalpassenger={props.totalpassenger}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <label className="dashboard-title">React Vis</label>
          </Grid.Column>
          <Grid.Column>
            <label className="dashboard-title">Google Chart</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ReactVis
              totalpaxpermonth={props.totalpaxpermonth}
              Airline={props.Airline}
            />
          </Grid.Column>
          <Grid.Column>
            <GoogleCharts data={props.data} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <label className="dashboard-title">Plotly</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <DynamicComponentWithNoSSR data={props.plotlydata} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign="center">
            <label className="dashboard-title">Datamaps</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <div style={{ width: '100%', height: '600px' }}>
            <DatamapWithNoSSR
              scope="usa"
              fills={{
                defaultFill: '#abdda4',
                win: '#0fa0fa'
              }}
              data={{
                TX: { fillKey: 'win' },
                FL: { fillKey: 'win' },
                NC: { fillKey: 'win' },
                CA: { fillKey: 'win' },
                NY: { fillKey: 'win' },
                CO: { fillKey: 'win' }
              }}
              arc={[
                // Datamaps seems to be having trouble converting these
                // to coordinates, so leaving them out for now.
                //
                // {
                // 	origin: 'CA',
                // 	destination: 'TX'
                // },
                // {
                // 	origin: 'OR',
                // 	destination: 'TX'
                // },
                // {
                // 	origin: 'NY',
                // 	destination: 'TX'
                // },
                {
                  origin: {
                    latitude: 40.639722,
                    longitude: -73.778889
                  },
                  destination: {
                    latitude: 37.618889,
                    longitude: -122.375
                  }
                },
                {
                  origin: {
                    latitude: 30.19444,
                    longitude: -97.67
                  },
                  destination: {
                    latitude: 25.793333,
                    longitude: -80.290556
                  },
                  options: {
                    strokeWidth: 2,
                    strokeColor: 'rgba(100, 10, 200, 0.4)',
                    greatArc: true
                  }
                },
                {
                  origin: {
                    latitude: 39.861667,
                    longitude: -104.673056
                  },
                  destination: {
                    latitude: 35.877778,
                    longitude: -78.7875
                  }
                }
              ]}
              arcOptions={{
                strokeWidth: 1,
                arcSharpness: 1.4
              }}
            />
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { DashboardCard }
