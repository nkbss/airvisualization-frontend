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
              bubbles={
                this.props.data
                // [
                //   {
                //     name: 'Not a bomb, but centered on Brazil',
                //     radius: 23,
                //     centered: 'BRA',
                //     country: 'USA',
                //     yeild: 0,
                //     fillKey: 'OTH',
                //     date: '1954-03-01',
                //     fills: 'red'
                //   },
                //   {
                //     name: 'Castle Bravo',
                //     radius: 25,
                //     yeild: 15000,
                //     country: 'USA',
                //     significance:
                //       'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
                //     fillKey: 'OTH',
                //     date: '1954-03-01',
                //     latitude: 11.415,
                //     longitude: 165.1619,
                //     fills: 'red'
                //   },
                //   {
                //     name: 'Tsar Bomba',
                //     radius: 70,
                //     yeild: 50000,
                //     country: 'USSR',
                //     fillKey: 'USA',
                //     significance:
                //       'Largest thermonuclear weapon ever tested-scaled down from its initial 100Mt design by 50%',
                //     date: '1961-10-31',
                //     latitude: 73.482,
                //     longitude: 54.5854,
                //     fills: 'red'
                //   }
                // ]
              }
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
