import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import axios from 'axios'

import Post from '../medium/post-card'

export default class UserCard extends Component {
  constructor() {
    super()
    this.state = {
      posts : []
    }
  }

  getData () {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.url}/posts`)
      .then(res => {
        const posts = res.data
        this.setState({ posts })
        console.log(this.state)
      })
  }

  componentDidMount () {
    this.getData()
  }

  render(){
    const { posts } = this.state
    return(
      <Grid centered columns={1} padded>
        <Header size='huge' textAlign='center'>Posts</Header>
        {posts.map(post =>
          <Grid.Column>
            <Post
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </Grid.Column>
        )}
      </Grid>
    )
  }
}
