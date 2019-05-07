import React, { Component } from 'react'
import { AirlineGraphCard, AirlineMapCard } from '../Cards'
import dynamic from 'next/dynamic'
import {
  Dimmer,
  Loader,
  Grid,
  Dropdown,
  Menu,
  Modal,
  Button
} from '../../../../node_modules/semantic-ui-react'

class AirlineDashboardLayout extends Component {
  state = {
    y2017: null,
    airline: 'THA',
    mapyear: '2017',
    defaultY: 'Passengers',
    defaultY2: 'Passengers',
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
    routeAirlineData2: [
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
    routestatus2: false,
    routeload: false,
    bubblemap: [],
    map: false,
    mode: true,
    graph: true,
    mapload: false,
    mapstatus: false,
    type: null,
    otherstatus: false,
    other: 0,
    other2: 0,
    graphindex: null,
    notfound: false
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
    this.getPax(this.state.airline)
  }

  handleYear = (year, index) => {
    this.setState({ year: year, mapyear: year, graphindex: index })
    this.setOpacity(this.state.defaultGraph, index)
    // if (this.state.defaultY === 'Pax') {
    //   this.getPaxBubbleMap(year, this.state.airline)
    // } else if (this.state.defaultY === 'Frequency') {
    //   this.getFrequencyBubbleMap(year, this.state.airline)
    // } else if (this.state.defaultY === 'Seat') {
    //   this.getSeatBubbleMap(year, this.state.airline)
    // }
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
      this.filterDefaultGraph(this.state.airline, data.value, this.state.year)
      this.filterRouteGraph(this.state.airline, data.value, this.state.year)
      this.setState({ defaultY2: data.value })
    }
  }

