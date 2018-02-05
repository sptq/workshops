import {handleActions, createAction} from 'redux-actions';

//consts
const ADD_USERS = 'ADD_USERS';
const IS_FETCHING = 'IS_FETCHING';
const SELECT_USER = 'SELECT_USER';

//actions
export const addUsers = createAction(ADD_USERS);
export const isFetching = createAction(IS_FETCHING);
export const selectUser = createAction(SELECT_USER);

//reducer
const defaultState = {
  list: [],
  fetching: false,
  selectedUser: null //id usera
};

export default handleActions({
  [ADD_USERS]: (state, action) => {
    return Object.assign({}, state, {list: action.payload})
  },
  [IS_FETCHING]: (state, action) => {
    return Object.assign({}, state, {fetching: action.payload})
  },
  [SELECT_USER]: (state, action) => {
    return Object.assign({}, state, {selectedUser: action.payload})
  }
}, defaultState);
