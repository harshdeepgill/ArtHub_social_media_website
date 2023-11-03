const initialState = {
  username: "",
  name: "",
  email: "",
  avatar: "",
  // role: {
  //   type: "",
  //   default: "",
  //   enum: []
  // },
  password: "",
  age: 0,
  favourites: [],
  premium: false,
  elite: false
}

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER":
      {
        return { ...state, ...payload };
      }
    case "LOGIN":
      {
        return { ...state, ...payload };
      }
    default:
      {
        return state;
      }
  }
}

export default registerReducer;