export const login = (dispatch, obj) => {
  dispatch({ type: "LOGIN", payload: obj });
}

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
}

export const register = (dispatch) => {
  dispatch({ type: "REGISTER" });
}