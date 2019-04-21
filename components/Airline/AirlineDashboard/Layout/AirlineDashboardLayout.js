import React, { Component } from 'react'
import { AirlineGraphCard, AirlineMapCard } from '../Cards'
import dynamic from 'next/dynamic'
import {
  Dimmer,
  Loader,
  Grid,
  Dropdown,
  Menu
} from '../../../../node_modules/semantic-ui-react'

class AirlineDashboardLayout extends Component {
  state = {
    y2017: null,
    airline: 'THA',
    mapyear: '2017',
    defaultY: 'Pax',
    data: null,
    defaultY2017: null,
    defaultGraphX: ['2013', '2014', '2015', '2016', '2017'],
    defaultGraphY: [],
    showdefault: false,
    defaultGraph: [
      { x: '2013', y: 0, opacity: 1, color: '#1662cc', index: 0 },
      { x: '2014', y: 0, opacity: 1, color: '#1662cc', index: 1 },
      { x: '2015', y: 0, opacity: 1, color: '#1662cc', index: 2 },
      { x: '2016', y: 0, opacity: 1, color: '#1662cc', index: 3 },
      { x: '2017', y: 0, opacity: 1, color: '#1662cc', index: 4 }
    ],
    query: 'Test query',
    load: true,
    year: null,
    routeAirlineData: [
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 },
      { x: '', y: 0 }
      // { x: 'Other', y: 0 }
    ],
    routestatus: false,
    routeload: false,
    bubblemap: [],
    map: false,
    mode: true,
    graph: true,
    mapload: false,
    mapstatus: false,
    type: null,
    otherstatus: false,
    other: 0
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
    this.getPax(this.state.airline)
    this.getPaxBubbleMap(this.state.mapyear, this.state.airline)
  }

  handleYear = (year, index) => {
    this.setState({ year: year, mapyear: year })
    this.setOpacity(this.state.defaultGraph, index)
    if (this.state.defaultY === 'Pax') {
      this.getPaxBubbleMap(year, this.state.airline)
    } else if (this.state.defaultY === 'Frequency') {
      this.getFrequencyBubbleMap(year, this.state.airline)
    } else if (this.state.defaultY === 'Seat') {
      this.getSeatBubbleMap(year, this.state.airline)
    }

    this.forceUpdate()
  }

  activeMode = type => {
    if (type === 'graph') {
      this.state.graph = true
      this.state.map = false
    } else if (type === 'map') {
      this.state.map = true
      this.state.graph = false
    }
    this.forceUpdate()
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      if (this.state.year === null) {
        this.filterDefaultGraph(this.state.airline, data.value, this.state.year)
      } else {
        this.filterDefaultGraph(
          this.state.airline,
          data.value,
          this.state.mapyear
        )
      }
    }
    if (data.name === 'airline' && this.state.defaultY !== null) {
      this.filterDefaultGraph(data.value, this.state.defaultY, this.state.year)
    }
    if (data.name === 'year') {
      this.filterDefaultGraph(
        this.state.airline,
        this.state.defaultY,
        data.value
      )
      this.getRouteAirline(data.value, this.state.airline)
      this.handleYear(data.value)
    }

    if (data.type === 'airline') {
      if (this.state.year != null) {
        this.getRouteAirline(this.state.year, data.value)
      }
    }
  }

  filterDefaultGraph = (airline, status, year) => {
    console.log(status)
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Pax') {
      this.getPax(airline)
      this.getPaxBubbleMap(year, airline)
    }
    if (status === 'Frequency') {
      this.getFrequency(airline)
      this.getFrequencyBubbleMap(year, airline)
    }

    if (status === 'Seat') {
      this.getSeat(airline)
      this.getSeatBubbleMap(year, airline)
    }

    if (status === 'Route') {
      this.getRoute(airline)
    }
    this.forceUpdate()
  }

  getPax = airline => {
    console.log(this.state.type)
    console.log('Get Airport!')
    fetch('http://localhost:4000/getPax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: '%',
        airline: airline,
        flight: '%',
        aircraft: '%',
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.loadFinished(data)
        }
        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  getFrequency = airline => {
    fetch('http://localhost:4000/getFrequency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: '%',
        airline: airline,
        flight: '%',
        aircraft: '%',
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.loadFinished(data)
        }
        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  getSeat = airline => {
    fetch('http://localhost:4000/getSeat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: '%',
        airline: airline,
        flight: '%',
        aircraft: '%',
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.loadFinished(data)
        }
        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  getRoute = airline => {
    fetch('http://localhost:4000/getRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: '%',
        airline: airline,
        flight: '%',
        aircraft: '%',
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.loadFinished(data)
        }

        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  getRouteAirline = (year, airline) => {
    this.setState({ routestatus: false, routeload: true })
    fetch('http://localhost:4000/getRouteAirline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airline: airline,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data) {
          this.setRouteAirlineGraph(data.data)
          this.setState({ routestatus: true, routeload: false })
        }
      })
  }

  getFrequencyBubbleMap = (year, airline) => {
    this.setState({ mapstatus: false, mapload: true })
    console.log('get freq bb')
    fetch('http://localhost:4000/getFrequencyBubbleMap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airline: airline,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.setBubbleMap(data.data)
          // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)
        }

        // this.setDefaultGraphData(data.data)
        // this.forceUpdate()
      })
  }

  getPaxBubbleMap = (year, airline) => {
    console.log(this.state.type)
    console.log('get pax bb')
    this.setState({ mapstatus: false, mapload: true })
    fetch('http://localhost:4000/getPaxBubbleMap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airline: airline,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        // this.setRouteAirlineGraph(data.data)
        if (data) {
          this.setBubbleMap(data.data)
          // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)
        }

        // this.setDefaultGraphData(data.data)
        // this.forceUpdate()
      })
  }

  getSeatBubbleMap = (year, airline) => {
    console.log('get seat bb')
    this.setState({ mapstatus: false, mapload: true })
    fetch('http://localhost:4000/getSeatBubbleMap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airline: airline,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setRouteAirlineGraph(data.data)
        if (data) {
          this.setBubbleMap(data.data)
          // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)
        }

        // this.setDefaultGraphData(data.data)
        // this.forceUpdate()
      })
  }

  setBubbleMap = data => {
    let fill = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']

    for (let i = 0; i < data.length; i++) {
      let randomfill = Math.floor(Math.random() * fill.length)
      let radius
      if (this.state.type === '5') {
        radius = (data[i].Results / data[0].Results) * 20
      } else {
        radius = (data[i].Results / data[0].Results) * 50
      }
      this.state.bubblemap.push({
        name: data[i].AIRPORT,
        result: data[i].Results,
        radius: radius,
        country: data[i].Name,
        latitude: data[i].Latitude,
        longitude: data[i].Longitude,
        fillKey: fill[randomfill]
      })
    }
    this.setState({ mapstatus: true, mapload: false })
    this.forceUpdate()
  }

  loadFinished = () => {
    this.setState({ load: false })
    this.forceUpdate
  }

  setDefaultGraphData = data => {
    for (let i = 0; i < data.length; i++) {
      this.state.defaultGraph[i].y = data[i].Results

      console.log(data[i].Results)
    }
    this.setState({ showdefault: true })
  }

  setRouteAirlineGraph = data => {
    // let sum = 0
    // for (let i = 0; i < data.length; i++) {
    //   if (i < 20) {
    //     this.state.routeAirlineData[i].x = data[i].AIRPORT
    //     this.state.routeAirlineData[i].y = data[i].Results
    //   } else {
    //     sum = sum + data[i].Results
    //   }
    // }
    // this.state.routeAirlineData[20].y = sum
    this.state.routeAirlineData = []
    console.log(data.length)
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          this.state.routeAirlineData.push({
            x: data[i].AIRPORT,
            y: data[i].Results
          })
        } else if (i === 20) {
          sum = sum + data[i].Results
          this.state.otherstatus = true
          // this.state.routeAirlineData.push({ x: 'Other', y: 0 })
        } else if (i > 20) {
          sum = sum + data[i].Results
        }
      }
      this.state.other = sum
      // this.state.routeAirlineData[20].y = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        this.state.routeAirlineData.push({
          x: data[i].AIRPORT,
          y: data[i].Results
        })
      }
    }
    this.forceUpdate()
  }

  setOpacity = (data, index) => {
    for (let i = 0; i < data.length; i++) {
      if (i != index) {
        data[i].opacity = 0.5
      } else {
        data[i].opacity = 1
      }
    }
  }

  inCrosshair = data => {
    this.state.crosshair = data
  }

  leaveCrosshair = () => {
    this.setState({ crosshair: null })
  }

  render() {
    console.log(this.state.type)
    const airline = [
      { key: 1, text: 'THA', value: 'THA' },
      { key: 2, text: 'BKP', value: 'BKP' },
      { key: 3, text: 'THD', value: 'THD' }
    ]

    const defaultY = [
      { key: 1, text: 'No. of Route ', value: 'Route' },
      { key: 2, text: 'Seat', value: 'Seat' },
      { key: 3, text: 'Pax', value: 'Pax' },
      // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
      // { key: 5, text: 'RPK', value: 'RPK' },
      { key: 6, text: 'Frequency', value: 'Frequency' }
    ]

    const defaultYM = [
      { key: 1, text: 'Seat', value: 'Seat' },
      { key: 2, text: 'Pax', value: 'Pax' },
      { key: 3, text: 'Frequency', value: 'Frequency' }
    ]

    const year = [
      { key: 1, text: '2013', value: '2013' },
      { key: 2, text: '2014', value: '2014' },
      { key: 3, text: '2015', value: '2015' },
      { key: 4, text: '2016', value: '2016' },
      { key: 5, text: '2017', value: '2017' }
    ]

    return (
      <div className="section-dashboard">
        <Grid>
          <Grid.Row
            columns={2}
            style={{
              height: '40px',
              paddingTop: '35px',
              paddingBottom: '40px'
            }}
          >
            <Grid.Column
              width={8}
              textAlign="right"
              style={{ borderRight: '2px solid grey' }}
            >
              <label>
                <a
                  className={
                    this.state.graph ? 'mode-header-active' : 'mode-header'
                  }
                  onClick={() => this.activeMode('graph')}
                >
                  Graph
                </a>
              </label>
            </Grid.Column>
            <Grid.Column width={8} textAlign="left">
              <label>
                <a
                  className={
                    this.state.map ? 'mode-header-active' : 'mode-header'
                  }
                  onClick={() => this.activeMode('map')}
                >
                  Map
                </a>
              </label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            {this.state.graph ? (
              <Grid.Column width={6} />
            ) : (
              <Grid.Column width={5} />
            )}
            {this.state.map ? (
              <Grid.Column width={2} verticalAlign="middle">
                <Dropdown
                  // defaultValue="2017"
                  value={this.state.mapyear}
                  options={year}
                  name="year"
                  placeholder="Year"
                  selection
                  fluid
                  onChange={this.handleDropdown}
                />
              </Grid.Column>
            ) : null}
            <Grid.Column width={2} verticalAlign="middle">
              <Dropdown
                type="airline"
                defaultValue="THA"
                options={airline}
                name="airline"
                placeholder="Airline"
                selection
                fluid
                onChange={this.handleDropdown}
              />
            </Grid.Column>
            <Grid.Column width={2} verticalAlign="middle">
              <Dropdown
                defaultValue="Pax"
                options={this.state.mapstatus ? defaultYM : defaultY}
                name="defaultY"
                placeholder="Yaxis"
                selection
                fluid
                onChange={this.handleDropdown}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.state.graph ? (
          <AirlineGraphCard
            handleDropdown={this.handleDropdown}
            handleYear={this.handleYear}
            getRouteAirline={this.getRouteAirline}
            state={this.state}
          />
        ) : null}

        {this.state.map ? (
          <AirlineMapCard state={this.state} data={this.state.bubblemap} />
        ) : null}

        <Dimmer active={this.state.load}>
          <Loader size="big">Preparing Data</Loader>
        </Dimmer>
        {this.state.load ? null : (
          <Dimmer active={this.state.routeload}>
            <Loader size="big">Get Route!</Loader>
          </Dimmer>
        )}
        {this.state.load === true || this.state.routeload === true ? null : (
          <Dimmer active={this.state.mapload}>
            <Loader size="big">Get Map!</Loader>
          </Dimmer>
        )}
      </div>
    )
  }
}

export default AirlineDashboardLayout
