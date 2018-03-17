import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuUser extends Component {
  state = { activeItem: 'posts' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    const { id } = this.props

    return(
      <Menu pointing secondary vertical>
        <Menu.Header>User Menu</Menu.Header>
        <Link to={`${id}/posts`}><Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} /></Link>
        <Link to={`${id}/albums`}><Menu.Item name='albums' active={activeItem === 'albums'} onClick={this.handleItemClick} /></Link>
      </Menu>
    )
  }
}
