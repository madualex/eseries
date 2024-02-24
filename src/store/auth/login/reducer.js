import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  RESET_LOGIN_FLAG,


  ACCOUNT_RESPONSE_SUCCESS,
  ACCOUNT_RESPONSE_ERROR,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  ACCOUNT_SIGN_UP
} from "./actionTypes";

const initialState = {
  errorMsg: "",
  loading: false,
  error: null,
  account: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    // FOR E-SERIES
    case ACCOUNT_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ACCOUNT_LOGIN:
          return {
            ...state, account: action.payload.data
          };
        case ACCOUNT_SIGN_UP:
          return {
            ...state, account: action.payload.data
          }
        default:
          return state;
      }

    case ACCOUNT_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ACCOUNT_LOGIN:
          return {
            ...state, error: action.payload.error,
          }
        default:
          return state;
      }

    case ACCOUNT_LOGIN:
      return {
        ...state, loading: true
      };





    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case LOGOUT_USER:
      state = { ...state, isUserLogout: false };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state, isUserLogout: true };
      break;
    case API_ERROR:
      state = {
        ...state,
        errorMsg: action.payload.data,
        loading: true,
        error: true,
        isUserLogout: false,
      };
      break;
    case RESET_LOGIN_FLAG:
      state = {
        ...state,
        errorMsg: null,
        loading: false,
        error: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
