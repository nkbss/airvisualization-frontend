import React, { Component } from 'react'
import { MapLayout } from '../../components/Map/Layout'
import { TopMenu } from '../../components/Menu'

class map extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <MapLayout />
      </React.Fragment>
    )
  }
}

export default map
