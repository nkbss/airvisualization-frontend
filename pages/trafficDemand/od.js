import React, { Component } from 'react'
import { TopMenu } from '../../components/Menu'
import { ODDahsBoardLayout } from '../../components/OD/Layout'

class od extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <ODDahsBoardLayout />
      </React.Fragment>
    )
  }
}

export default od
