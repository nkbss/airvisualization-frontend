import React, { Component } from 'react'
import dynamic from 'next/dynamic'
var randomColor = require('randomcolor')
const BubbleMap = dynamic(() => import('../../../Datamaps/DataMaps'), {
  ssr: false
})

class AirlineMapCard extends Component {
  state = {
    data: null
  }

  render() {
    return (
      <React.Fragment>
        {this.props.state.mapstatus && this.props.state.routestatus ? (
          <div style={{ width: '100%', height: '600px', paddingTop: '40px' }}>
            <BubbleMap
              scope="world"
              geographyConfig={{
                popupOnHover: false,
                highlightOnHover: false
              }}
              fills={{
                defaultFill: '#abdda4',
                f1: '#f24d4d',
                f2: '#f1684d',
                f3: '#f0d84c',
                f4: '#85ef4c',
                f5: '#4cefe6',
                f6: '#4c61ef',
                f7: '#954cef',
                f8: '#ec4cef'
              }}
              bubbles={this.props.data}
              bubbleOptions={{
                popupTemplate: (geo, data) =>
                  `<div class="hoverinfo">
                             <lable>${data.name}</lable><br> 
                             <lable>Results : ${data.result}</lable><br> 
                             <lable>Country : ${data.country}</lable><br> `
              }}
            />
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}

export { AirlineMapCard }
