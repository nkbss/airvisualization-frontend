import React, { Component } from 'react'
import { Grid } from '../../node_modules/semantic-ui-react'
import './style.css'
import Router from 'next/router'

class FirstPage extends Component {
  goTrafficDemand = type => {
    console.log(type)
    localStorage.setItem('STATE', type)
    Router.push('/trafficDemand/airline')
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row style={{ paddingTop: '50px' }}>
            <Grid.Column textAlign="center">
              <label className="label-header">
                Air-Travel Visualization System
              </label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            columns={2}
            verticalAlign="middle"
            style={{ height: '85vh' }}
          >
            <Grid.Column
              width={8}
              textAlign="right"
              verticalAlign="middle"
              style={{ borderRight: '2px solid black' }}
            >
              <a className="a-label" onClick={() => this.goTrafficDemand('5')}>
                <label className="label-text">Domestic</label>
              </a>
            </Grid.Column>
            <Grid.Column width={8} textAlign="left">
              <a className="a-label" onClick={() => this.goTrafficDemand('1')}>
                <label className="label-text">International</label>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export { FirstPage }
