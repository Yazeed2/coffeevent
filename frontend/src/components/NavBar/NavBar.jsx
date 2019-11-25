
// @github_bosheca
import React, { Component } from 'react'
import {Menu } from 'semantic-ui-react'
// import { Link, withRouter } from 'react-router-dom'
import { withRouter } from "react-router-dom";
class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = ((e, { name }) => {
    this.setState({ activeItem: name })
    // extra
     // eslint-disable-next-line
    if (name == "home") {
      this.props.history.push(`/`)
    } else {
      this.props.history.push(`/${name}`)
    }
  })
  render() {
    const { activeItem } = this.state
    return (
      // nav bar
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        /> 

        <Menu.Menu position='right' >
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
export default withRouter(NavBar)