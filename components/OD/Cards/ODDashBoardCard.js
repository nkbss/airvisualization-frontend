import React from 'react'
import { Grid, Dropdown, Input } from '../../../node_modules/semantic-ui-react'
import { ODdefaultBar, ODAirportBar } from '../../Graph'
var commaNumber = require('comma-number')
const stop = [
  { key: 1, text: 'Direct flight', value: 0 },
  { key: 2, text: '1 connecting point', value: 1 },
  { key: 3, text: '2 connecting points', value: 2 },
  { key: 4, text: '3 connecting points', value: 3 },
  { key: 5, text: '4 connecting points', value: 4 },
  { key: 6, text: '5 connecting points', value: 5 }
]

const year = [
  { key: 1, text: '2013', value: '2013' },
  { key: 2, text: '2014', value: '2014' },
  { key: 3, text: '2015', value: '2015' },
  { key: 4, text: '2016', value: '2016' },
  { key: 5, text: '2017', value: '2017' }
]

const ODDashBoardCard = props => {
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
            <label className="od-header">Route</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={6} verticalAlign="middle">
          <Grid.Column
            width={2}
            textAlign="center"
            style={{ padding: '0 0 0 0' }}
          >
            <label className="OD-label-text">Original</label>
          </Grid.Column>
          <Grid.Column
            width={2}
            style={{ padding: '0 0 0 0' }}
            textAlign="center"
          >
            <Input
              fluid
              name="orig"
              placeholder="Original"
              onChange={props.handleInput}
              onKeyPress={event => props.pressEnterToGetData(event)}
            />
          </Grid.Column>
          <Grid.Column
            width={2}
            textAlign="center"
            style={{ padding: '0 0 0 0' }}
          >
            <label className="OD-label-text">Destination</label>
          </Grid.Column>
          <Grid.Column width={2} style={{ padding: '0 0 0 0' }}>
            <Input
              fluid
              name="dest"
              placeholder="Destination"
              onChange={props.handleInput}
              onKeyPress={event => props.pressEnterToGetData(event)}
            />
          </Grid.Column>
          <Grid.Column
            width={1}
            textAlign="center"
            style={{ padding: '0 0 0 0' }}
          >
            <label className="OD-label-text">Year</label>
          </Grid.Column>
          <Grid.Column width={2} style={{ padding: '0 0 0 0' }}>
            <Dropdown
              name="year"
              placeholder="Year"
              options={year}
              selection
              fluid
              onChange={props.handleDropdown}
            />
          </Grid.Column>
        </Grid.Row>
        {/* {props.state.showdefault ? (
          <Grid.Row centered columns={1} verticalAlign="middle">
            <Grid.Column textAlign="center">
              <label className="OD-label-header">
                {props.state.year} Total Passengers{' '}
                {props.state.totalstop === 0
                  ? 'direct flight'
                  : props.state.totalstop}{' '}
                {props.state.totalstop === 1 ? 'connecting point' : null}{' '}
                {props.state.totalstop > 1 ? 'connecting points' : null} between{' '}
                {props.state.orig}-{props.state.dest}
              </label>
            </Grid.Column>
          </Grid.Row>
        ) : null} */}
        <Grid.Row
          style={{
            paddingTop: '20px',
            paddingLeft: '385px',
            paddingBottom: '0px'
          }}
        >
          {props.state.showdefault ? (
            <Grid.Column>
              <label className="header-label">Passengers</label>
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
              <ODdefaultBar
                state={props.state}
                data={props.state.defaultGraph}
                xTitle="Year"
                yTitle={props.defaultY}
                getStopOD={props.getStopOD}
                handleYear={props.handleYear}
                setStopText={props.setStopText}
              />
            ) : null}
          </Grid.Column>
        </Grid.Row>

        {props.state.stopstatus ? (
          <React.Fragment>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <label className="OD-label-header">
                  {props.state.year} Total Passengers for{' '}
                  {props.state.statusstop}
                </label>
              </Grid.Column>
            </Grid.Row>

            {props.state.other > 0 ? (
              <React.Fragment>
                <Grid.Row
                  style={{
                    paddingTop: '0px',
                    paddingLeft: '392px',
                    paddingBottom: '0px'
                  }}
                >
                  <Grid.Column>
                    <label className="header-label">Passengers</label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3} />
                  <Grid.Column width={9} style={{ paddingLeft: '66px' }}>
                    <ODAirportBar data={props.state.datastop} />
                  </Grid.Column>

                  <Grid.Column
                    width={2}
                    textAlign="left"
                    style={{ paddingLeft: '46px' }}
                  >
                    <label>Others</label>
                    <br />
                    <label>{commaNumber(props.state.other)}</label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1} style={{ paddingTop: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingLeft: '130px'
                    }}
                  >
                    <label className="header-label">Airport</label>
                  </Grid.Column>
                </Grid.Row>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid.Row
                  style={{
                    paddingTop: '0px',
                    paddingLeft: '385px',
                    paddingBottom: '0px'
                  }}
                >
                  <Grid.Column>
                    <label className="header-label">Passengers</label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered style={{ paddingBottom: '0px' }}>
                  <Grid.Column
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <ODAirportBar data={props.state.datastop} />
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
                    <label className="header-label">Airport</label>
                  </Grid.Column>
                </Grid.Row>
              </React.Fragment>
            )}
          </React.Fragment>
        ) : null}
      </Grid>
    </React.Fragment>
  )
}
export { ODDashBoardCard }
