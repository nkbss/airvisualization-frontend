import React, { Component } from 'react'
import { Menu } from '../../node_modules/semantic-ui-react'
import './style.css'

class TopMenu extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary fluid size="huge" id="topmenu">
          <Menu.Menu>
            <Menu.Item
              name="Airline"
              active={activeItem === 'Airline'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Airport"
              active={activeItem === 'Airport'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Route"
              active={activeItem === 'Route'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="OD"
              active={activeItem === 'OD'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>

          {/* <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
        </Menu>
      </div>
    )
  }
}

export { TopMenu }
