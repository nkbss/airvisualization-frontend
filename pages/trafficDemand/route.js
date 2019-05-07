import React, { Component } from 'react'
import { TopMenu } from '../../components/Menu'
import { ODDahsBoardLayout } from '../../components/OD/Layout'

class route extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <ODDahsBoardLayout />
      </React.Fragment>
    )
  }
}

export default route
