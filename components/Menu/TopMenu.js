import React, { Component } from 'react'
import { Menu } from '../../node_modules/semantic-ui-react'
import './style.css'
import Link from '../Global/ActiveLink'
class TopMenu extends Component {
  componentDidMount = () => {
    this.state.type = localStorage.getItem('STATE')
    this.forceUpdate()
  }

  state = {
    type: null
  }

  render() {
    console.log(this.state.type)
    return (
      <div>
        <Menu pointing secondary fluid size="huge" id="topmenu">
          <Menu.Menu>
            <Menu.Item>
              <label
                style={{
                  fontSize: '20px',
                  color: 'teal',
                  fontWeight: 'bold'
                }}
              >
                {this.state.type === '5'
                  ? '- Domestic Flight -'
                  : '- International Flight -'}
              </label>
            </Menu.Item>
            <Link activeClassName="active" href="/trafficDemand/statistic">
              <Menu.Item name="Statistic" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/airline">
              <Menu.Item name="Airline" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/airport">
              <Menu.Item name="Airport" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/segment">
              <Menu.Item name="Segment" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/od">
              <Menu.Item name="OD" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/map">
              <Menu.Item name="Map" />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export { TopMenu }
