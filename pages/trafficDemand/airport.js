import React, { Component } from 'react'
import { TopMenu } from '../../components/Menu'
import { DashboardLayout } from '../../components/Airport/Dashboard/layout'

class airport extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <DashboardLayout />
      </React.Fragment>
    )
  }
}

export default airport
