import React from 'react'
import { OptionsCard } from '../../../Options'
import { Grid, Dropdown } from '../../../../node_modules/semantic-ui-react'
import dynamic from 'next/dynamic'
import { RouteAirlineBar } from '../../../Graph/RouteAirlineBar'
const airport = [
  { key: 1, text: 'All', value: '%' },
  { key: 2, text: 'Phuket Airport', value: 'HKT' },
  { key: 3, text: 'Samui Airport', value: 'USM' },
  { key: 4, text: 'Chiang Mai Airport', value: 'CNX' },
  { key: 5, text: 'Hong Kong Airport', value: 'HKG' }
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

const DashboardCard = props => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column width={6} />
          <Grid.Column width={2} verticalAlign="middle">
            <Dropdown
              defaultValue="HKT"
              type="airport"
              options={airport}
              name="airport"
              placeholder="Airport"
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
        <Grid.Row
          style={{
            paddingTop: '0px',
            paddingLeft: '410px',
            paddingBottom: '0px'
          }}
        >
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
                type="airport"
                getAirlineAirport={props.getAirlineAirport}
                airport={props.state.airport}
                handleYear={props.handleYear}
                data={props.state.defaultGraph}
                xTitle="Year"
                yTitle={props.defaultY}
              />
            ) : null}
          </Grid.Column>
        </Grid.Row>
        {props.state.airlinestatus ? (
          <React.Fragment>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <label className="header-label">
                  {props.state.year} operating airlines between BKK-
                  {props.state.airport}
                </label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3} />
              <Grid.Column
                style={{ paddingLeft: '50px', paddingBottom: '0px' }}
              >
                <label className="header-label">Airlines</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center" style={{ paddingTop: '0px' }}>
              <Grid.Column width={3} />
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                width={9}
              >
                <RouteAirlineBar
                  data={props.state.airlineData}
                  type="airport"
                />
              </Grid.Column>
              {props.state.otherstatus ? (
                <Grid.Column
                  width={2}
                  textAlign="left"
                  style={{ paddingLeft: '0px' }}
                >
                  <label>Others</label>
                  <br />
                  <label>{commaNumber(props.state.other)}</label>
                </Grid.Column>
              ) : null}
            </Grid.Row>
          </React.Fragment>
        ) : null}
      </Grid>
      {/* <OptionsCard
        state={props.state}
        handleDropdown={props.handleDropdown}
        searchResult={props.searchResult}
        handleSelectOption={props.handleSelectOption}
        handleInput={props.handleInput}
      /> */}
    </React.Fragment>
  )
}
export { DashboardCard }
