import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class CardBox extends Component {
  render(){
    const { id, title, body } = this.props
    return(
      <Card fluid color='teal' key={id}>
        <Card.Content>
          <Card.Header textAlign='center'>
            {title}
          </Card.Header>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
