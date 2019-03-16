import React, { Component } from 'react'
import { DashboardCard } from '../cards'

class DashboardLayout extends Component {
  state = {
    statistic: null,
    year: null,
    flightB: false,
    routeB: false,
    airlineB: false,
    aircraftB: false,
    seatB: false,
    frequencyB: false,
    paxB: false,
    loadfactorB: false
  }

  handleDropdown = (e, data) => {
    console.log(data.value)
    this.setState({ [data.name]: data.value })
  }

  getAirport = year => {
    console.log('Get Airport!')
    if (year === '2017') {
      fetch('http://localhost:4000/Y2017')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          // this.setState({ Airline: data.data, totalflight: data.data.length })
          // this.forceUpdate()
        })
    }
  }

  handleSelectOption = (e, data) => {
    if (data.name === 'flightB') {
      let status = !this.state.flightB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'routeB') {
      let status = !this.state.routeB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'airlineB') {
      let status = !this.state.airlineB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'aircraftB') {
      let status = !this.state.aircraftB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'seatB') {
      let status = !this.state.seatB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'frequencyB') {
      let status = !this.state.frequencyB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'paxB') {
      let status = !this.state.paxB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'loadfactorB') {
      let status = !this.state.loadfactorB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
  }

  searchResult = () => {
    this.getAirport(this.state.year)
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <DashboardCard
          state={this.state}
          handleDropdown={this.handleDropdown}
          searchResult={this.searchResult}
          handleSelectOption={this.handleSelectOption}
        />
      </React.Fragment>
    )
  }
}

export { DashboardLayout }
