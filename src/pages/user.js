import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

import UserProfile from '../components/large/user-profile-card'
import UserPosts from '../components/large/user-posts-card'

export default class User extends Component {
  render(){
    return(
      <Grid centered columns={2} padded>
        <Grid.Column width={4}>
          <UserProfile
            url={this.props.match.params.id}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <UserPosts
            url={this.props.match.params.id}
          />
        </Grid.Column>
      </Grid>
    )
  }
}
