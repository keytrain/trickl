export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const LOAD_SESSION_REQUESTED = "LOAD_SESSION_REQUESTED";
export const LOAD_SESSION_COMPLETED = "LOAD_SESSION_COMPLETED";
export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const SIGNUP_REQUESTED = "SIGNUP_REQUESTED";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const VERIFY_SIGNUP_REQUESTED = "VERIFY_SIGNUP_REQUESTED";
export const VERIFY_SIGNUP_SUCCESS = "VERIFY_SIGNUP_SUCCESS";
export const VERIFY_SIGNUP_FAILURE = "VERIFY_SIGNUP_FAILURE";

export const setAuthenticated = status => ({
  type: SET_AUTHENTICATED,
  status,
});

export const loadSession = () => ({
  type: LOAD_SESSION_REQUESTED,
});

export const sessionLoaded = () => ({
  type: LOAD_SESSION_COMPLETED,
});

export const loginUserRequested = (email, password) => ({
  type: LOGIN_REQUESTED,
  email,
  password,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logoutUser = () => ({
  type: LOGOUT_REQUESTED,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const saveUserInfo = info => ({
  type: SAVE_USER_INFO,
  info,
});

export const signUpRequested = (email, password) => ({
  type: SIGNUP_REQUESTED,
  email,
  password,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGNUP_FAILURE,
});

export const verifySignUpRequested = (email, password, confirmationCode) => ({
  type: VERIFY_SIGNUP_REQUESTED,
  email,
  password,
  confirmationCode,
});

export const verifySignUpSuccess = () => ({
  type: VERIFY_SIGNUP_SUCCESS,
});

export const verifySignUpFailure = () => ({
  type: VERIFY_SIGNUP_FAILURE,
});
