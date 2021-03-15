import callApi from '../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_USER';

// Export Actions
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserRequest(user) {
  return (dispatch) => {
    return callApi('users', 'post', {
      user: {
        userName: user.userName,
        email: user.email,
        password: user.password,
      },
    }).then(res => dispatch(addUser(res.user)));
  };
}

export function signInRequest(cuid) {
  return (dispatch) => {
    return callApi(`users/${cuid}`).then(res => dispatch(addUser(res.user)));
  };
}
