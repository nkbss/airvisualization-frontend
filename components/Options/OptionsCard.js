import React from 'react'
import {
  Grid,
  Dropdown,
  Button,
  Input
} from '../../node_modules/semantic-ui-react'

const Year = [
  { key: 1, text: '2013', value: '2013' },
  { key: 2, text: '2014', value: '2014' },
  { key: 3, text: '2015', value: '2015' },
  { key: 4, text: '2016', value: '2016' },
  { key: 5, text: '2017', value: '2017' }
]

const Statistics = [
  { key: 1, text: 'list', value: 'list' },
  { key: 2, text: 'filter', value: 'filter' },
  { key: 3, text: 'rank', value: 'rank' },
  { key: 4, text: 'sum', value: 'sum' }
]

const Season = [
  { key: 1, text: 'Winter', value: 'Winter' },
  { key: 2, text: 'Summer', value: 'Summer' }
]

const Airline = [
  { key: 1, text: 'THA', value: 'THA' },
  { key: 2, text: 'BKP', value: 'BKP' },
  { key: 3, text: 'THD', value: 'THD' }
]

const OptionsCard = props => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row verticalAlign="middle" textAlign="center">
          <Grid.Column width={4} />
          <Grid.Column width={1}>
            <label>Year</label>
          </Grid.Column>
          <Grid.Column width={2}>
            <Dropdown
              name="year"
              placeholder="Year"
              options={Year}
              clearable
              selection
              onChange={props.handleDropdown}
            />
          </Grid.Column>
          <Grid.Column width={1}>
            <label>Season</label>
          </Grid.Column>
          <Grid.Column width={2}>
            <Dropdown
              name="season"
              placeholder="Season"
              options={Season}
              clearable
              selection
              onChange={props.handleDropdown}
            />
          </Grid.Column>
          <Grid.Column width={1}>
            <label>Interval</label>
          </Grid.Column>
          <Grid.Column width={2}>
            <Dropdown
              name="season"
              placeholder="Season"
              options={Season}
              clearable
              selection
              onChange={props.handleDropdown}
            />
          </Grid.Column>
          {/* <Grid.Column width={2}>
            <Button color="green" size="large" onClick={props.searchResult}>
              Search
            </Button>
          </Grid.Column> */}
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle" columns={8}>
          <Grid.Column>
            <Button
              basic={props.state.flightB ? false : true}
              color={props.state.flightB ? 'blue' : null}
              size="large"
              fluid
              name="flightB"
              onClick={props.handleSelectOption}
            >
              Flight
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.routeB ? false : true}
              color={props.state.routeB ? 'blue' : null}
              size="large"
              fluid
              name="routeB"
              onClick={props.handleSelectOption}
            >
              Route
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.airlineB ? false : true}
              color={props.state.airlineB ? 'blue' : null}
              size="large"
              fluid
              name="airlineB"
              onClick={props.handleSelectOption}
            >
              Airline
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.aircraftB ? false : true}
              color={props.state.aircraftB ? 'blue' : null}
              size="large"
              fluid
              name="aircraftB"
              onClick={props.handleSelectOption}
            >
              Aircraft
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.seatB ? false : true}
              color={props.state.seatB ? 'blue' : null}
              seat
              size="large"
              fluid
              name="seatB"
              onClick={props.handleSelectOption}
            >
              Seat
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.frequencyB ? false : true}
              color={props.state.frequencyB ? 'blue' : null}
              size="large"
              fluid
              name="frequencyB"
              onClick={props.handleSelectOption}
            >
              Frequency
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.paxB ? false : true}
              color={props.state.paxB ? 'blue' : null}
              size="large"
              fluid
              name="paxB"
              onClick={props.handleSelectOption}
            >
              Pax
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.loadfactorB ? false : true}
              color={props.state.loadfactorB ? 'blue' : null}
              size="large"
              fluid
              name="loadfactorB"
              onClick={props.handleSelectOption}
            >
              Load Factor
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle" columns={8}>
          <Grid.Column>
            {props.state.flightB ? (
              <Input
                fluid
                size="large"
                name="flight"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.routeB ? (
              <Input
                fluid
                size="large"
                name="route"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.airlineB ? (
              <Dropdown
                name="airline"
                placeholder="Airline"
                options={Airline}
                clearable
                selection
                onChange={props.handleDropdown}
                fluid
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.aircraftB ? (
              <Input
                fluid
                size="large"
                name="aircraft"
                disabled={props.state.aircraftB ? false : true}
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.seatB ? (
              <Input
                fluid
                size="large"
                name="seat"
                disabled={props.state.seatB ? false : true}
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.frequencyB ? (
              <Input
                fluid
                size="large"
                name="frequency"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.paxB ? (
              <Input
                fluid
                size="large"
                name="pax"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.loadfactorB ? (
              <Input
                fluid
                size="large"
                name="loadfactor"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid />
            )}
          </Grid.Column>
        </Grid.Row>
        {/* -------------------Statistics------------------------------ */}
        <Grid.Row verticalAlign="middle" textAlign="center" columns={8}>
          <Grid.Column>
            <Button
              basic={props.state.listB ? false : true}
              color={props.state.listB ? 'red' : null}
              size="large"
              fluid
              name="listB"
              onClick={props.handleSelectOption}
            >
              List
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.filterB ? false : true}
              color={props.state.filterB ? 'orange' : null}
              size="large"
              fluid
              name="filterB"
              onClick={props.handleSelectOption}
            >
              Filter
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.rankB ? false : true}
              color={props.state.rankB ? 'yellow' : null}
              size="large"
              fluid
              name="rankB"
              onClick={props.handleSelectOption}
            >
              Rank
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.sumB ? false : true}
              color={props.state.sumB ? 'green' : null}
              size="large"
              fluid
              name="sumB"
              onClick={props.handleSelectOption}
            >
              Sum
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.growthB ? false : true}
              color={props.state.growthB ? 'teal' : null}
              size="large"
              fluid
              name="growthB"
              onClick={props.handleSelectOption}
            >
              Growth
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.averageB ? false : true}
              color={props.state.averageB ? 'blue' : null}
              size="large"
              fluid
              name="averageB"
              onClick={props.handleSelectOption}
            >
              Average
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              basic={props.state.sdB ? false : true}
              color={props.state.sdB ? 'purple' : null}
              size="large"
              fluid
              name="sdB"
              onClick={props.handleSelectOption}
            >
              SD
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign="middle" textAlign="center" columns={1}>
          <Grid.Column>
            <Button color="green" size="large" onClick={props.searchResult}>
              Search
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export { OptionsCard }
