import React, { Component } from 'react'
import { ODDashBoardCard } from '../Cards'
import './style.css'
import { Dimmer, Loader } from '../../../node_modules/semantic-ui-react'

class ODDahsBoardLayout extends Component {
  state = {
    totalstop: null,
    orig: null,
    dest: null,
    year: null,
    showdefault: false,
    defaultGraph: [
      { x: 'Direct Flight', y: 0, opacity: 1, index: 0 },
      { x: '1 Connecting Points', y: 0, opacity: 1, index: 1 },
      { x: '2 Connecting Points', y: 0, opacity: 1, index: 2 },
      { x: '3 Connecting Points', y: 0, opacity: 1, index: 3 },
      { x: '4 Connecting Points', y: 0, opacity: 1, index: 4 },
      { x: '5 Connecting Points', y: 0, opacity: 1, index: 5 }
    ],
    datastop: [],
    stopstatus: false,
    statusstop: null,
    stopindex: null,
    getpax: false,
    getroutepax: false,
    other: 0
  }

  // componentDidMount = () => {
  //   this.getStopOD('LHR', 'BKK', 1, '2017')
  // }

  // handleYear = (year, index) => {
  //   this.setState({ year: year })
  //   this.setOpacity(this.state.defaultGraph, index)
  //   this.forceUpdate()
  // }

  setStopText = (status, index) => {
    this.setState({ statusstop: status, stopindex: index })
    this.forceUpdate()
  }

  handleInput = (e, data) => {
    this.setState({ [data.name]: data.value })
  }

  pressEnterToGetData = event => {
    if (
      (this.state.orig != '' && this.state.dest != '') ||
      (this.state.orig != null && this.state.dest != null)
    ) {
      if (event.key === 'Enter') {
        this.getPaxOD(this.state.orig, this.state.dest, this.state.year)
        if (this.state.stopindex != null) {
          this.getStopOD(
            this.state.orig,
            this.state.dest,
            this.state.stopindex,
            this.state.year
          )
        }
        console.log('Enter')
      }
    }
  }

  getPaxOD = (original, destination, year) => {
    this.setState({ showdefault: false, getpax: true })
    console.log('Get Pax')
    fetch('http://localhost:4000/getPaxOD', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        original: original,
        destination: destination,
        year: year
        // totalstop: totalstop
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.setDefaultGraphData(data.data)
          this.setState({ showdefault: true, getpax: false })
        }
        this.forceUpdate()
      })
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    if (
      (this.state.orig != '' && this.state.dest != '') ||
      (this.state.orig != null && this.state.dest != null)
    ) {
      this.getPaxOD(this.state.orig, this.state.dest, data.value)
      if (data.name === 'year') {
        if (this.state.stopindex != null) {
          console.log('get xxxxx')
          this.getStopOD(
            this.state.orig,
            this.state.dest,
            this.state.stopindex,
            data.value
          )
        }
      }
    }
  }

  setDefaultGraphData = data => {
    for (let i = 0; i < 5; i++) {
      this.state.defaultGraph[i].y = 0
    }
    for (let i = 0; i < data.length; i++) {
      this.state.defaultGraph[data[i].TotalStop].y = data[i].Results
      console.log(data[i].Results)
    }
    this.setState({ showdefault: true })
  }

  getStopOD = (original, destination, totalstop, year) => {
    this.setOpacity(this.state.defaultGraph, totalstop)
    this.setState({ stopstatus: false, getroutepax: true })
    console.log('get stop')
    fetch('http://localhost:4000/getStopOD', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        original: original,
        destination: destination,
        totalstop: totalstop,
        year: year
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.setDataStop(data.data)
          this.setState({ stopstatus: true, getroutepax: false })
        }
        this.forceUpdate()
      })
  }

  setOpacity = (data, index) => {
    for (let i = 0; i < data.length; i++) {
      if (i != index) {
        data[i].opacity = 0.5
      } else {
        data[i].opacity = 1
      }
    }
  }

  setDataStop = data => {
    this.state.datastop = []
    let count = 0
    let sum = 0
    if (this.state.stopindex === 0) {
      for (let i = 0; i < data.length; i++) {
        this.state.datastop.push({
          x: data[i].airport,
          y: data[i].Results
        })
      }
    } else {
      for (let i = 1; i < data.length; i++) {
        if (i < 21) {
          this.state.datastop.push({
            x: data[i].airport,
            y: data[i].Results
          })
        } else {
          sum = sum + data[i].Results
        }
      }
      this.state.other = sum
    }
    this.forceUpdate()
  }

  render() {
    // console.log(this.state)
    console.log(this.state.datastop)
    console.log(this.state.other)

    return (
      <React.Fragment>
        <div className="OD-section">
          <ODDashBoardCard
            state={this.state}
            handleInput={this.handleInput}
            handleDropdown={this.handleDropdown}
            getStopOD={this.getStopOD}
            handleYear={this.handleYear}
            setStopText={this.setStopText}
            pressEnterToGetData={this.pressEnterToGetData}
          />
          <Dimmer active={this.state.getpax}>
            <Loader size="big">Get Passengers!</Loader>
          </Dimmer>
          {this.state.getpax ? null : (
            <Dimmer active={this.state.getroutepax}>
              <Loader size="big">Get passengers of each airport!</Loader>
            </Dimmer>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export { ODDahsBoardLayout }
