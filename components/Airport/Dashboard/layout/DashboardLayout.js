import React, { Component } from 'react'
import { DashboardCard } from '../cards'
import './style.css'
import { Dimmer, Loader } from '../../../../node_modules/semantic-ui-react'
class DashboardLayout extends Component {
  state = {
    y2017: null,
    airport: 'HKT',
    defaultY: 'Pax',
    data: null,
    showdefault: false,
    defaultGraph: [
      { x: '2013', y: 0, opacity: 1 },
      { x: '2014', y: 0, opacity: 1 },
      { x: '2015', y: 0, opacity: 1 },
      { x: '2016', y: 0, opacity: 1 },
      { x: '2017', y: 0, opacity: 1 }
    ],
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
    ],
    airlineData: [],
    airlinestatus: false,
    airlineload: false
  }

  componentDidMount = () => {
    this.getPax(this.state.airport)
  }

  handleYear = year => {
    this.setState({ year: year })
    this.setOpacity(this.state.defaultGraph)
    this.forceUpdate()
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      this.filterDefaultGraph(this.state.airport, data.value)
    }
    if (data.name === 'airport' && this.state.defaultY !== null) {
      this.filterDefaultGraph(data.value, this.state.defaultY)
    }
    if (data.type === 'airport') {
      if (this.state.year != null) {
        this.getAirlineAirport(this.state.year, data.value)
      }
    }
  }

  filterDefaultGraph = (airport, status) => {
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Pax') {
      this.getPax(airport)
    }
    if (status === 'Frequency') {
      this.getFrequency(airport)
    }

    if (status === 'Seat') {
      this.getSeat(airport)
    }

    if (status === 'Route') {
      this.getRoute(airport)
    }
    this.forceUpdate()
  }

  getPax = airport => {
    console.log('Get Airport!')
    fetch('http://localhost:4000/getPax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        airline: '%',
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

  getFrequency = airport => {
    fetch('http://localhost:4000/getFrequency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        airline: '%',
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

  getSeat = airport => {
    fetch('http://localhost:4000/getSeat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        airline: '%',
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

  getRoute = airport => {
    fetch('http://localhost:4000/getRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        airline: '%',
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

  getAirlineAirport = (year, airport) => {
    this.setState({ airlinestatus: false, airlineload: true })
    fetch('http://localhost:4000/getAirlineAirport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airport: airport
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setRouteAirlineGraph(data.data)
        if (data) {
          // this.setRouteAirlineGraph(data.data)
          this.setAirlineGraph(data.data)
          this.setState({ airlinestatus: true, airlineload: false })
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

  // setRouteAirlineGraph = data => {
  //   let sum = 0
  //   for (let i = 0; i < data.length; i++) {
  //     if (i < 20) {
  //       this.state.routeAirlineData[i].x = data[i].AIRPORT
  //       this.state.routeAirlineData[i].y = data[i].Results
  //     } else {
  //       sum = sum + data[i].Results
  //     }
  //   }
  //   this.state.routeAirlineData[20].y = sum
  //   this.forceUpdate()
  // }

  setAirlineGraph = data => {
    this.state.airlineData = []
    console.log(data.length)
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          this.state.airlineData.push({
            x: data[i].OWNER_CODE,
            y: data[i].Results
          })
        } else if (i === 20) {
          sum = sum + data[i].Results
          this.state.airlineData.push({ x: 'Other', y: 0 })
        } else if (i > 20) {
          sum = sum + data[i].Results
        }
      }
      this.state.airlineData[20].y = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        this.state.airlineData.push({
          x: data[i].OWNER_CODE,
          y: data[i].Results
        })
      }
    }
  }

  setOpacity = data => {
    for (let i = 0; i < data.length; i++) {
      data[i].opacity = 1
    }
  }

  render() {
    console.log(this.state.airlineData)
    return (
      <React.Fragment>
        <div id="airport-dashboard">
          <DashboardCard
            getAirlineAirport={this.getAirlineAirport}
            handleDropdown={this.handleDropdown}
            handleYear={this.handleYear}
            state={this.state}
          />
          <Dimmer active={this.state.load}>
            <Loader size="big">Preparing Data</Loader>
          </Dimmer>
          {this.state.load ? null : (
            <Dimmer active={this.state.airlineload}>
              <Loader size="big">Get Airline!</Loader>
            </Dimmer>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export { DashboardLayout }
