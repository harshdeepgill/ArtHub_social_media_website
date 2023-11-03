const initialState = {
  isAuth: false,
  user: {}
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true };
    }
    case "LOGOUT": {
      return { ...state, isAuth: false };
    }
    default: return state;
  }
}