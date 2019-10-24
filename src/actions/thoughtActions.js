export const CREATE_COLUMN_REQUESTED = "CREATE_COLUMN_REQUESTED";
export const CREATE_COLUMN_SUCCESS = "CREATE_COLUMN_SUCCESS";
export const CREATE_COLUMN_FAILURE = "CREATE_COLUMN_FAILURE";

export const ADD_THOUGHT_REQUESTED = "ADD_THOUGHT_REQUESTED";
export const ADD_THOUGHT_SUCCESS = "ADD_THOUGHT_SUCCESS";
export const ADD_THOUGHT_FAILURE = "ADD_THOUGHT_FAILURE";

export const EDIT_THOUGHT_REQUESTED = "EDIT_THOUGHT_REQUESTED";
export const EDIT_THOUGHT_SUCCESS = "EDIT_THOUGHT_SUCCESS";
export const EDIT_THOUGHT_FAILURE = "EDIT_THOUGHT_FAILURE";

export const DEL_THOUGHT_REQUESTED = "DEL_THOUGHT_REQUESTED";
export const DEL_THOUGHT_SUCCESS = "DEL_THOUGHT_SUCCESS";
export const DEL_THOUGHT_FAILURE = "DEL_THOUGHT_FAILURE";

export const FETCH_COLUMN_REQUESTED = "FETCH_COLUMN_REQUESTED";
export const FETCH_COLUMN_SUCCESS = "FETCH_COLUMN_SUCCESS";
export const FETCH_COLUMN_FAILURE = "FETCH_COLUMN_FAILURE";

export const SET_CURRENT_THOUGHT = "SET_CURRENT_THOUGHT";

export const createColumnRequest = data => ({
  type: CREATE_COLUMN_REQUESTED,
  data,
});

export const createColumnSuccess = data => ({
  type: CREATE_COLUMN_SUCCESS,
  data,
});

export const createColumnFailure = data => ({
  type: CREATE_COLUMN_FAILURE,
  data,
});

export const addThoughtRequest = data => ({
  type: ADD_THOUGHT_REQUESTED,
  data,
});

export const addThoughtSuccess = data => ({
  type: ADD_THOUGHT_SUCCESS,
  data,
});

export const addThoughtFailure = data => ({
  type: ADD_THOUGHT_FAILURE,
  data,
});

export const editThoughtRequest = data => ({
  type: EDIT_THOUGHT_REQUESTED,
  data,
});

export const editThoughtSuccess = data => ({
  type: EDIT_THOUGHT_SUCCESS,
  data,
});

export const editThoughtFailure = data => ({
  type: EDIT_THOUGHT_FAILURE,
  data,
});

export const delThoughtRequest = data => ({
  type: DEL_THOUGHT_REQUESTED,
  data,
});

export const delThoughtSuccess = data => ({
  type: DEL_THOUGHT_SUCCESS,
  data,
});

export const delThoughtFailure = data => ({
  type: DEL_THOUGHT_FAILURE,
  data,
});

export const fetchColumnRequest = data => ({
  type: FETCH_COLUMN_REQUESTED,
  data,
});

export const fetchColumnSuccess = data => ({
  type: FETCH_COLUMN_SUCCESS,
  data,
});

export const fetchColumnFailure = data => ({
  type: FETCH_COLUMN_FAILURE,
  data,
});

export const setCurrentThought = data => ({
  type: SET_CURRENT_THOUGHT,
  data,
});
