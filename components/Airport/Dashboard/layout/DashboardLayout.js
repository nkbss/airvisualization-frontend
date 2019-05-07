import React, { Component } from 'react'
import { DashboardCard } from '../cards'
import './style.css'
import {
  Dimmer,
  Loader,
  Modal,
  Button
} from '../../../../node_modules/semantic-ui-react'
class DashboardLayout extends Component {
  state = {
    y2017: null,
    airport: 'HKT',
    defaultY: 'Passengers',
    data: null,
    showdefault: false,
    defaultGraph: [
      { x: '2013', y: 0, opacity: 1, index: 0 },
      { x: '2014', y: 0, opacity: 1, index: 1 },
      { x: '2015', y: 0, opacity: 1, index: 2 },
      { x: '2016', y: 0, opacity: 1, index: 3 },
      { x: '2017', y: 0, opacity: 1, index: 4 }
    ],
    load: true,
    year: null,
    airlineData: [],
    airlinestatus: false,
    airlineload: false,
    otherstatus: false,
    other: 0,
    graphindex: null,
    notfound: false
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
    this.getPax(this.state.airport)
  }

  handleYear = (year, index) => {
    this.setState({ year: year, graphindex: index })
    this.setOpacity(this.state.defaultGraph, index)
    this.forceUpdate()
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      this.filterDefaultGraph(this.state.airport, data.value, this.state.year)
    }
    // if (data.name === 'airport' && this.state.defaultY !== null) {
    //   this.filterDefaultGraph(data.value, this.state.defaultY)
    // }
    // if (data.type === 'airport') {
    //   if (this.state.year != null) {
    //     this.getAirlineAirport(this.state.year, data.value)
    //   }
    // }
  }

  filterDefaultGraph = (airport, status, year) => {
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Passengers') {
      this.getPax(airport)
      if (this.state.graphindex != null) {
        this.getPaxAirlineAirport(year, airport)
      }
    }
    if (status === 'Frequencies') {
      this.getFrequency(airport)
      if (this.state.graphindex != null) {
        this.getAirlineAirport(year, airport)
      }
    }

    if (status === 'Seats') {
      this.getSeat(airport)
      if (this.state.graphindex != null) {
        this.getSeatAirlineAirport(year, airport)
      }
    }

    // if (status === 'Route') {
    //   this.getRoute(airport)
    // }
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
        this.checkData(data.data)
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
        this.checkData(data.data)
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
        this.checkData(data.data)
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
        this.checkData(data.data)
        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  selectTypeAirlineAirport = (type, year, airport) => {
    if (type === 'Passengers') {
      this.getPaxAirlineAirport(year, airport)
    } else if (type === 'Seats') {
      this.getSeatAirlineAirport(year, airport)
    } else {
      this.getAirlineAirport(year, airport)
    }
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
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data) {
          this.checkData(data.data)
          this.setAirlineGraph(data.data)
          this.setState({ airlinestatus: true, airlineload: false })
        }
      })
  }

  getPaxAirlineAirport = (year, airport) => {
    this.setState({ airlinestatus: false, airlineload: true })
    fetch('http://localhost:4000/getPaxAirlineAirport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data) {
          this.checkData(data.data)
          this.setAirlineGraph(data.data)
          this.setState({ airlinestatus: true, airlineload: false })
        }
      })
  }

  getSeatAirlineAirport = (year, airport) => {
    this.setState({ airlinestatus: false, airlineload: true })
    fetch('http://localhost:4000/getSeatAirlineAirport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        year: year,
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data) {
          this.checkData(data.data)
          this.setAirlineGraph(data.data)
          this.setState({ airlinestatus: true, airlineload: false })
        }
      })
  }

  pressEnterToGetData = event => {
    if (this.state.airport != '' || this.state.airport != null) {
      if (event.key === 'Enter') {
        this.filterDefaultGraph(
          this.state.airport,
          this.state.defaultY,
          this.state.year
        )
        if (this.state.graphindex != null) {
          this.selectTypeAirlineAirport(
            this.state.defaultY,
            this.state.year,
            this.state.airport
          )
        }
        console.log('Enter')
      }
    }
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
          this.state.otherstatus = true
          // this.state.airlineData.push({ x: 'Other', y: 0 })
        } else if (i > 20) {
          sum = sum + data[i].Results
        }
      }
      this.state.other = sum
      // this.state.airlineData[20].y = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        this.state.airlineData.push({
          x: data[i].OWNER_CODE,
          y: data[i].Results
        })
      }
    }
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

  checkData = data => {
    console.log(data)
    if (data.length === 0) {
      this.setState({ notfound: true })
      this.forceUpdate()
    }
  }

  closeModal = () => {
    location.reload()
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
            selectTypeAirlineAirport={this.selectTypeAirlineAirport}
            pressEnterToGetData={this.pressEnterToGetData}
          />
          <Modal
            size="mini"
            dimmer="blurring"
            open={this.state.notfound}
            onClose={this.closeModal}
          >
            <Modal.Header>Data not found !</Modal.Header>
            <Modal.Actions>
              <Button onClick={this.closeModal} negative>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
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
