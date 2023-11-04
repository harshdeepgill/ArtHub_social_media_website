export const login = (dispatch, username, avatar) => {
  dispatch({ type: "LOGIN", payload: username });
}

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
}