  handleDropdown2 = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    this.filterRouteGraph(this.state.airline, data.value, this.state.year)
  }

  pressEnterToGetData = event => {
    if (this.state.airline != '' || this.state.airline != null) {
      if (event.key === 'Enter') {
        this.filterDefaultGraph(
          this.state.airline,
          this.state.defaultY,
          this.state.year
        )
        if (this.state.graphindex != null) {
          this.selectTypeRouteAirline(
            this.state.defaultY,
            this.state.year,
            this.state.airline
          )
        }
        console.log('Enter')
      }
    }
  }

  filterRouteGraph = (airline, status, year) => {
    if (status === 'Passengers') {
      this.getPaxRouteAirline(year, airline, 2)
    }
    if (status === 'Frequencies') {
      this.getRouteAirline(year, airline, 2)
    }

    if (status === 'Seats') {
      this.getSeatRouteAirline(year, airline, 2)
    }

    if (status === 'Routes') {
      this.getRouteAirline(year, airline, 2)
    }
    this.forceUpdate()
  }

  filterDefaultGraph = (airline, status, year) => {
    console.log(status)
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Passengers') {
      this.getPax(airline)
      if (this.state.graphindex != null) {
        this.getPaxRouteAirline(year, airline, 1)
      }
      // this.getPaxBubbleMap(year, airline)
    }
    if (status === 'Frequencies') {
      this.getFrequency(airline)
      if (this.state.graphindex != null) {
        this.getRouteAirline(year, airline, 1)
      }
      // this.getFrequencyBubbleMap(year, airline)
    }

    if (status === 'Seats') {
      this.getSeat(airline)
      if (this.state.graphindex != null) {
        this.getSeatRouteAirline(year, airline, 1)
      }
      // this.getSeatBubbleMap(year, airline)
    }

    if (status === 'Routes') {
      this.getRoute(airline)
      if (this.state.graphindex != null) {
        this.getRouteAirline(year, airline, 1)
      }
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
        this.checkData(data.data)
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
        this.checkData(data.data)
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
        this.checkData(data.data)
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
        this.checkData(data.data)
        this.setDefaultGraphData(data.data)
        this.forceUpdate()
      })
  }

  getRouteAirline = (year, airline, status) => {
    if (status === 2) {
      this.setState({ routestatus2: false, routeload: true })
    } else {
      this.setState({ routestatus: false, routeload: true })
    }

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
          if (status === 2) {
            this.checkData(data.data)
            this.setRouteAirlineGraph2(data.data)
            this.setState({ routestatus2: true, routeload: false })
            this.forceUpdate()
          } else {
            this.checkData(data.data)
            this.setRouteAirlineGraph(data.data)
            this.setState({ routestatus: true, routeload: false })
            this.forceUpdate()
          }
        }
      })
  }

  getPaxRouteAirline = (year, airline, status) => {
    if (status === 2) {
      this.setState({ routestatus2: false, routeload: true })
    } else {
      this.setState({ routestatus: false, routeload: true })
    }
    fetch('http://localhost:4000/getPaxRouteAirline', {
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
          if (status === 2) {
            this.checkData(data.data)
            this.setRouteAirlineGraph2(data.data)
            this.setState({ routestatus2: true, routeload: false })
          } else {
            this.checkData(data.data)
            this.setRouteAirlineGraph(data.data)
            this.setState({ routestatus: true, routeload: false })
          }
        }
      })
  }

  getSeatRouteAirline = (year, airline, status) => {
    if (status === 2) {
      this.setState({ routestatus2: false, routeload: true })
    } else {
      this.setState({ routestatus: false, routeload: true })
    }
    fetch('http://localhost:4000/getSeatRouteAirline', {
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
          if (status === 2) {
            this.checkData(data.data)
            this.setRouteAirlineGraph2(data.data)
            this.setState({ routestatus2: true, routeload: false })
          } else {
            this.checkData(data.data)
            this.setRouteAirlineGraph(data.data)
            this.setState({ routestatus: true, routeload: false })
          }
        }
      })
  }

  selectTypeRouteAirline = (type, year, airline) => {
    if (type === 'Passengers') {
      this.getPaxRouteAirline(year, airline, 1)
      this.getPaxRouteAirline(year, airline, 2)
    } else if (type === 'Seats') {
      this.getSeatRouteAirline(year, airline, 1)
      this.getSeatRouteAirline(year, airline, 2)
    } else {
      this.getRouteAirline(year, airline, 1)
      this.getRouteAirline(year, airline, 2)
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

  setRouteAirlineGraph2 = data => {
    this.state.other2 = 0
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          if (data[i].AIRPORT === this.state.routeAirlineData2[i].x) {
            this.state.routeAirlineData2[i].y = data[i].Results
          }
        } else if (i === 20) {
          sum = sum + data[i].Results
          this.state.otherstatus = true
          // this.state.routeAirlineData.push({ x: 'Other', y: 0 })
        } else if (i > 20) {
          sum = sum + data[i].Results
        }
      }
      this.state.other2 = sum
      // this.state.routeAirlineData[20].y = sum
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].AIRPORT === this.state.routeAirlineData2[i].x) {
          this.state.routeAirlineData2[i].y = data[i].Results
        }
      }
    }
  }

  setRouteAirlineGraph = data => {
    this.state.routeAirlineData = []
    this.state.routeAirlineData2 = []
    console.log(data.length)
    let sum = 0
    if (data.length > 20) {
      for (let i = 0; i < data.length; i++) {
        if (i < 20) {
          this.state.routeAirlineData.push({
            x: data[i].AIRPORT,
            y: data[i].Results
          })
          this.state.routeAirlineData2.push({
            x: data[i].AIRPORT
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
        this.state.routeAirlineData2.push({
          x: data[i].AIRPORT
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
    console.log(this.state.routeAirlineData2)

    return (
      <div className="section-dashboard">
        <AirlineGraphCard
          handleDropdown={this.handleDropdown}
          handleDropdown2={this.handleDropdown2}
          handleYear={this.handleYear}
          getRouteAirline={this.getRouteAirline}
          selectTypeRouteAirline={this.selectTypeRouteAirline}
          state={this.state}
          pressEnterToGetData={this.pressEnterToGetData}
        />

        {/* {this.state.map ? (
          <AirlineMapCard state={this.state} data={this.state.bubblemap} />
        ) : null} */}
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
          <Dimmer active={this.state.routeload}>
            <Loader size="big">Get Route!</Loader>
          </Dimmer>
        )}
      </div>
    )
  }
}

export default AirlineDashboardLayout
