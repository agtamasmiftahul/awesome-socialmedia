import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

import User from '../medium/card'

export default class UserCard extends Component {
  constructor() {
    super()
    this.state = {
      users : []
    }
  }

  getData () {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data
        this.setState({ users })
        console.log(this.state)
      })
  }

  componentDidMount () {
    this.getData()
  }

  render(){
    const { users } = this.state
    return(
      <Grid centered columns={5} padded>
      {users.map(user =>
        <Grid.Column>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            url={user.id}
          />
        </Grid.Column>
      )}
      </Grid>
    )
  }
}
