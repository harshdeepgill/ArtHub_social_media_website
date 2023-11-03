const initialState = {
  isAuth: false,
  user: {},
  token: ""
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true, user: payload, token: payload.token };
    }
    case "LOGOUT": {
      return { ...state, isAuth: false, user: {}, token: "" };
    }
    default: return state;
  }
}

export default authReducer;