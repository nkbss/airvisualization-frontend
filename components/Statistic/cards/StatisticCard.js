import React from 'react'
import {
  Grid,
  Input,
  Button,
  Dropdown
} from '../../../node_modules/semantic-ui-react'
import { DataCard } from './DataCard'

const airport = [
  { key: 1, text: 'All', value: '%' },
  { key: 2, text: 'Phuket Airport', value: 'HKT' },
  { key: 3, text: 'Samui Airport', value: 'USM' },
  { key: 4, text: 'Chiang Mai Airport', value: 'CNX' },
  { key: 5, text: 'Hong Kong Airport', value: 'HKG' }
]

const airline = [
  { key: 1, text: 'All', value: '%' },
  { key: 2, text: 'Thai Airways', value: 'THA' },
  { key: 3, text: 'Bangkok Airways', value: 'BKP' },
  { key: 4, text: 'Thai Smile', value: 'THD' },
  { key: 5, text: 'China Southern', value: 'CSN' }
]

const StatisticCard = props => {
  return (
    <div>
      <Grid textAlign="center">
        <Grid.Row columns={7}>
          <Grid.Column verticalAlign="middle">
            <label>1. Choose condition</label>
          </Grid.Column>
          {/* <Grid.Column>
            <Button
              fluid
              name="yearB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.yearB ? null : true}
              color={props.state.yearB ? 'red' : null}
            >
              Year
            </Button>
          </Grid.Column> */}
          <Grid.Column>
            <Button
              fluid
              name="airportB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.airportB ? null : true}
              color={props.state.airportB ? 'orange' : null}
            >
              Airport
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="airlineB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.airlineB ? null : true}
              color={props.state.airlineB ? 'yellow' : null}
            >
              Airline
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="flightB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.flightB ? null : true}
              color={props.state.flightB ? 'olive' : null}
            >
              Flight
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="aircraftB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.aircraftB ? null : true}
              color={props.state.aircraftB ? 'green' : null}
            >
              Aircraft
            </Button>
          </Grid.Column>
          {/* <Grid.Column>
            <Button
              fluid
              name="seatB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.seatB ? null : true}
              color={props.state.seatB ? 'teal' : null}
            >
              Seats
            </Button>
          </Grid.Column> */}
          {/* <Grid.Column>
            <Button
              fluid
              name="paxB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.paxB ? null : true}
              color={props.state.paxB ? 'blue' : null}
            >
              Pax
            </Button>
          </Grid.Column> */}
        </Grid.Row>
        <Grid.Row columns={7}>
          <Grid.Column />
          {/* <Grid.Column>
            {props.state.yearB ? (
              <Input
                fluid
                size="large"
                name="year"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column> */}
          <Grid.Column>
            {props.state.airportB ? (
              <Dropdown
                options={airport}
                name="airport"
                placeholder="Airport"
                size="large"
                selection
                fluid
                onChange={props.handleDropdown}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.airlineB ? (
              <Dropdown
                options={airline}
                name="airline"
                placeholder="Airline"
                size="large"
                selection
                fluid
                onChange={props.handleDropdown}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.flightB ? (
              <Input
                fluid
                size="large"
                name="flight"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column>
          <Grid.Column>
            {props.state.aircraftB ? (
              <Input
                fluid
                size="large"
                name="aircraft"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column>
          {/* <Grid.Column>
            {props.state.seatB ? (
              <Input
                fluid
                size="large"
                name="seat"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column> */}
          {/* <Grid.Column>
            {props.state.paxB ? (
              <Input
                fluid
                size="large"
                name="pax"
                onChange={props.handleInput}
              />
            ) : (
              <Input disabled fluid size="large" />
            )}
          </Grid.Column> */}
        </Grid.Row>
        {/* <Grid.Row columns={7}>
          <Grid.Column verticalAlign="middle">
            <label>2. Choose result</label>
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              options={result}
              name="result"
              placeholder="result"
              size="large"
              selection
              fluid
              onChange={props.handleDropdown}
            />
          </Grid.Column>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
        </Grid.Row> */}
        <Grid.Row columns={7}>
          <Grid.Column verticalAlign="middle">
            <label>2. Choose result</label>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="paxB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.paxB ? null : true}
              color={props.state.paxB ? 'violet' : null}
            >
              Pax
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="seatB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.seatB ? null : true}
              color={props.state.seatB ? 'purple' : null}
            >
              Seat
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="routeB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.routeB ? null : true}
              color={props.state.routeB ? 'pink' : null}
            >
              No. of Route
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              fluid
              name="frequencyB"
              size="large"
              onClick={props.handleFilterButton}
              basic={props.state.frequencyB ? null : true}
              color={props.state.frequencyB ? 'brown' : null}
            >
              Frequency
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={7}>
          <Grid.Column>
            <Button
              color="green"
              fluid
              size="large"
              onClick={() => props.getData()}
            >
              Get Data
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={7}>
          {props.state.paxData ? (
            <Grid.Column width={3}>
              <DataCard
                header="Pax"
                av={props.state.av[0]}
                sd={props.state.sd[0]}
                data={props.state.paxData}
              />
            </Grid.Column>
          ) : null}

          {props.state.seatData ? (
            <Grid.Column width={3}>
              <DataCard
                header="Seats"
                av={props.state.av[1]}
                sd={props.state.sd[1]}
                data={props.state.seatData}
              />
            </Grid.Column>
          ) : null}
          {props.state.routeData ? (
            <Grid.Column width={3}>
              <DataCard
                header="Route"
                av={props.state.av[2]}
                sd={props.state.sd[2]}
                data={props.state.routeData}
              />
            </Grid.Column>
          ) : null}
          {props.state.frequencyData ? (
            <Grid.Column width={3}>
              <DataCard
                header="Frequency"
                av={props.state.av[3]}
                sd={props.state.sd[3]}
                data={props.state.frequencyData}
              />
            </Grid.Column>
          ) : null}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { StatisticCard }
