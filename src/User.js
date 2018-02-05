import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    const {name, email, onClick} = props;

    return (
      <div>
        {name} -> {email} <button onClick={() => onClick(name)}>Select</button>
      </div>
    )
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  onClick: PropTypes.func.isRequired
}


export default User;
