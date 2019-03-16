import React, { Component } from 'react'
import { DashboardCard } from '../Cards'
import { Grid, Button } from '../../../node_modules/semantic-ui-react'

class DashboardLayout extends Component {
  componentDidMount = () => {
    this.getAirport()
  }

  state = {
    Airline: null,
    totalflight: null,
    totalpasssenger: 0,
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
    data: [
      ['Month', 'Passenger'],
      ['January', 0],
      ['February', 0],
      ['March', 0],
      ['April', 0],
      ['May', 0],
      ['June', 0],
      ['July', 0],
      ['August', 0],
      ['September', 0],
      ['October', 0],
      ['November', 0],
      ['December', 0]
    ],
    plotlydata: [
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      [null, null, null, null, null, null, null, null, null, null, null, null]
    ],
    max: -Infinity,
    min: Infinity,
    showvis: false
  }
  getAirport = () => {
    console.log('Get Airport!')
    fetch('http://localhost:4000/Airline/BKP')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ Airline: data.data, totalflight: data.data.length })
        this.forceUpdate()
        this.getPassenger()
        if (this.state.Airline) {
          this.getTotalPaxPerMonth()
        }
        // console.log(this.state.Airline)
        // console.log(this.state.length)
      })
  }

  getTotalPaxPerMonth = () => {
    for (let i = 0; i < this.state.totalflight; i++) {
      let pax = this.state.Airline[i].PASSENGER
      this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y =
        this.state.totalpaxpermonth[this.state.Airline[i].TRN_MM - 1].y + pax
      this.state.data[this.state.Airline[i].TRN_MM][1] =
        this.state.data[this.state.Airline[i].TRN_MM][1] + pax
      this.state.plotlydata[1][this.state.Airline[i].TRN_MM - 1] =
        this.state.plotlydata[1][this.state.Airline[i].TRN_MM - 1] + pax
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
    this.setState({ showvis: true })
    // console.log(this.state.max)
    // console.log(this.state.min)
  }

  getPassenger = () => {
    let sum = 0
    for (let i = 0; i < this.state.totalflight; i++) {
      sum += this.state.Airline[i].PASSENGER
    }
    this.setState({ totalpasssenger: sum })
  }

  render() {
    const {
      totalflight,
      totalpasssenger,
      min,
      max,
      totalpaxpermonth,
      Airline,
      data,
      plotlydata
    } = this.state
    console.log(totalpaxpermonth)
    console.log(data)
    console.log(plotlydata[1][0])
    return (
      <div className="dashboard">
        <DashboardCard
          totalflight={totalflight}
          totalpassenger={totalpasssenger}
          totalpaxpermonth={
            totalpaxpermonth[0].y != 0 ? totalpaxpermonth : null
          }
          data={data[0][1] != 0 ? data : null}
          plotlydata={plotlydata[1][0] != null ? plotlydata : null}
          Airline={Airline}
          min={min}
          max={max}
        />
      </div>
    )
  }
}

export { DashboardLayout }
