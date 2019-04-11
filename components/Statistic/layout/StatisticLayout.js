import React, { Component } from 'react'
import { StatisticCard } from '../cards'
import './style.css'
class StatisticLayout extends Component {
  state = {
    Airline: null,
    length: null,
    totalPasssenger: 0,
    yearB: false,
    airportB: false,
    airlineB: false,
    flightB: false,
    aircraftB: false,
    seatB: false,
    paxB: false,
    sumB: false,
    routeB: false,
    frequencyB: false,
    list: false,
    airport: '%',
    airline: '%',
    flight: '%',
    aircraft: '%',
    paxData: null,
    seatData: null,
    routeData: null,
    frequencyData: null,
    av: [],
    sd: []
  }

  handleDropdown = (e, data) => {
    console.log(data.value)
    this.setState({ [data.name]: data.value })
  }

  handleFilterButton = (e, data) => {
    if (data.name === 'yearB') {
      let status = !this.state.yearB
      this.setState({ [data.name]: status, year: null })
      this.forceUpdate()
    }
    if (data.name === 'airportB') {
      let status = !this.state.airportB
      this.setState({ [data.name]: status, airport: '%' })
      this.forceUpdate()
    }
    if (data.name === 'airlineB') {
      let status = !this.state.airlineB
      this.setState({ [data.name]: status, airline: '%' })
      this.forceUpdate()
    }
    if (data.name === 'flightB') {
      let status = !this.state.flightB
      this.setState({ [data.name]: status, flight: '%' })
      this.forceUpdate()
    }
    if (data.name === 'aircraftB') {
      let status = !this.state.aircraftB
      this.setState({ [data.name]: status, aircraft: '%' })
      this.forceUpdate()
    }
    if (data.name === 'seatB') {
      let status = !this.state.seatB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'paxB') {
      let status = !this.state.paxB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'sumB') {
      let status = !this.state.sumB
      this.setState({ [data.name]: status, sum: null })
      this.forceUpdate()
    }
    if (data.name === 'routeB') {
      let status = !this.state.routeB
      this.setState({ [data.name]: status, route: null })
      this.forceUpdate()
    }
    if (data.name === 'frequencyB') {
      let status = !this.state.frequencyB
      this.setState({ [data.name]: status, frequency: null })
      this.forceUpdate()
    }
    if (data.name === 'listB') {
      let status = !this.state.listB
      this.setState({ [data.name]: status, list: null })
      this.forceUpdate()
    }
  }

  getData = () => {
    if (
      this.state.paxB
      // && this.state.paxData == null
    ) {
      this.getPax()
    }
    if (
      this.state.seatB
      // && this.state.seatData == null
    ) {
      this.getSeat()
    }
    if (
      this.state.routeB
      //  && this.state.routeData == null
    ) {
      this.getRoute()
    }

    if (this.state.frequencyB) {
      this.getFrequency()
    }
  }

  getPax = () => {
    console.log('get pax')
    fetch('http://localhost:4000/getPax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('pax', data.data)
        this.calculateSd('pax', data.data)
        this.setState({ paxData: data.data })
        this.forceUpdate()
      })
  }

  getSeat = () => {
    console.log('get seat')
    fetch('http://localhost:4000/getSeat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('seat', data.data)
        this.calculateSd('seat', data.data)
        this.setState({ seatData: data.data })
        this.forceUpdate()
      })
  }

  getRoute = () => {
    console.log('get route')
    fetch('http://localhost:4000/getRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('route', data.data)
        this.calculateSd('route', data.data)
        this.setState({ routeData: data.data })
        this.forceUpdate()
      })
  }

  getFrequency = () => {
    console.log('get frequency')
    fetch('http://localhost:4000/getFrequency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('frequency', data.data)
        this.calculateSd('frequency', data.data)
        this.setState({ frequencyData: data.data })
        this.forceUpdate()
      })
  }

  calculateAv = (type, data) => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].Results
    }
    let av = sum / data.length
    if (type == 'pax') {
      this.state.av[0] = av
    } else if (type == 'seat') {
      this.state.av[1] = av
    } else if (type == 'route') {
      this.state.av[2] = av
    } else if (type == 'frequency') {
      this.state.av[3] = av
    }
    this.forceUpdate()
  }

  calculateSd = (type, data) => {
    let sum = 0
    let x2 = 0
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].Results
      x2 = x2 + Math.pow(data[i].Results, 2)
    }
    let top = data.length * x2 - Math.pow(sum, 2)
    let bot = data.length * (data.length - 1)
    let sd = Math.sqrt(top / bot)
    if (type == 'pax') {
      this.state.sd[0] = sd
    } else if (type == 'seat') {
      this.state.sd[1] = sd
    } else if (type == 'route') {
      this.state.sd[2] = sd
    } else if (type == 'frequency') {
      this.state.sd[3] = sd
    }
    this.forceUpdate()
  }

  render() {
    // console.log(this.state.airline)
    // console.log(this.state.airport)
    // console.log(this.state.routeData)
    console.log(this.state.sd)

    return (
      <div className="statistic-section">
        <StatisticCard
          handleFilterButton={this.handleFilterButton}
          handleDropdown={this.handleDropdown}
          getData={this.getData}
          state={this.state}
        />
      </div>
    )
  }
}
export { StatisticLayout }
