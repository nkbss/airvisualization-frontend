import React, { Component } from 'react'
import { RouteDashBoardLayout } from '../../Route/Layout'
import { TopMenu } from '../../components/Menu'

class segment extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <RouteDashBoardLayout />
      </React.Fragment>
    )
  }
}

export default segment
