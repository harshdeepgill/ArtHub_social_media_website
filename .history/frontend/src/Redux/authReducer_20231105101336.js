const initialState = {
  isAuth: false,
  userName: "",
  avatar: "",
  subscription: "",
  token: "",
  theme: ""
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return { ...state, isAuth: true, userName: payload.username, avatar: payload.avatar, token: payload.token, subscription: payload.subscription };
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      return initialState;
    }
    case "THEME":
      {
        return { ...state, theme: state.theme === "dark" ? "light" : "dark" }
      }
    default: return state;
  }
}

export default authReducer;