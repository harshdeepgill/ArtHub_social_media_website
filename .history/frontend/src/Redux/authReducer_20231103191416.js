const initialState = {
  isAuth: false,
  userData: {},
  token: ""
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true, userData: payload, token: payload.token };
    }
    case "LOGOUT": {
      return { ...state, isAuth: false, userData: {}, token: "" };
    }
    default: return state;
  }
}

export default authReducer;