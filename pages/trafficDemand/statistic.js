import React, { Component } from 'react'
import { StatisticLayout } from '../../components/Statistic/layout/StatisticLayout'
import { TopMenu } from '../../components/Menu'

class statistic extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <StatisticLayout />
      </React.Fragment>
    )
  }
}

export default statistic
