import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import UserProfile from '../components/large/user-profile-card'
import UserPosts from '../components/large/user-posts-card'
import MenuUser from '../components/large/menu-user'

export default class User extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render(){
    return(
      <Grid centered columns={3} padded>
        <Grid.Column width={3}>
          <UserProfile
            url={this.props.match.params.id}
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <Route
            exact
            path=''
            render={ () =>
              <UserPosts
                url={this.props.match.params.id}
              />
            }
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <MenuUser
            id={this.props.match.params.id}
          />
        </Grid.Column>
      </Grid>
    )
  }
}
