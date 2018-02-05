import {handleActions, createAction} from 'redux-actions';

//consts
const ADD_USERS = 'ADD_USERS';
const IS_FETCHING = 'IS_FETCHING';

//actions
export const addUsers = createAction(ADD_USERS);
export const isFetching = createAction(IS_FETCHING);

//reducer
const defaultState = {
  list: [],
  fetching: false
};

export default handleActions({
  [ADD_USERS]: (state, action) => {
    return Object.assign({}, state, {list: action.payload})
  },
  [IS_FETCHING]: (state, action) => {
    return Object.assign({}, state, {fetching: action.payload})
  }
}, defaultState);
