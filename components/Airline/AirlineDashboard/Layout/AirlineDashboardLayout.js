import React, { Component } from 'react'
import { AirlineGraphCard } from '../Cards'
import dynamic from 'next/dynamic'
import { Dimmer, Loader } from '../../../../node_modules/semantic-ui-react'

class AirlineDashboardLayout extends Component {
  state = {
    y2017: null,
    airline: 'THA',
    defaultY: 'Pax',
    data: null,
    defaultY2017: null,
    defaultGraphX: ['2013', '2014', '2015', '2016', '2017'],
    defaultGraphY: [],
    showdefault: false,
    defaultGraph: [
      { x: '2013', y: 0 },
      { x: '2014', y: 0 },
      { x: '2015', y: 0 },
      { x: '2016', y: 0 },
      { x: '2017', y: 0 }
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
      { x: '', y: 0 },
      { x: 'Other', y: 0 }
    ]
  }

  componentDidMount = () => {
    this.getPax(this.state.airline)
  }

  handleYear = year => {
    this.setState({ year: year })
    this.forceUpdate()
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      this.filterDefaultGraph(this.state.airline, data.value)
    }
    if (data.name === 'airline' && this.state.defaultY !== null) {
      this.filterDefaultGraph(data.value, this.state.defaultY)
    }
    if (data.type === 'airline') {
      if (this.state.year != null) {
        this.getRouteAirline(this.state.year, this.state.airline)
      }
    }
  }

  filterDefaultGraph = (airline, status) => {
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Pax') {
      this.getPax(airline)
    }
    if (status === 'Frequency') {
      this.getFrequency(airline)
    }

    if (status === 'Seat') {
      this.getSeat(airline)
    }

    if (status === 'Route') {
      this.getRoute(airline)
    }
    this.forceUpdate()
  }

  getPax = airline => {
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
        aircraft: '%'
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
        aircraft: '%'
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
        aircraft: '%'
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
        aircraft: '%'
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
    fetch('http://localhost:4000/getRouteAirline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airline: airline
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setRouteAirlineGraph(data.data)
        if (data) {
          this.setRouteAirlineGraph(data.data)
          // this.loadFinished(data)
        }

        // this.setDefaultGraphData(data.data)
        // this.forceUpdate()
      })
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
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      if (i < 20) {
        this.state.routeAirlineData[i].x = data[i].AIRPORT
        this.state.routeAirlineData[i].y = data[i].Results
      } else {
        sum = sum + data[i].Results
      }
    }
    this.state.routeAirlineData[20].y = sum
    this.forceUpdate()
  }

  render() {
    console.log(this.state.routeAirlineData)

    return (
      <div className="section-dashboard">
        <AirlineGraphCard
          handleDropdown={this.handleDropdown}
          handleYear={this.handleYear}
          getRouteAirline={this.getRouteAirline}
          state={this.state}
        />
        <Dimmer active={this.state.load}>
          <Loader size="big">Preparing Data</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default AirlineDashboardLayout
