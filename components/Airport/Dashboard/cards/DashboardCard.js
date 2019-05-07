import React from 'react'
import { OptionsCard } from '../../../Options'
import {
  Grid,
  Dropdown,
  Input
} from '../../../../node_modules/semantic-ui-react'
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
  // { key: 1, text: 'No. of Route ', value: 'Route' },
  { key: 2, text: 'Seats', value: 'Seats' },
  { key: 3, text: 'Passengers', value: 'Passengers' },
  // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
  // { key: 5, text: 'RPK', value: 'RPK' },
  { key: 6, text: 'Frequencies', value: 'Frequencies' }
]

const defaultY2 = [
  // { key: 1, text: 'No. of Route ', value: 'Route' },
  { key: 2, text: 'Seats', value: 'Seats' },
  { key: 3, text: 'Passengers', value: 'Passengers' },
  // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
  // { key: 5, text: 'RPK', value: 'RPK' },
  { key: 6, text: 'Frequencies', value: 'Frequencies' }
]

const DefaultBar = dynamic(() => import('../../../Graph/defaultBar'), {
  ssr: false
})

const DashboardCard = props => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <label className="header">Airport</label>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          centered
          textAlign="center"
          columns={4}
          verticalAlign="middle"
        >
          <Grid.Column width={1}>
            <label className="A-label-text">Airport</label>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Input
              type="airport"
              defaultValue="HKT"
              name="airport"
              placeholder="Airport"
              fluid
              onChange={props.handleDropdown}
              onKeyPress={props.pressEnterToGetData}
            />
          </Grid.Column>
          <Grid.Column width={1} textAlign="center">
            <label className="A-label-text">View</label>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Dropdown
              defaultValue="Passengers"
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
            paddingLeft: '385px',
            paddingBottom: '0px'
          }}
        >
          {props.state.showdefault ? (
            <Grid.Column>
              <label className="header-label">{props.state.defaultY}</label>
            </Grid.Column>
          ) : null}
        </Grid.Row>

        {props.state.showdefault ? (
          <React.Fragment>
            <Grid.Row textAlign="center" style={{ paddingBottom: '0px' }}>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <DefaultBar
                  type="airport"
                  getAirlineAirport={props.getAirlineAirport}
                  airport={props.state.airport}
                  handleYear={props.handleYear}
                  data={props.state.defaultGraph}
                  state={props.state}
                  selectTypeAirlineAirport={props.selectTypeAirlineAirport}
                  xTitle="Year"
                  yTitle={props.defaultY}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingTop: '0px', paddingLeft: '73px' }}>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <label className="header-label">Year</label>
              </Grid.Column>
            </Grid.Row>
          </React.Fragment>
        ) : null}

        {props.state.airlinestatus ? (
          <React.Fragment>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <label className="header-label">
                  {props.state.year} Operating Airlines between BKK-
                  {props.state.airport}
                </label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingTop: '0px',
                paddingLeft: '385px',
                paddingBottom: '0px'
              }}
            >
              <Grid.Column>
                <label className="header-label">{props.state.defaultY}</label>
              </Grid.Column>
            </Grid.Row>
            {props.state.airlineData.length < 20 ? (
              <React.Fragment>
                <Grid.Row textAlign="center" style={{ paddingBottom: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <RouteAirlineBar
                      data={props.state.airlineData}
                      color="#15a1cc"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1} style={{ paddingTop: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingLeft: '85px'
                    }}
                  >
                    <label className="header-label">Airline</label>
                  </Grid.Column>
                </Grid.Row>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid.Row textAlign="center">
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
            )}
          </React.Fragment>
        ) : null}
        {props.state.airlinestatus2 ? (
          <React.Fragment>
            <Grid.Row columns={2} textAlign="center" verticalAlign="middle">
              <Grid.Column textAlign="right">
                <label className="A-label-text">View</label>
              </Grid.Column>
              <Grid.Column width={2} verticalAlign="middle">
                <Dropdown
                  defaultValue={props.state.defaultY2}
                  options={defaultY2}
                  name="defaultY2"
                  placeholder="Yaxis"
                  selection
                  fluid
                  onChange={props.handleDropdown2}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <label className="header-label">
                  {props.state.year} Operating Airlines between BKK-
                  {props.state.airport}
                </label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingTop: '0px',
                paddingLeft: '385px',
                paddingBottom: '0px'
              }}
            >
              <Grid.Column>
                <label className="header-label">{props.state.defaultY2}</label>
              </Grid.Column>
            </Grid.Row>
            {props.state.airlineData2.length < 20 ? (
              <React.Fragment>
                <Grid.Row textAlign="center" style={{ paddingBottom: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <RouteAirlineBar
                      data={props.state.airlineData2}
                      color="#35e0ff"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1} style={{ paddingTop: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingLeft: '85px'
                    }}
                  >
                    <label className="header-label">Airline</label>
                  </Grid.Column>
                </Grid.Row>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid.Row textAlign="center">
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
            )}
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
