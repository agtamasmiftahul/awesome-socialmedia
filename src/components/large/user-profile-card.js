import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

import User from '../medium/user-card'

export default class UserCard extends Component {
  constructor() {
    super()
    this.state = {
      user : []
    }
  }

  getData () {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.url}`)
      .then(res => {
        const user = res.data
        this.setState({ user })
        console.log(this.state)
      })
  }

  componentDidMount () {
    this.getData()
  }

  render(){
    const { user } = this.state
    return(
        <Grid.Column>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            url={user.id}
            username={user.username}
            website={user.website}
            phone={user.phone}
          />
        </Grid.Column>
    )
  }
}
