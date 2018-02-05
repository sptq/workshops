import React, { Component } from 'react';
import {connect} from 'react-redux';

import User from './User';

class UsersList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null,
      users: []
    };

    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(user) {
    this.setState({selectedUser: user});
  }

  render() {
    const {selectedUser} = this.state;
    const {users} = this.props;

    const items = users.map(item => {
      return (
        <User
         {...item}
         key={item.id}
         onClick={this.handleSelect}
        />
      )
    });
    return (
      <div>
        {selectedUser ? <div> Selected user: {selectedUser} </div> : null}
        {items}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.list
  }
}


export default connect(mapStateToProps)(UsersList);
