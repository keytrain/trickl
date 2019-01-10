export const CREATE_THOUGHT_REQUESTED = "CREATE_THOUGHT_REQUESTED";
export const CREATE_THOUGHT_SUCCESS = "CREATE_THOUGHT_SUCCESS";
export const CREATE_THOUGHT_FAILURE = "CREATE_THOUGHT_FAILURE";

export const FETCH_THOUGHT_REQUESTED = "FETCH_THOUGHT_REQUESTED";
export const FETCH_THOUGHT_SUCCESS = "FETCH_THOUGHT_SUCCESS";
export const FETCH_THOUGHT_FAILURE = "FETCH_THOUGHT_FAILURE";

export const createThoughtRequest = data => ({
  type: CREATE_THOUGHT_REQUESTED,
  data,
});

export const createThoughtSuccess = data => ({
  type: CREATE_THOUGHT_SUCCESS,
  data,
});

export const createThoughtFailure = data => ({
  type: CREATE_THOUGHT_FAILURE,
  data,
});

export const fetchThoughtRequest = data => ({
  type: FETCH_THOUGHT_REQUESTED,
  data,
});

export const fetchThoughtSuccess = data => ({
  type: FETCH_THOUGHT_SUCCESS,
  data,
});

export const fetchThoughtFailure = data => ({
  type: FETCH_THOUGHT_FAILURE,
  data,
});
