import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { Grid, Dropdown, Input } from '../../../node_modules/semantic-ui-react'
var randomColor = require('randomcolor')
const BubbleMap = dynamic(() => import('../../Datamaps/DataMaps'), {
  ssr: false
})
var commaNumber = require('comma-number')
const defaultY = [
  { key: 1, text: 'Seats', value: 'Seats' },
  { key: 2, text: 'Passengers', value: 'Passengers' },
  { key: 3, text: 'Frequencies', value: 'Frequencies' }
]

const year = [
  { key: 1, text: '2013', value: '2013' },
  { key: 2, text: '2014', value: '2014' },
  { key: 3, text: '2015', value: '2015' },
  { key: 4, text: '2016', value: '2016' },
  { key: 5, text: '2017', value: '2017' }
]

class MapCard extends Component {
  state = {
    data: null
  }

  render() {
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
              <label className="map-header">World Map</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={6} verticalAlign="middle">
            <Grid.Column
              width={1}
              textAlign="center"
              style={{ padding: '0 0 0 0' }}
            >
              <label className="M-label-text">Airline</label>
            </Grid.Column>
            <Grid.Column
              width={2}
              style={{ padding: '0 0 0 0' }}
              textAlign="center"
            >
              <Input
                fluid
                defaultValue="THA"
                name="airline"
                placeholder="Airline"
                onChange={this.props.handleInput}
                onKeyPress={event => this.props.pressEnterToGetData(event)}
              />
            </Grid.Column>
            <Grid.Column width={1} textAlign="center">
              <label className="M-label-text">View</label>
            </Grid.Column>
            <Grid.Column width={2} style={{ padding: '0 0 0 0' }}>
              <Dropdown
                defaultValue="Passengers"
                options={defaultY}
                name="defaultY"
                placeholder="Yaxis"
                selection
                fluid
                onChange={this.props.handleDropdown}
              />
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="center"
              style={{ padding: '0 0 0 0' }}
            >
              <label className="M-label-text">Year</label>
            </Grid.Column>
            <Grid.Column width={2} style={{ padding: '0 0 0 0' }}>
              <Dropdown
                name="year"
                defaultValue="2013"
                placeholder="Year"
                options={year}
                selection
                fluid
                onChange={this.props.handleDropdown}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ display: 'flex', justifyContent: 'center' }}>
              {this.props.state.mapstatus ? (
                <div
                  style={{
                    width: '90%',
                    height: '600px'
                  }}
                >
                  <BubbleMap
                    scope="world"
                    geographyConfig={{
                      popupOnHover: false,
                      highlightOnHover: false
                    }}
                    fills={{
                      defaultFill: '#abdda4',
                      f1: '#f24d4d',
                      f2: '#f1684d',
                      f3: '#f0d84c',
                      f4: '#85ef4c',
                      f5: '#4cefe6',
                      f6: '#4c61ef',
                      f7: '#954cef',
                      f8: '#ec4cef'
                    }}
                    bubbles={this.props.data}
                    bubbleOptions={{
                      popupTemplate: (geo, data) =>
                        `<div class="hoverinfo">
                             <lable>Airport : ${data.name}</lable><br> 
                             <lable>Results : ${commaNumber(
                               data.result
                             )}</lable><br> 
                             <lable>City : ${data.city}</lable><br> 
                             <lable>Country : ${data.country}</lable><br> 
                             `
                    }}
                  />
                </div>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export { MapCard }
