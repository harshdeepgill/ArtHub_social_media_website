
const register = (dispatch, obj) => {
  dispatch({ type: "REGISTER", payload: obj });
}

export const login = (dispatch, obj) => {
  dispatch({ type: "LOGIN", payload: obj });
}

export default register;