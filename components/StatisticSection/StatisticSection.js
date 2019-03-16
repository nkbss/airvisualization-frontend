import React from 'react'
import { Card } from '../../node_modules/semantic-ui-react'

const StatisticSection = props => {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        <Card>
          <Card.Content>
            <Card.Header>Total Flight</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>{props.totalflight}</Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Total Passenger</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>{props.totalpassenger}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export { StatisticSection }
