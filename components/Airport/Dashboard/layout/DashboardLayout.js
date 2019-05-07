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
    defaultY2: 'Passengers',
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
    airlineData2: [],
    airlinestatus: false,
    airlinestatus2: false,
    airlineload: false,
    otherstatus: false,
    other: 0,
    other2: 0,
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
      this.filterAirlineGraph(this.state.airport, data.value, this.state.year)
      this.setState({ defaultY2: data.value })
    }
  }

  handleDropdown2 = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY2') {
      this.filterAirlineGraph(this.state.airport, data.value, this.state.year)
    }
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
    this.forceUpdate()
  }

  filterAirlineGraph = (airport, status, year) => {
    // this.state.showdefault = true
    // this.state.load = true
    if (status === 'Passengers') {
      this.getPaxAirlineAirport(year, airport, 2)
    }
    if (status === 'Frequencies') {
      this.getAirlineAirport(year, airport, 2)
    }

    if (status === 'Seats') {
      this.getSeatAirlineAirport(year, airport, 2)
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
      this.getPaxAirlineAirport(year, airport, 1)
      this.getPaxAirlineAirport(year, airport, 2)
    } else if (type === 'Seats') {
      this.getSeatAirlineAirport(year, airport, 1)
      this.getSeatAirlineAirport(year, airport, 2)
    } else {
      this.getAirlineAirport(year, airport, 1)
      this.getAirlineAirport(year, airport, 2)
    }
  }

  getAirlineAirport = (year, airport, status) => {
    if (status === 2) {
      this.setState({ airlinestatus2: false, airlineload: true })
    } else {
      this.setState({ airlinestatus: false, airlineload: true })
    }
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
          if (status === 2) {
            this.checkData(data.data)
            this.setAirlineGraph2(data.data)
            this.setState({ airlinestatus2: true, airlineload: false })
          } else {
            this.checkData(data.data)
            this.setAirlineGraph(data.data)
            this.setState({ airlinestatus: true, airlineload: false })
          }
        }
      })
  }

  getPaxAirlineAirport = (year, airport, status) => {
    if (status === 2) {
      this.setState({ airlinestatus2: false, airlineload: true })
    } else {
      this.setState({ airlinestatus: false, airlineload: true })
    }
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
          if (status === 2) {
            this.checkData(data.data)
            this.setAirlineGraph2(data.data)
            this.setState({ airlinestatus2: true, airlineload: false })
          } else {
            this.checkData(data.data)
            this.setAirlineGraph(data.data)
            this.setState({ airlinestatus: true, airlineload: false })
          }
        }
      })
  }

  getSeatAirlineAirport = (year, airport, status) => {
    if (status === 2) {
      this.setState({ airlinestatus2: false, airlineload: true })
    } else {
      this.setState({ airlinestatus: false, airlineload: true })
    }

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
          if (status === 2) {
            this.checkData(data.data)
            this.setAirlineGraph2(data.data)
            this.setState({ airlinestatus2: true, airlineload: false })
          } else {
            this.checkData(data.data)
            this.setAirlineGraph(data.data)
            this.setState({ airlinestatus: true, airlineload: false })
          }
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

  setAirlineGraph = data => {
    this.state.airlineData = []
    this.state.airlineData2 = []
    console.log(data.length)
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          this.state.airlineData.push({
            x: data[i].OWNER_CODE,
            y: data[i].Results
          })
          this.state.airlineData2.push({
            x: data[i].OWNER_CODE,
            y: 0
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
      this.state.other2 = sum
      // this.state.airlineData[20].y = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        this.state.airlineData.push({
          x: data[i].OWNER_CODE,
          y: data[i].Results
        })
        this.state.airlineData2.push({
          x: data[i].OWNER_CODE,
          y: 0
        })
      }
    }
  }

  setAirlineGraph2 = data => {
    this.state.other2 = 0
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          if (data[i].OWNER_CODE === this.state.airlineData2[i].x) {
            this.state.airlineData2[i].y = data[i].Results
          }
        } else if (i === 20) {
          sum = sum + data[i].Results
          this.state.otherstatus = true
        } else if (i > 20) {
          sum = sum + data[i].Results
        }
      }
      this.state.other2 = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].OWNER_CODE === this.state.airlineData2[i].x) {
          this.state.airlineData2[i].y = data[i].Results
        }
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
    console.log(this.state.airlineData2)
    return (
      <React.Fragment>
        <div id="airport-dashboard">
          <DashboardCard
            getAirlineAirport={this.getAirlineAirport}
            handleDropdown={this.handleDropdown}
            handleDropdown2={this.handleDropdown2}
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
