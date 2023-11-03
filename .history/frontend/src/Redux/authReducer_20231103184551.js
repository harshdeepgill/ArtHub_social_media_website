const initialState = {
  isAuth: false,
  userData: {},
  user_register: {},
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
    case "REGISTER": {
      return { ...state, user_register: payload };
    }
    default: return state;
  }
}

export default authReducer;