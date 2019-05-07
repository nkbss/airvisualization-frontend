import React, { Component } from 'react'
import { StatisticCard, TableStatisticCard } from '../cards'
import './style.css'
import {
  Dimmer,
  Loader,
  Modal,
  Button
} from '../../../node_modules/semantic-ui-react'
class StatisticLayout extends Component {
  state = {
    Airline: null,
    length: null,
    totalPasssenger: 0,
    yearB: false,
    airportB: false,
    airlineB: false,
    flightB: false,
    aircraftB: false,
    seatB: false,
    paxB: false,
    sumB: false,
    routeB: false,
    frequencyB: false,
    list: false,
    airport: '%',
    airline: '%',
    flight: '%',
    aircraft: '%',
    paxData: null,
    seatData: null,
    routeData: null,
    frequencyData: null,
    av: [],
    sd: [],
    type: null,
    pax: false,
    seat: false,
    route: false,
    frequency: false,
    tableData: [],
    load: false,
    notfound: false
  }

  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
  }

  handleInput = (e, data) => {
    console.log(data.value)
    this.setState({ [data.name]: data.value })
  }

  pressEnterToGetData = event => {
    if (event.key === 'Enter') {
      this.getData()
      console.log('Enter')
    }
  }

  handleFilterButton = (e, data) => {
    if (data.name === 'yearB') {
      let status = !this.state.yearB
      this.setState({ [data.name]: status, year: null })
      this.forceUpdate()
    }
    if (data.name === 'airportB') {
      let status = !this.state.airportB
      this.setState({ [data.name]: status, airport: '%' })
      this.forceUpdate()
    }
    if (data.name === 'airlineB') {
      let status = !this.state.airlineB
      this.setState({ [data.name]: status, airline: '%' })
      this.forceUpdate()
    }
    if (data.name === 'flightB') {
      let status = !this.state.flightB
      this.setState({ [data.name]: status, flight: '%' })
      this.forceUpdate()
    }
    if (data.name === 'aircraftB') {
      let status = !this.state.aircraftB
      this.setState({ [data.name]: status, aircraft: '%' })
      this.forceUpdate()
    }
    if (data.name === 'seatB') {
      let status = !this.state.seatB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'paxB') {
      let status = !this.state.paxB
      this.setState({ [data.name]: status })
      this.forceUpdate()
    }
    if (data.name === 'sumB') {
      let status = !this.state.sumB
      this.setState({ [data.name]: status, sum: null })
      this.forceUpdate()
    }
    if (data.name === 'routeB') {
      let status = !this.state.routeB
      this.setState({ [data.name]: status, route: null })
      this.forceUpdate()
    }
    if (data.name === 'frequencyB') {
      let status = !this.state.frequencyB
      this.setState({ [data.name]: status, frequency: null })
      this.forceUpdate()
    }
    if (data.name === 'listB') {
      let status = !this.state.listB
      this.setState({ [data.name]: status, list: null })
      this.forceUpdate()
    }
  }

  getData = () => {
    // if (
    //   this.state.paxB
    //   // && this.state.paxData == null
    // ) {
    //   this.setState({ pax: true })
    //   this.forceUpdate()
    //   this.getPax()
    // }
    // if (
    //   this.state.seatB
    //   // && this.state.seatData == null
    // ) {
    //   this.setState({ seat: true })
    //   this.forceUpdate()
    //   this.getSeat()
    // }
    // if (
    //   this.state.routeB
    //   //  && this.state.routeData == null
    // ) {
    //   this.setState({ route: true })
    //   this.forceUpdate()
    //   this.getRoute()
    // }

    // if (this.state.frequencyB) {
    //   this.setState({ frequency: true })
    //   this.forceUpdate()
    //   this.getFrequency()
    // }
    this.setState({ load: true, av: [], sd: [] })

    this.getPax()
    this.getSeat()
    this.getRoute()
    this.getFrequency()
  }

  getPax = () => {
    this.setState({ paxData: null })
    console.log('get pax')
    fetch('http://localhost:4000/getPax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.checkData(data.data)
        this.calculateAv('pax', data.data)
        this.calculateSd('pax', data.data)
        this.setState({ paxData: data.data, pax: false })
        // this.setTableData(data.data)
        this.forceUpdate()
      })
  }

  getSeat = () => {
    console.log('get seat')
    this.setState({ seatData: null })
    fetch('http://localhost:4000/getSeat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('seat', data.data)
        this.calculateSd('seat', data.data)
        this.setState({ seatData: data.data, seat: false })
        this.forceUpdate()
      })
  }

  getRoute = () => {
    console.log('get route')
    this.setState({ routeData: null })
    fetch('http://localhost:4000/getRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('route', data.data)
        this.calculateSd('route', data.data)
        this.setState({ routeData: data.data, route: false })
        this.forceUpdate()
      })
  }

  getFrequency = () => {
    console.log('get frequency')
    this.setState({ frequencyData: null })
    fetch('http://localhost:4000/getFrequency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain'
      },
      body: JSON.stringify({
        airport: this.state.airport,
        airline: this.state.airline,
        flight: this.state.flight,
        aircraft: this.state.aircraft,
        type: this.state.type
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.calculateAv('frequency', data.data)
        this.calculateSd('frequency', data.data)
        this.setState({
          frequencyData: data.data,
          frequency: false,
          load: false
        })
        this.forceUpdate()
      })
  }

  calculateAv = (type, data) => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].Results
    }
    let av = sum / data.length
    if (type == 'pax') {
      this.state.av[0] = av.toFixed(2)
    } else if (type == 'seat') {
      this.state.av[1] = av.toFixed(2)
    } else if (type == 'route') {
      this.state.av[2] = av.toFixed(2)
    } else if (type == 'frequency') {
      this.state.av[3] = av.toFixed(2)
    }
    this.forceUpdate()
  }

  calculateSd = (type, data) => {
    let sum = 0
    let x2 = 0
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].Results
      x2 = x2 + Math.pow(data[i].Results, 2)
    }
    let top = data.length * x2 - Math.pow(sum, 2)
    let bot = data.length * (data.length - 1)
    let sd = Math.sqrt(top / bot)
    if (type == 'pax') {
      this.state.sd[0] = sd.toFixed(2)
    } else if (type == 'seat') {
      this.state.sd[1] = sd.toFixed(2)
    } else if (type == 'route') {
      this.state.sd[2] = sd.toFixed(2)
    } else if (type == 'frequency') {
      this.state.sd[3] = sd.toFixed(2)
    }
    this.forceUpdate()
  }

  checkData = data => {
    console.log(data)
    if (data.length === 0) {
      this.setState({ notfound: true })
      this.forceUpdate()
    }
  }

  closeModal = () => {
    location.reload()
  }

  render() {
    console.log(this.state.notfound)
    return (
      <div className="statistic-section">
        <StatisticCard
          handleFilterButton={this.handleFilterButton}
          handleInput={this.handleInput}
          pressEnterToGetData={this.pressEnterToGetData}
          getData={this.getData}
          state={this.state}
        />
        <div style={{ paddingTop: '40px' }}>
          {this.state.paxData != null &&
          this.state.seatData != null &&
          this.state.frequencyData != null &&
          this.state.routeData &&
          !this.state.notfound ? (
            <TableStatisticCard
              paxData={this.state.paxData}
              seatData={this.state.seatData}
              routeData={this.state.routeData}
              frequencyData={this.state.frequencyData}
              av={this.state.av}
              sd={this.state.sd}
            />
          ) : null}
        </div>
        <Dimmer active={this.state.load}>
          <Loader size="big">Get Data!</Loader>
        </Dimmer>

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
        {/* {this.state.seat && this.state.route && this.state.frequency ? null : (
          <Dimmer active={this.state.pax}>
            <Loader size="big">Get Pax!</Loader>
          </Dimmer>
        )}
        {this.state.pax && this.state.route && this.state.frequency ? null : (
          <Dimmer active={this.state.seat}>
            <Loader size="big">Get Seat!</Loader>
          </Dimmer>
        )}
        {this.state.pax && this.state.seat && this.state.frequency ? null : (
          <Dimmer active={this.state.route}>
            <Loader size="big">Get Route!</Loader>
          </Dimmer>
        )}
        {this.state.pax && this.state.seat && this.state.route ? null : (
          <Dimmer active={this.state.frequency}>
            <Loader size="big">Get Frequency!</Loader>
          </Dimmer>
        )} */}
      </div>
    )
  }
}
export { StatisticLayout }
