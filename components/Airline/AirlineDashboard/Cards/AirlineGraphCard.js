import React from 'react'
import {
  Grid,
  Dropdown,
  Loader,
  Input
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
import { RouteAirlineBar } from '../../../Graph/RouteAirlineBar'
var commaNumber = require('comma-number')
const airline = [
  { key: 1, text: 'THA', value: 'THA' },
  { key: 2, text: 'BKP', value: 'BKP' },
  { key: 3, text: 'THD', value: 'THD' }
]

const defaultY = [
  { key: 1, text: 'No. of Route ', value: 'Routes' },
  { key: 2, text: 'Seats', value: 'Seats' },
  { key: 3, text: 'Passengers', value: 'Passengers' },
  // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
  // { key: 5, text: 'RPK', value: 'RPK' },
  { key: 6, text: 'Frequencies', value: 'Frequencies' }
]

const defaultY2 = [
  { key: 1, text: 'No. of Route ', value: 'Routes' },
  { key: 2, text: 'Seats', value: 'Seats' },
  { key: 3, text: 'Passengers', value: 'Passengers' },
  // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
  // { key: 5, text: 'RPK', value: 'RPK' },
  { key: 6, text: 'Frequencies', value: 'Frequencies' }
]
const DefaultBar = dynamic(() => import('../../../Graph/defaultBar'), {
  ssr: false
})

// const RouteAirlineBar = dynamic(
//   () => import('../../../Graph/RouteAirlineBar'),
//   {
//     ssr: false
//   }
// )

const AirlineGraphCard = props => {
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
            <label className="header">Airline</label>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          centered
          textAlign="center"
          columns={4}
          verticalAlign="middle"
        >
          <Grid.Column width={1}>
            <label className="A-label-text">Airline</label>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Input
              type="airline"
              defaultValue="THA"
              name="airline"
              placeholder="Airline"
              fluid
              onChange={props.handleDropdown}
              onKeyPress={props.pressEnterToGetData}
            />
          </Grid.Column>
          <Grid.Column
            width={1}
            textAlign="center"
            // style={{ paddingRight: '0px' }}
          >
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
                  type="airline"
                  airline={props.state.airline}
                  state={props.state}
                  selectTypeRouteAirline={props.selectTypeRouteAirline}
                  getRouteAirline={props.getRouteAirline}
                  handleYear={props.handleYear}
                  data={props.state.defaultGraph}
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

        {/* {props.state.showdefault ? (
          <Grid.Row textAlign="center" style={{ paddingTop: '0px' }}>
            <Grid.Column>
              <label className="text-label">Year</label>
            </Grid.Column>
          </Grid.Row>
        ) : null} */}
        {props.state.routestatus ? (
          <React.Fragment>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <label className="header-label">
                  {props.state.year} Total {props.state.defaultY} of{' '}
                  {props.state.airline} Airline
                </label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: '0px' }}>
              <Grid.Column width={3} />
              <Grid.Column style={{ paddingLeft: '50px' }}>
                <label className="header-label">{props.state.defaultY}</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} style={{ paddingBottom: '0px' }}>
              <Grid.Column width={3} />
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                width={9}
                textAlign="right"
              >
                <RouteAirlineBar
                  data={props.state.routeAirlineData}
                  color="#28c1b2"
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
            <Grid.Row style={{ paddingTop: '0px' }}>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <label className="header-label">Airport</label>
              </Grid.Column>
            </Grid.Row>
            {props.state.routestatus2 ? (
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
                      {props.state.year} Total {props.state.defaultY2} of{' '}
                      {props.state.airline} Airline
                    </label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ paddingBottom: '0px' }}>
                  <Grid.Column width={3} />
                  <Grid.Column style={{ paddingLeft: '50px' }}>
                    <label className="header-label">
                      {props.state.defaultY2}
                    </label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3} style={{ paddingBottom: '0px' }}>
                  <Grid.Column width={3} />
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                    width={9}
                    textAlign="right"
                  >
                    <RouteAirlineBar
                      data={props.state.routeAirlineData2}
                      color="#31f759"
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
                      <label>{commaNumber(props.state.other2)}</label>
                    </Grid.Column>
                  ) : null}
                </Grid.Row>
                <Grid.Row style={{ paddingTop: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <label className="header-label">Airport</label>
                  </Grid.Column>
                </Grid.Row>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}
      </Grid>
    </React.Fragment>
  )
}

export { AirlineGraphCard }
