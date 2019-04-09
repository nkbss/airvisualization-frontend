import React, { Component } from 'react'
import { DashboardCard } from '../cards'
import './style.css'

class DashboardLayout extends Component {
  state = {
    y2017: null,
    statistic: null,
    year: null,
    flightB: false,
    routeB: false,
    airlineB: false,
    aircraftB: false,
    seatB: false,
    frequencyB: false,
    paxB: false,
    loadfactorB: false,
    listB: false,
    filterB: false,
    rankB: false,
    sumB: false,
    growthB: false,
    averageB: false,
    sdB: false,
    flight: null,
    route: null,
    airline: null,
    aircraft: null,
    seat: null,
    frequency: null,
    pax: null,
    loadfactor: null,
    sum: 0,
    av: 0
  }

  componentDidMount = () => {
    this.getAirport()
  }

  handleDropdown = (e, data) => {
    console.log(data.value)
    this.setState({ [data.name]: data.value })
  }

  getAirport = () => {
    console.log('Get Airport!')
    // if (year === '2017') {
    //   fetch('http://localhost:4000/Y2017')
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
    //       if (this.state.airlineB === true) {
    //         this.calculatorSum(data, 'Airline')
    //       }
    //       this.setState({ Airline: data.data, totalflight: data.data.length })
    //       this.forceUpdate()
    //     })
    // }
    fetch('http://localhost:4000/Y2017')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ y2017: data })
        this.forceUpdate()
      })
  }

  calculatorSum = (year, filter, stat) => {
    this.state.sum = 0
    if (year === '2017') {
      if (filter === 'Airline' && stat === 'Sum')
        for (let i = 0; i < this.state.y2017.data.length; i++) {
          if (this.state.y2017.data[i].OWNER_CODE === this.state.airline) {
            this.state.sum = this.state.sum + 1
          }
        }
      console.log(this.state.sum)
    }
  }

  calculatorAv = (year, filter, stat) => {
    if (year === '2017') {
      if (filter === 'Airline' && stat === 'Av')
        for (let i = 0; i < this.state.y2017.data.length; i++) {
          if (this.state.y2017.data[i].OWNER_CODE === this.state.airline) {
            this.state.sum = this.state.sum + 1
          }
          this.state.av = this.state.sum / this.state.y2017.data.length
        }
      console.log(this.state.av)
    }
  }

  handleSelectOption = (e, data) => {
    if (data.name === 'flightB') {
      let status = !this.state.flightB
      this.setState({ [data.name]: status, flight: null })
      this.forceUpdate()
    }
    if (data.name === 'routeB') {
      let status = !this.state.routeB
      this.setState({ [data.name]: status, route: null })
      this.forceUpdate()
    }
    if (data.name === 'airlineB') {
      let status = !this.state.airlineB
      this.setState({ [data.name]: status, airline: null })
      this.forceUpdate()
    }
    if (data.name === 'aircraftB') {
      let status = !this.state.aircraftB
      this.setState({ [data.name]: status, aircraft: null })
      this.forceUpdate()
    }
    if (data.name === 'seatB') {
      let status = !this.state.seatB
      this.setState({ [data.name]: status, seat: null })
      this.forceUpdate()
    }
    if (data.name === 'frequencyB') {
      let status = !this.state.frequencyB
      this.setState({ [data.name]: status, frequency: null })
      this.forceUpdate()
    }
    if (data.name === 'paxB') {
      let status = !this.state.paxB
      this.setState({ [data.name]: status, pax: null })
      this.forceUpdate()
    }
    if (data.name === 'loadfactorB') {
      let status = !this.state.loadfactorB
      this.setState({ [data.name]: status, loadfactor: null })
      this.forceUpdate()
    }
    if (data.name === 'listB') {
      let status = !this.state.listB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'filterB') {
      let status = !this.state.filterB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'rankB') {
      let status = !this.state.rankB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'sumB') {
      let status = !this.state.sumB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'growthB') {
      let status = !this.state.growthB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'averageB') {
      let status = !this.state.averageB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'sdB') {
      let status = !this.state.sdB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
  }

  handleInput = (e, data) => {
    this.setState({ [data.name]: data.value })
  }

  searchResult = () => {
    if (this.state.airlineB && this.state.sumB) {
      this.calculatorSum(this.state.year, 'Airline', 'Sum')
    }
    if (this.state.airlineB && this.state.averageB) {
      this.calculatorAv(this.state.year, 'Airline', 'Av')
    }
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div id="airport-dashboard">
          <DashboardCard
            state={this.state}
            handleDropdown={this.handleDropdown}
            searchResult={this.searchResult}
            handleSelectOption={this.handleSelectOption}
            handleInput={this.handleInput}
          />
        </div>
      </React.Fragment>
    )
  }
}

export { DashboardLayout }
