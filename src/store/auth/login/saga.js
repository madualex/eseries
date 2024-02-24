import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT, LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { accountResponseError, accountResponseSuccess, apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  login,
  logout,
  postFakeLogin,
  postJwtLogin,
  postLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();

// FOR E-SERIES

// function* accountLogin({ payload: { data, history } }) {
//   try {
//     const response = yield call(login, data);
//     console.log('Login', response);
//     if (response.status === 'success') {
//       yield put(accountResponseSuccess(ACCOUNT_LOGIN, response.data));

//       history('/dashboard');
//     } else {
//       yield put(accountResponseError(ACCOUNT_LOGIN, response.msg));
//     }
//   } catch (error) {
//     yield put(
//       accountResponseError(ACCOUNT_LOGIN, error?.response?.data?.msg ?? error)
//     );
//   }
// }

// function* accountLogout({ payload: { history } }) {
//   try {
//     const response = yield call(logout);
//     if (response.status === 'success') {
//       window.location.reload();
//     }
//   } catch (error) {
//     //
//   }
// }

// function* logoutUser() {
//   try {
//     sessionStorage.removeItem("authUser");
//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const response = yield call(fireBaseBackend.logout);
//       yield put(logoutUserSuccess(LOGOUT_USER, response));
//     } else {
//       yield put(logoutUserSuccess(LOGOUT_USER, true));
//     }
//   } catch (error) {
//     yield put(apiError(LOGOUT_USER, error));
//   }
// }

// export function* watchLogin() {
//   yield takeEvery(ACCOUNT_LOGIN, accountLogin);
// }

// export function* watchLogout() {
//   yield takeEvery(ACCOUNT_LOGOUT, accountLogout);
// }

// export function* watchLogoutUser() {
//   yield takeEvery(LOGOUT_USER, logoutUser);
// }

// function* authSaga() {
//   yield all([fork(watchLogin)]);
//   yield all([fork(watchLogout)]);
//   yield all([fork(watchLogoutUser)]);
// }



function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      if (response) {
        yield put(loginSuccess(response));
        history('/home');
        // history('/dashboard');
      } else {
        yield put(apiError(response));
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      if (response) {
        yield put(loginSuccess(response));
        history('/home');
        // history('/dashboard');
      } else {
        yield put(apiError(response));
      }
    } else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      });
      if (response.status === "success") {
        yield put(loginSuccess(response));
        history('/home');
        // history('/dashboard');
        sessionStorage.setItem("authUser", JSON.stringify(response));
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      );
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history('/dashboard');
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
