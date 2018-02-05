import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {selectUser} from './store/reducers/users';

const User = (props) => {
    const {name, email, id, selectUser} = props;

    return (
      <div>
        {name} -> {email} <button onClick={() => selectUser(id)}>Select</button>
      </div>
    )
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string,
}

const mapDispatchToProps = {
  selectUser
};


export default connect(null, mapDispatchToProps)(User);
