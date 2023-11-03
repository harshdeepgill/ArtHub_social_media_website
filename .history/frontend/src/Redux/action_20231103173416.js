const login = (dispatch, obj) => {
  dispatch({ type: "LOGIN", payload: obj });
}

const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
}