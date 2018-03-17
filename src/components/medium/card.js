import React, { Component } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class CardBox extends Component {
  render(){
    const { id, name, email, url } = this.props
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
        <Link to={`users/${url}`}>
          <Button icon positive labelPosition='right' fluid>
            Detail
            <Icon name='right arrow' />
          </Button>
        </Link>
        </Card.Content>
      </Card>
    )
  }
}
