import React, { Component } from 'react';
import {connect} from 'react-redux';

import UsersList from './UsersList';
import UserPosts from './UserPosts';

import {getUsers} from './services/userService';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {fetching, selectedUser} = this.props;
    return (
      <div>
        {fetching ? <div>Loading</div> : <UsersList />}

        <br/><br/><hr/>

        {selectedUser && <UserPosts/> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.users.fetching,
    selectedUser: state.users.selectedUser
  }
}

const mapDispatchToProps = {
  getUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
