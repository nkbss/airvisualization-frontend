import React, { Component } from 'react'
import { MapCard } from '../Cards'
import './style.css'
import { Dimmer, Loader } from '../../../node_modules/semantic-ui-react'
class MapLayout extends Component {
  state = {
    airline: 'THA',
    year: '2013',
    defaultY: 'Passengers',
    bubblemap: [],
    mapstatus: false,
    mapload: false,
    type: null
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.getPaxBubbleMap(this.state.year, this.state.airline)
    this.forceUpdate()
  }

  handleInput = (e, data) => {
    this.setState({ [data.name]: data.value })
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    if (data.name === 'year') {
      this.selectBubbleMap(this.state.defaultY, data.value, this.state.airline)
    } else if (data.name === 'defaultY') {
      this.selectBubbleMap(data.value, this.state.year, this.state.airline)
    }
    this.forceUpdate()
  }

  pressEnterToGetData = event => {
    if (this.state.airline != '' || this.state.airline != null) {
      if (event.key === 'Enter') {
        this.selectBubbleMap(
          this.state.defaultY,
          this.state.year,
          this.state.airline
        )
        console.log('Enter')
      }
    }
  }

  selectBubbleMap = (type, year, airline) => {
    if (type === 'Passengers') {
      this.getPaxBubbleMap(year, airline)
    } else if (type === 'Seats') {
      this.getSeatBubbleMap(year, airline)
    } else {
      this.getFrequencyBubbleMap(year, airline)
    }
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
          this.setState({ mapload: false })
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
          console.log(data)
          this.setBubbleMap(data.data)
          this.setState({ mapload: false })
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
          this.setState({ mapload: false })
          // this.loadFinished(data)
        }

        // this.setDefaultGraphData(data.data)
        // this.forceUpdate()
      })
  }

  setBubbleMap = data => {
    this.state.bubblemap = []
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
        country: data[i].CountryName,
        city: data[i].City,
        latitude: data[i].Latitude,
        longitude: data[i].Longitude,
        fillKey: fill[randomfill]
      })
    }
    this.setState({ mapstatus: true, mapload: false })
    this.forceUpdate()
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div className="section-map">
          <MapCard
            handleDropdown={this.handleDropdown}
            handleInput={this.handleInput}
            pressEnterToGetData={this.pressEnterToGetData}
            data={this.state.bubblemap}
            state={this.state}
          />
          <Dimmer active={this.state.mapload}>
            <Loader size="big">Get Map!</Loader>
          </Dimmer>
        </div>
      </React.Fragment>
    )
  }
}

export { MapLayout }
