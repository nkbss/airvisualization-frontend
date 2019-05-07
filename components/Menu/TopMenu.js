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
            <Link href="/">
              <Menu.Item>
                <label
                  className="topmenu-label"
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
            </Link>

            <Link activeClassName="active" href="/trafficDemand/statistic">
              <Menu.Item id="link" name="Statistics" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/map">
              <Menu.Item id="link" name="Map" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/airline">
              <Menu.Item id="link" name="Airline" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/airport">
              <Menu.Item id="link" name="Airport" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/segment">
              <Menu.Item id="link" name="Segment" />
            </Link>
            <Link activeClassName="active" href="/trafficDemand/route">
              <Menu.Item id="link" name="Route" />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export { TopMenu }
