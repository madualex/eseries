import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
  RESET_LOGIN_FLAG,

  ACCOUNT_RESPONSE_ERROR,
  ACCOUNT_RESPONSE_SUCCESS,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  ACCOUNT_SIGN_UP
} from "./actionTypes";


// FOR E-SERIES

// export const accountResponseSuccess = (actionType, data) => {
//   return {
//     type: ACCOUNT_RESPONSE_SUCCESS,
//     payload: {actionType, data}
//   }
// }

// export const accountResponseError = (actionType, error) => {
//   return {
//     type: ACCOUNT_RESPONSE_ERROR,
//     payload: {actionType, error}
//   }
// }

// export const accountLogin = (data, history) => {
//   return {
//     type: ACCOUNT_LOGIN,
//     payload: {data, history}
//   }
// }

// export const accountLogout = history => {
//   return {
//     type: ACCOUNT_LOGOUT,
//     payload: {history}
//   }
// }

// export const accountSignUp = (data, history) => ({
//   type: ACCOUNT_SIGN_UP,
//   payload: { data, history }
// });



export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};
 
export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  };
};

export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  }
}
