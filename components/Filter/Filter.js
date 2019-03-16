import React, { Component } from 'react'
import { Grid, Dropdown } from '../../node_modules/semantic-ui-react'

class Filter extends Component {
  render() {
    return (
      // <Grid>
      //   <Grid.Row textAlign="right" verticalAlign="middle">
      //     <Grid.Column>
      <Dropdown
        id="filter"
        text="Filter"
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Item>Season</Dropdown.Item>
          <Dropdown.Item>Month</Dropdown.Item>
          <Dropdown.Item>Week</Dropdown.Item>
          <Dropdown.Item>Date</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    )
  }
}

export { Filter }
