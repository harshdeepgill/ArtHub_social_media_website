const initialState = {
  isAuth: false,
  userName: "",
  avatar: "",
  token: ""
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true, userName: payload.username, avatar: payload.avatar, token: payload.token };
    }
    case "LOGOUT": {
      return initialState;
    }
    default: return state;
  }
}

export default authReducer;