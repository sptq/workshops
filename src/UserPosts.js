import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUserPosts} from './services/userService';


class UserPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  async getUserPosts() {
    const {id} = this.props;
    console.log('test', id);
    const posts = await getUserPosts(id);
    this.setState({posts});
  }

  componentDidMount() {
    this.getUserPosts();
  }

  componentWillReceiveProps() {
    this.getUserPosts();
  }


  render() {
    const {id} = this.props;

    const posts = this.state.posts.map(item => {
      return (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      )
    });

    return (
      <div>
        Posts for user id: {id}

        {posts}

      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    id: state.users.selectedUser
  }
}

export default connect(mapStateToProps)(UserPosts);
