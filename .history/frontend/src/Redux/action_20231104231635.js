export const login = (dispatch, username) => {
  dispatch({ type: "LOGIN", payload: username });
}

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
}