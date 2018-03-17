import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class CardBox extends Component {
  render(){
    const {
      id,
      name,
      email,
      username,
      website,
      phone
    } = this.props
    return(
      <Card fluid key={id}>
        <Card.Content>
          <Card.Header textAlign='center'>
            {name}
          </Card.Header>
          <Card.Meta textAlign='center'>
            {email}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta textAlign='center'>
            Profile
          </Card.Meta>
          <Card.Description>
            <p><Icon name='user circle' color='blue'/>{username}</p>
            <p><Icon name='browser' color='blue'/>{website}</p>
            <p><Icon name='phone' color='blue'/>{phone}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
