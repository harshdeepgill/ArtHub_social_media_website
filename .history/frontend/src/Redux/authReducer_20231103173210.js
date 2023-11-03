const initialState = {
  isAuth: false,
  user: {}
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true, user: payload };
    }
    case "LOGOUT": {
      return { ...state, isAuth: false, user: {} };
    }
    default: return state;
  }
}