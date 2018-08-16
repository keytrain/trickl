export const SET_AUTHENTICATED = "SET_AUTHENTICATED"
export const LOAD_SESSION_REQUESTED = "LOAD_SESSION_REQUESTED"
export const LOAD_SESSION_COMPLETED = "LOAD_SESSION_COMPLETED"
export const LOGIN_REQUESTED = "LOGIN_REQUESTED"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export const setAuthenticated = status => ({
  type: SET_AUTHENTICATED,
  status,
})

export const loadSession = () => ({
  type: LOAD_SESSION_REQUESTED,
})

export const sessionLoaded = () => ({
  type: LOAD_SESSION_COMPLETED,
})

export const loginUser = (email, password) => ({
  type: LOGIN_REQUESTED,
  email,
  password,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
})

export const logoutUser = () => ({
  type: LOGOUT_REQUESTED,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})
