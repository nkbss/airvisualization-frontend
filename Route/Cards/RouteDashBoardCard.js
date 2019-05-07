import React from 'react'
import { Grid, Dropdown, Input } from '../../node_modules/semantic-ui-react'
import StackBar from '../../components/Graph/StackBar'

const airport = [
  // { key: 1, text: 'All', value: '%' },
  { key: 2, text: 'Phuket Airport', value: 'HKT' },
  { key: 3, text: 'Samui Airport', value: 'USM' },
  { key: 4, text: 'Chiang Mai Airport', value: 'CNX' },
  { key: 5, text: 'Hong Kong Airport', value: 'HKG' }
]

const defaultY = [
  { key: 1, text: 'Seats', value: 'Seats' },
  { key: 2, text: 'Passengers', value: 'Passengers' },
  { key: 3, text: 'Frequencies', value: 'Frequencies' }
]

const RouteDashBoardCard = props => {
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
            <label className="header">Segment</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          centered
          textAlign="center"
          columns={4}
          verticalAlign="middle"
        >
          <Grid.Column width={1}>
            <label className="S-label-text">Airport</label>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle">
            <Input
              type="airport"
              defaultValue="HKG"
              name="airport"
              placeholder="Airport"
              fluid
              onChange={props.handleDropdown}
              onKeyPress={props.pressEnterToGetData}
            />
          </Grid.Column>
          <Grid.Column width={1} textAlign="center">
            <label className="S-label-text">View</label>
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
        {props.state.status ? (
          <React.Fragment>
            <Grid.Row>
              <Grid.Column
                style={{
                  paddingTop: '0px',
                  paddingLeft: '385px',
                  paddingBottom: '0px'
                }}
              >
                <label className="header-label">{props.state.defaultY}</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              centered
              style={{ paddingTop: '0px', paddingBottom: '0px' }}
            >
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <StackBar data={props.state.data} />
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
      </Grid>
    </React.Fragment>
  )
}

export { RouteDashBoardCard }
