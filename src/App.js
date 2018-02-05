import React, { Component } from 'react';
import {connect} from 'react-redux';

import UsersList from './UsersList';
import {getUsers} from './services/userService';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {fetching} = this.props;
    return (
      <div>
        {fetching ? <div>Loading</div> : <UsersList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.users.fetching
  }
}

const mapDispatchToProps = {
  getUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
