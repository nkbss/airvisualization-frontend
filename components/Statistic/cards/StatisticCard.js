import React from 'react'
import { Grid, Dropdown } from '../../../node_modules/semantic-ui-react'

options = [
    {key:'totalpax',value:'totalpax',text:'totalpassenger'},
    {key:''}
]

const StatisticCard = () => {
  return (
    <div>
      <Grid textAlign="center">
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <Dropdown />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { StatisticCard }
