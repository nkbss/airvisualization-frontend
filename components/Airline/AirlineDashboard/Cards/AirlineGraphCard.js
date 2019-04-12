import React from 'react'
import {
  Grid,
  Dropdown,
  Loader
} from '../../../../node_modules/semantic-ui-react'
import dynamic from 'next/dynamic'
import '../Layout/style.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  FlexibleXYPlot,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis'
const airline = [
  { key: 1, text: 'THA', value: 'THA' },
  { key: 2, text: 'BKP', value: 'BKP' },
  { key: 3, text: 'THD', value: 'THD' }
]

const defaultY = [
  { key: 1, text: 'No. of Route ', value: 'Route' },
  { key: 2, text: 'Seat', value: 'Seat' },
  { key: 3, text: 'Pax', value: 'Pax' },
  // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
  // { key: 5, text: 'RPK', value: 'RPK' },
  { key: 6, text: 'Frequency', value: 'Frequency' }
]

const DefaultBar = dynamic(() => import('../../../Graph/defaultBar'), {
  ssr: false
})

const AirlineGraphCard = props => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column width={6} />
          <Grid.Column width={2} verticalAlign="middle">
            <Dropdown
              type="airline"
              defaultValue="THA"
              options={airline}
              name="airline"
              placeholder="Airline"
              selection
              fluid
              onChange={props.handleDropdown}
            />
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Dropdown
              defaultValue="Pax"
              options={defaultY}
              name="defaultY"
              placeholder="Yaxis"
              selection
              fluid
              onChange={props.handleDropdown}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" style={{ paddingTop: '0px' }}>
          {props.state.showdefault ? (
            <Grid.Column>
              <label className="header-label">{props.state.defaultY}</label>
            </Grid.Column>
          ) : null}
        </Grid.Row>
        <Grid.Row textAlign="center" style={{ paddingBottom: '0px' }}>
          <Grid.Column
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {props.state.showdefault ? (
              <DefaultBar
                airline={props.state.airline}
                getRouteAirline={props.getRouteAirline}
                handleYear={props.handleYear}
                data={props.state.defaultGraph}
                xTitle="Year"
                yTitle={props.defaultY}
              />
            ) : null}
            {/* <DefaultBar
              data={props.state.defaultGraph}
              xTitle="Year"
              yTitle={props.defaultY}
            /> */}
          </Grid.Column>
        </Grid.Row>
        {props.state.showdefault ? (
          <Grid.Row textAlign="center" style={{ paddingTop: '0px' }}>
            <Grid.Column>
              <label className="text-label">Year</label>
            </Grid.Column>
          </Grid.Row>
        ) : null}
      </Grid>
    </React.Fragment>
  )
}

export { AirlineGraphCard }
