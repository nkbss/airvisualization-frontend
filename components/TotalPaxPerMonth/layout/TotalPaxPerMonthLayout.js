import React, { Component } from 'react'
import { TotalPaxPerMonthCard } from '../cards'

class TotalPaxPerMonthLayout extends Component {
  componentDidMount = () => {
    this.getAirport()
  }

  state = {
    Airline: null,
    length: null,
    totalpaxpermonth: [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
      { x: 7, y: 0 },
      { x: 8, y: 0 },
      { x: 9, y: 0 },
      { x: 10, y: 0 },
      { x: 11, y: 0 },
      { x: 12, y: 0 }
    ],
    showtotalpaxpermonth: false,
    max: -Infinity,
    min: Infinity
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

  getTotalPaxPerMonth = () => {
    for (let i = 0; i < this.state.length; i++) {
      let pax = this.state.Airline[i].PASSENGER
      this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y =
        this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y + pax

      if (
        this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y >
        this.state.max
      ) {
        this.state.max = this.state.totalpaxpermonth[
          this.state.Airline[i].TRN_MM - 1
        ].y
      }
      if (
        this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y <
        this.state.min
      ) {
        this.state.min = this.state.totalpaxpermonth[
          this.state.Airline[i].TRN_MM - 1
        ].y
      }
    }
    // console.log(this.state.max)
    // console.log(this.state.min)
    this.setState({ showtotalpaxpermonth: true })
  }

  render() {
    const { totalpaxpermonth, showtotalpaxpermonth, min, max } = this.state
    return (
      <div>
        <TotalPaxPerMonthCard
          getTotalPaxPerMonth={this.getTotalPaxPerMonth}
          totalpaxpermonth={totalpaxpermonth}
          showtotalpaxpermonth={showtotalpaxpermonth}
          min={min}
          max={max}
        />
      </div>
    )
  }
}

export { TotalPaxPerMonthLayout }
