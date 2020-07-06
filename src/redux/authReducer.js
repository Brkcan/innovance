import {LOGOUT_SUCCESS, LOGIN_SUCCESS} from './Constants';

const loggedInState = {
  isLoggedIn : true,
  username: 'user1',
  displayName: 'display1',
  password: 'P4ssword',
}
const defaultState = {
  isLoggedIn : false,
  username: 'undefined',
  displayName: 'undefined',
  password: 'undefined',
}

const authReducer = (state = { ...defaultState }, action) => {
  if(action.type === LOGOUT_SUCCESS){
    return defaultState;
  }
  if(action.type === LOGIN_SUCCESS){
    return loggedInState;
  }
  return state;
}
export default authReducer;
