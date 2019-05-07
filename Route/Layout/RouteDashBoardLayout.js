import React, { Component } from 'react'
import { RouteDashBoardCard } from '../Cards'
import './style.css'
import {
  Dimmer,
  Loader,
  Modal,
  Button
} from '../../node_modules/semantic-ui-react'
class RouteDashBoardLayout extends Component {
  state = {
    airport: 'HKG',
    defaultY: 'Passengers',
    type: null,
    status: false,
    notfound: false,
    data: [
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ],
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ],
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ],
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ],
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ],
      [
        { x: '2013', y: 0, airline: '' },
        { x: '2014', y: 0, airline: '' },
        { x: '2015', y: 0, airline: '' },
        { x: '2016', y: 0, airline: '' },
        { x: '2017', y: 0, airline: '' }
      ]
    ],
    d2013: [
      { x: '2013', y: 0, airline: '' },
      { x: '2013', y: 0, airline: '' },
      { x: '2013', y: 0, airline: '' },
      { x: '2013', y: 0, airline: '' },
      { x: '2013', y: 0, airline: '' },
      { x: '2013', y: 0, airline: 'Other' }
    ],
    d2014: [
      { x: '2014', y: 0, airline: '' },
      { x: '2014', y: 0, airline: '' },
      { x: '2014', y: 0, airline: '' },
      { x: '2014', y: 0, airline: '' },
      { x: '2014', y: 0, airline: '' },
      { x: '2014', y: 0, airline: 'Other' }
    ],
    d2015: [
      { x: '2015', y: 0, airline: '' },
      { x: '2015', y: 0, airline: '' },
      { x: '2015', y: 0, airline: '' },
      { x: '2015', y: 0, airline: '' },
      { x: '2015', y: 0, airline: '' },
      { x: '2015', y: 0, airline: 'Other' }
    ],
    d2016: [
      { x: '2016', y: 0, airline: '' },
      { x: '2016', y: 0, airline: '' },
      { x: '2016', y: 0, airline: '' },
      { x: '2016', y: 0, airline: '' },
      { x: '2016', y: 0, airline: '' },
      { x: '2016', y: 0, airline: 'Other' }
    ],
    d2017: [
      { x: '2017', y: 0, airline: '' },
      { x: '2017', y: 0, airline: '' },
      { x: '2017', y: 0, airline: '' },
      { x: '2017', y: 0, airline: '' },
      { x: '2017', y: 0, airline: '' },
      { x: '2017', y: 0, airline: 'Other' }
    ]
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
    this.getSeat(this.state.airport)
  }

  handleDropdown = (e, data) => {
    this.setState({ [data.name]: data.value })
    this.forceUpdate()
    if (data.name === 'defaultY') {
      this.filterDefaultGraph(this.state.airport, data.value)
    }
    // if (data.name === 'airport' && this.state.defaultY !== null) {
    //   this.filterDefaultGraph(data.value, this.state.defaultY)
    // }
    // if (data.type === 'airport') {
    //   if (this.state.year != null) {
    //     this.getAirlineAirport(this.state.year, data.value)
    //   }
    // }
  }

  filterDefaultGraph = (airport, status) => {
    this.state.showdefault = true
    this.state.load = true
    if (status === 'Passengers') {
      this.getPax(airport)
    }
    if (status === 'Frequencies') {
      this.getFrequency(airport)
    }

    if (status === 'Seats') {
      this.getSeat(airport)
    }
    this.forceUpdate()
  }

  pressEnterToGetData = event => {
    if (this.state.airport != '' || this.state.airport != null) {
      if (event.key === 'Enter') {
        this.filterDefaultGraph(this.state.airport, this.state.defaultY)
        console.log('Enter')
      }
    }
  }

  getPax = airport => {
    this.state.status = false
    this.forceUpdate()
    console.log('Get pax')
    fetch('http://localhost:4000/getSegmentPax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.checkData(data.data)
          this.setDefaultGraphData(data.data)
          this.state.status = true
        }
        this.forceUpdate()
      })
  }

  getFrequency = airport => {
    this.state.status = false
    this.forceUpdate()
    console.log('get freq')
    fetch('http://localhost:4000/getSegmentFrequency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.checkData(data.data)
          this.setDefaultGraphData(data.data)
          this.state.status = true
        }
        this.forceUpdate()
      })
  }

  getSeat = airport => {
    this.state.status = false
    this.forceUpdate()
    console.log('get seat')
    fetch('http://localhost:4000/getSegmentSeat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: airport,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.checkData(data.data)
          this.setDefaultGraphData(data.data)
          this.state.status = true
        }
        this.forceUpdate()
      })
  }

  setDefaultGraphData = data => {
    let d13, d14, d15, d16, d17
    d13 = data[0]
    d14 = data[1]
    d15 = data[2]
    d16 = data[3]
    d17 = data[4]
    let sum = [0, 0, 0, 0, 0]
    for (let i = 0; i < d13.length; i++) {
      if (i < 5) {
        this.state.d2013[i].y = d13[i].Results
        this.state.d2013[i].airline = d13[i].OWNER_CODE
      } else {
        sum[0] = sum[0] + d13[i].Results
      }
    }
    for (let i = 0; i < d14.length; i++) {
      if (i < 5) {
        this.state.d2014[i].y = d14[i].Results
        this.state.d2014[i].airline = d14[i].OWNER_CODE
      } else {
        sum[1] = sum[1] + d14[i].Results
      }
    }
    for (let i = 0; i < d15.length; i++) {
      if (i < 5) {
        this.state.d2015[i].y = d15[i].Results
        this.state.d2015[i].airline = d15[i].OWNER_CODE
      } else {
        sum[2] = sum[2] + d15[i].Results
      }
    }
    for (let i = 0; i < d16.length; i++) {
      if (i < 5) {
        this.state.d2016[i].y = d16[i].Results
        this.state.d2016[i].airline = d16[i].OWNER_CODE
      } else {
        sum[3] = sum[3] + d16[i].Results
      }
    }
    for (let i = 0; i < d17.length; i++) {
      if (i < 5) {
        this.state.d2017[i].y = d17[i].Results
        this.state.d2017[i].airline = d17[i].OWNER_CODE
      } else {
        sum[4] = sum[4] + d17[i].Results
      }
    }
    this.state.d2013[5].y = sum[0]
    this.state.d2014[5].y = sum[1]
    this.state.d2015[5].y = sum[2]
    this.state.d2016[5].y = sum[3]
    this.state.d2017[5].y = sum[4]
    this.forceUpdate()
    console.log(this.state.d2013)
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        if (j === 0) {
          // console.log(this.state.data[i][j].y)
          // console.log(this.state.d2013[i].y)
          this.state.data[i][j].y = this.state.d2013[i].y
          this.state.data[i][j].airline = this.state.d2013[i].airline
        } else if (j === 1) {
          this.state.data[i][j].y = this.state.d2014[i].y
          this.state.data[i][j].airline = this.state.d2014[i].airline
        } else if (j === 2) {
          this.state.data[i][j].y = this.state.d2015[i].y
          this.state.data[i][j].airline = this.state.d2015[i].airline
        } else if (j === 3) {
          this.state.data[i][j].y = this.state.d2016[i].y
          this.state.data[i][j].airline = this.state.d2016[i].airline
        } else if (j === 4) {
          this.state.data[i][j].y = this.state.d2017[i].y
          this.state.data[i][j].airline = this.state.d2017[i].airline
        }
      }
    }
    this.forceUpdate()
  }

  checkData = data => {
    let status = true
    console.log(data.length)
    // if (data.length === 0) {
    //   this.setState({ notfound: true })
    //   this.forceUpdate()
    // }
    for (let i = 0; i < data.length; i++) {
      if (data[i].length === 0) {
        status = status && true
      } else {
        status = status && false
      }
    }
    this.setState({ notfound: status })
    this.forceUpdate()
  }

  closeModal = () => {
    location.reload()
  }

  render() {
    console.log(this.state.data)

    return (
      <div className="route-card-section">
        <RouteDashBoardCard
          pressEnterToGetData={this.pressEnterToGetData}
          handleDropdown={this.handleDropdown}
          state={this.state}
        />
        <Modal
          size="mini"
          dimmer="blurring"
          open={this.state.notfound}
          onClose={this.closeModal}
        >
          <Modal.Header>Data not found !</Modal.Header>
          <Modal.Actions>
            <Button onClick={this.closeModal} negative>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
        <Dimmer active={!this.state.status}>
          <Loader size="big">Preparing Data!</Loader>
        </Dimmer>
      </div>
    )
  }
}

export { RouteDashBoardLayout }
