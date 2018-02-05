import axios from 'axios';

import {addUsers, isFetching} from '../store/reducers/users';

const API = {
  get: '/users'
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(isFetching(true));
    const response = await axios({
      method: 'GET',
      url: API.get
    });

    dispatch(addUsers(response.data));
    dispatch(isFetching(false));
  }
}
