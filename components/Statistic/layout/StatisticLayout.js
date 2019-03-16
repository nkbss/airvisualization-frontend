import React, { Component } from 'react'
import { StatisticCard } from '../cards'

class StatisticLayout extends Component {
  componentDidMount = () => {
    this.getAirport()
  }

  state = {
    Airline: null,
    length: null,
    totalPasssenger: 0
  }

  getAirport = () => {
    console.log('Get Airport!')
    fetch('http://localhost:4000/Airline/BKP')
      .then(res => res.json())
      .then(data => {
        this.setState({ Airline: data.data, length: data.data.length })
        this.forceUpdate()
        console.log(this.state.Airline)
      })
  }

  getPassenger = () => {
    let sum = 0
    for (let i = 0; i < this.state.length; i++) {
      sum += this.state.bkpAirline[i].PASSENGER
    }

    this.setState({ totalPasssenger: sum })
  }

  render() {
    return (
      <div>
        <StatisticCard />
      </div>
    )
  }
}
export { StatisticLayout }
