import React from 'react'
import { StatisticSection } from '../../StatisticSection'
import { Grid } from '../../../node_modules/semantic-ui-react'
import { ReactVis, GoogleCharts } from '../../Graph'

import dynamic from 'next/dynamic'
import { Filter } from '../../Filter/Filter'
var randomColor = require('randomcolor')

const DynamicComponentWithNoSSR = dynamic(() => import('../../Graph/plotly'), {
  ssr: false
})

const DatamapWithNoSSR = dynamic(() => import('../../Datamaps/DataMaps'), {
  ssr: false
})

var bombs = [
  {
    name: 'Joe 4',
    radius: 25,
    yield: 400,
    country: 'USSR',
    fillKey: 'RUS',
    significance: 'First fusion weapon test by the USSR (not "staged")',
    date: '1953-08-12',
    latitude: 50.07,
    longitude: 78.43
  },
  {
    name: 'RDS-37',
    radius: 40,
    yield: 1600,
    country: 'USSR',
    fillKey: 'RUS',
    significance:
      'First "staged" thermonuclear weapon test by the USSR (deployable)',
    date: '1955-11-22',
    latitude: 50.07,
    longitude: 78.43
  }
]

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
              scope="world"
              // fills={{
              //   USA: '#d62728',
              //   RUS: '#9467bd',
              //   PRK: '#ff7f0e',
              //   PRC: '#2ca02c',
              //   IND: '#e377c2',
              //   GBR: '#8c564b',
              //   FRA: '#d62728',
              //   PAK: '#7f7f7f',
              //   defaultFill: '#EDDC4E'
              // }}
              // data={{
              //   RUS: { fillKey: 'RUS' },
              //   PRK: { fillKey: 'PRK' },
              //   PRC: { fillKey: 'PRC' },
              //   IND: { fillKey: 'IND' },
              //   GBR: { fillKey: 'GBR' },
              //   FRA: { fillKey: 'FRA' },
              //   PAK: { fillKey: 'PAK' },
              //   USA: { fillKey: 'USA' }
              // }}
              // arc={[
              //   // Datamaps seems to be having trouble converting these
              //   // to coordinates, so leaving them out for now.
              //   //
              //   // {
              //   // 	origin: 'CA',
              //   // 	destination: 'TX'
              //   // },
              //   // {
              //   // 	origin: 'OR',
              //   // 	destination: 'TX'
              //   // },
              //   // {
              //   // 	origin: 'NY',
              //   // 	destination: 'TX'
              //   // },
              //   {
              //     origin: {
              //       latitude: 40.639722,
              //       longitude: -73.778889
              //     },
              //     destination: {
              //       latitude: 37.618889,
              //       longitude: -122.375
              //     }
              //   },
              //   {
              //     origin: {
              //       latitude: 30.19444,
              //       longitude: -97.67
              //     },
              //     destination: {
              //       latitude: 25.793333,
              //       longitude: -80.290556
              //     },
              //     options: {
              //       strokeWidth: 2,
              //       strokeColor: 'rgba(100, 10, 200, 0.4)',
              //       greatArc: true
              //     }
              //   },
              //   {
              //     origin: {
              //       latitude: 39.861667,
              //       longitude: -104.673056
              //     },
              //     destination: {
              //       latitude: 35.877778,
              //       longitude: -78.7875
              //     }
              //   }
              // ]}
              // arcOptions={{
              //   strokeWidth: 1,
              //   arcSharpness: 1.4
              // }}
              geographyConfig={{
                popupOnHover: false,
                highlightOnHover: false
              }}
              fills={{
                defaultFill: '#abdda4',
                USA: 'blue',
                RUS: 'red',
                OTH: randomColor()
              }}
              bubbles={[
                {
                  name: 'Not a bomb, but centered on Brazil',
                  radius: 23,
                  centered: 'BRA',
                  country: 'USA',
                  yeild: 0,
                  // fillKey: 'OTH',
                  date: '1954-03-01',
                  fills: 'red'
                },
                {
                  name: 'Castle Bravo',
                  radius: 25,
                  yeild: 15000,
                  country: 'USA',
                  significance:
                    'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
                  // fillKey: 'OTH',
                  date: '1954-03-01',
                  latitude: 11.415,
                  longitude: 165.1619,
                  fills: 'red'
                },
                {
                  name: 'Tsar Bomba',
                  radius: 70,
                  yeild: 50000,
                  country: 'USSR',
                  // fillKey: 'OTH',
                  significance:
                    'Largest thermonuclear weapon ever tested-scaled down from its initial 100Mt design by 50%',
                  date: '1961-10-31',
                  latitude: 73.482,
                  longitude: 54.5854,
                  fills: 'red'
                }
              ]}
              bubbleOptions={{
                popupTemplate: (geo, data) =>
                  `<div class="hoverinfo">Yield: ${data.yeild}\nExploded on ${
                    data.date
                  } by the ${data.country}`
              }}
            />
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { DashboardCard }
