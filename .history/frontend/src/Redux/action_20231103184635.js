export const login = (dispatch, obj) => {
  dispatch({ type: "LOGIN", payload: obj });
}

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
}

export const register = (dispatch, obj) => {
  dispatch({ type: "REGISTER", payload: obj });
}