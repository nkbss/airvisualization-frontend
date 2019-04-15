import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import '../style.css'
import { FirstPage } from '../components/FirstPage'

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <FirstPage />
      </React.Fragment>
    )
  }
}
export default index
