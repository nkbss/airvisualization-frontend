import React, { Component } from 'react'
import { Grid } from '../../node_modules/semantic-ui-react'
import './style.css'
import Router from 'next/router'

class FirstPage extends Component {
  goTrafficDemand = type => {
    console.log(type)
    localStorage.setItem('STATE', type)
    Router.push('/trafficDemand/statistic')
  }

  render() {
    return (
      <React.Fragment>
        <div className="firstpage-section">
          <Grid id="page-section">
            <Grid.Row style={{ paddingTop: '50px' }}>
              <Grid.Column textAlign="center">
                <label className="label-header">
                  Air-Travel Visualization System
                </label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} verticalAlign="middle" id="select-flight">
              <Grid.Column
                width={7}
                textAlign="right"
                verticalAlign="middle"
                // style={{ borderRight: '2px solid black' }}
              >
                <a
                  className="a-label"
                  onClick={() => this.goTrafficDemand('5')}
                >
                  <label className="label-text">Domestic</label>
                </a>
              </Grid.Column>
              <Grid.Column id="col-divider" width={1}>
                <div className="divider" />
              </Grid.Column>
              <Grid.Column width={7} textAlign="left">
                <a
                  className="a-label"
                  onClick={() => this.goTrafficDemand('1')}
                >
                  <label className="label-text">International</label>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export { FirstPage }
