import React, { Component } from 'react'
// import { AirlineDashboardLayout } from '../../components/Airline/AirlineDashboard/Layout'
import { TopMenu } from '../../components/Menu'
import dynamic from 'next/dynamic'

const AirlineDashboardLayout = dynamic(
  () =>
    import('../../components/Airline/AirlineDashboard/Layout/AirlineDashboardLayout'),
  {
    ssr: false
  }
)

class airline extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <AirlineDashboardLayout />
      </React.Fragment>
    )
  }
}

export default airline
