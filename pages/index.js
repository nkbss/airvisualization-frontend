import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
  MarkSeries
} from 'react-vis'

import { DashboardLayout } from '../components/Dashboard/Layout/DashboardLayout'
import { TopMenu } from '../components/Menu'
import '../style.css'

class index extends Component {
  // state = {
  //   bkpAirline: [],
  //   length: 0,
  //   totalPasssenger: 0
  // }

  // componentDidMount = () => {
  //   this.getAirport()
  // }

  // getAirport = () => {
  //   console.log('Get Airport!')
  //   fetch('http://localhost:4000/Airline/NOK')
  //     .then(res => res.json())
  //     .then(data => {
  //       // this.setState({ bkpAirline: data.data, length: data.data.length })
  //       // this.forceUpdate()
  //       // // console.log(this.state.bkpAirline)
  //       // // console.log(data)
  //     })
  // }

  // getPassenger = () => {
  //   let sum = 0
  //   for (let i = 0; i < this.state.length; i++) {
  //     //   console.log(this.state.bkpAirline[i].PASSENGER)
  //     //   let sum = this.state.results
  //     sum += this.state.bkpAirline[i].PASSENGER
  //     //   this.setState({ results: sum })
  //   }

  //   this.setState({ totalPasssenger: sum })
  // }

  render() {
    // const test = this.state.bkpAirline.map(data => {
    //   return <div>{data.PASSENGER}</div>
    // })

    // console.log(this.state.length)
    // console.log(this.state.bkpAirline[36195])

    // const data = [
    //   { x: 0, y: 8 },
    //   { x: 1, y: 5 },
    //   { x: 2, y: 4 },
    //   { x: 3, y: 9 },
    //   { x: 4, y: 1 },
    //   { x: 5, y: 7 },
    //   { x: 6, y: 6 },
    //   { x: 7, y: 3 },
    //   { x: 8, y: 2 },
    //   { x: 9, y: 0 }
    // ]
    return (
      <div>
        <TopMenu />
        <DashboardLayout />
        {/* <div>{this.state.totalPasssenger}</div>
        <button onClick={() => this.getPassenger()}>eiei</button>

        <XYPlot height={200} width={200}>
          <VerticalBarSeries data={data} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <LineSeries data={data} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <MarkSeries data={data} />
        </XYPlot> */}
      </div>
    )
  }
}
export default index
