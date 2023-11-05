const initialState = {
  isAuth: false,
  userName: "",
  avatar: "",
  subscription: "",
  token: "",
  theme: localStorage.getItem("theme") || "dark"
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
    case "TOGGLETHEME": {
      const val = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", val);
      return { ...state, theme: val };
    }
    default: return state;
  }
}

export default authReducer;