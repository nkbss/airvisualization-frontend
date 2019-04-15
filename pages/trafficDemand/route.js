import React, { Component } from 'react'
import { RouteDashBoardLayout } from '../../Route/Layout'
import { TopMenu } from '../../components/Menu'

class route extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <RouteDashBoardLayout />
      </React.Fragment>
    )
  }
}

export default route
