import React from 'react'
import { Grid, Dropdown } from '../../node_modules/semantic-ui-react'
import StackBar from '../../components/Graph/StackBar'

const airport = [
  // { key: 1, text: 'All', value: '%' },
  { key: 2, text: 'Phuket Airport', value: 'HKT' },
  { key: 3, text: 'Samui Airport', value: 'USM' },
  { key: 4, text: 'Chiang Mai Airport', value: 'CNX' },
  { key: 5, text: 'Hong Kong Airport', value: 'HKG' }
]

const defaultY = [
  { key: 1, text: 'Seat', value: 'Seat' },
  { key: 2, text: 'Pax', value: 'Pax' },
  { key: 3, text: 'Frequency', value: 'Frequency' }
]

const RouteDashBoardCard = props => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column width={6} />
          <Grid.Column width={2} verticalAlign="middle">
            <Dropdown
              defaultValue="HKG"
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
              defaultValue="Seat"
              options={defaultY}
              name="defaultY"
              placeholder="Yaxis"
              selection
              fluid
              onChange={props.handleDropdown}
            />
          </Grid.Column>
        </Grid.Row>
        {props.state.status ? (
          <Grid.Row centered style={{ paddingTop: '50px' }}>
            <Grid.Column
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StackBar data={props.state.data} />
            </Grid.Column>
          </Grid.Row>
        ) : null}
      </Grid>
    </React.Fragment>
  )
}

export { RouteDashBoardCard }
