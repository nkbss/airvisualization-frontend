import React, { Component } from 'react'
import { TopMenu } from '../components/Menu'
import { DashboardLayout } from '../components/Dashboard/Layout/DashboardLayout'

class trafficdemand extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <DashboardLayout />
      </React.Fragment>
    )
  }
}

export default trafficdemand
