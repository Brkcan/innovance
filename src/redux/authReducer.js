
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
  if(action.type === 'logout-success'){
    return defaultState;
  }
  if(action.type === 'login-success'){
    return loggedInState;
  }
  return state;
}
export default authReducer;
