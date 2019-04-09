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
    this.getDataYearPaxByAirline(this.state.airline)
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
      this.getDataYearPaxByAirline(airline)
    }
    if (status === 'Frequency') {
      this.getDataYearFrequencyByAirline(airline)
    }

    if (status === 'Seat') {
      this.getDataYearSeatByAirline(airline)
    }

    if (status === 'Route') {
      this.getDataYearRouteByAirline(airline)
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

  getDataYearPaxByAirline = airline => {
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

  getDataYearFrequencyByAirline = airline => {
    fetch('http://localhost:4000/YearFrequencyByAirline', {
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

  getDataYearSeatByAirline = airline => {
    fetch('http://localhost:4000/YearSeatByAirline', {
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

  getDataYearRouteByAirline = airline => {
    fetch('http://localhost:4000/YearRouteByAirline', {
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
      this.state.defaultGraph[data.length - 1 - i].y = data[i].Results
      console.log(data[i].Results)
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
