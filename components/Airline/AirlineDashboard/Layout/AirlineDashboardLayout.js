import React, { Component } from 'react'
import { AirlineDashboardCard } from '../Cards'
import dynamic from 'next/dynamic'

class AirlineDashboardLayout extends Component {
  state = {
    y2017: null,
    airline: 'THA',
    defaultY: 'Pax',
    data: null,
    defaultY2017: null,
    pax: [],
    frequency: [],
    defaultGraphX: ['2013', '2014', '2015', '2016', '2017'],
    defaultGraphY: [],
    showdefault: false,
    defaultGraph: [
      { x: '2013', y: 0 },
      { x: '2014', y: 0 },
      { x: '2015', y: 0 },
      { x: '2016', y: 0 },
      { x: '2017', y: 0 }
    ],
    query: 'Test query'
  }

  componentDidMount = () => {
    this.getDataYearByAirline(this.state.airline)
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      this.filterDefaultGraph(this.state.airline, data.value)
    }
    if (data.name === 'airline' && this.state.defaultY !== null) {
      this.filterDefaultGraph(data.value, this.state.defaultY)
    }
  }

  filterDefaultGraph = (airline, status) => {
    this.state.showdefault = true
    if (status === 'Pax') {
      this.getDataYearByAirline(airline)
    }
    if (status === 'Frequency') {
      let count = 0
      for (let i = 0; i < this.state.y2017.data.length; i++) {
        if (this.state.y2017.data[i].OWNER_CODE === airline) {
          count = count + 1
        }
        this.state.frequency[4] = count
        this.state.defaultGraphY[4] = count
        this.state.defaultGraph[4].y = count
      }
    }

    if (status === 'Seat') {
      let seat = 0
      for (let i = 0; i < this.state.y2017.data.length; i++) {
        if (this.state.y2017.data[i].OWNER_CODE === airline) {
          seat = seat + this.state.y2017.data[i].SEATS
        }
        this.state.defaultGraph[4].y = seat
      }
    }
    this.forceUpdate()
  }

  //   test = () => {
  //     fetch('http://localhost:4000/test', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'text/plain'
  //       },
  //       body: JSON.stringify({
  //         query: this.state.query
  //       })
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data)
  //         this.forceUpdate()
  //       })
  //   }

  getDataYearByAirline = airline => {
    console.log('Get Airport!')
    fetch('http://localhost:4000/YearPaxByAirline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airline: airline
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setDefaultGraphData(data.data)

        this.forceUpdate()
      })
  }

  setDefaultGraphData = data => {
    for (let i = 0; i < data.length; i++) {
      this.state.defaultGraph[data.length - 1 - i].y = data[i].TotalPax
      console.log(data[i].TotalPax)
    }
    this.setState({ showdefault: true })
  }

  render() {
    // console.log(this.state.pax[4])
    // console.log(this.state.frequency[4])
    console.log(this.state.defaultGraph)

    return (
      <div className="section-dashboard">
        <AirlineDashboardCard
          handleDropdown={this.handleDropdown}
          state={this.state}
          updateGraph={this.updateGraph}
        />
      </div>
    )
  }
}

export default AirlineDashboardLayout
