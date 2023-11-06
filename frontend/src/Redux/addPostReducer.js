const initialState = {
    image: "",
    title: "",
    tags: [],
    premium: false,
    category: ""
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "IMAGE": return {
            ...state,
            image: payload
        }
        case "TITLE": return {
            ...state,
            title: payload
        }
        case "CATAGORY": return {
            ...state,
            category: payload
        }
        case "TAG": return {
            ...state,
            tags: [...state.tags,"#" + payload]

        }
        case "VERSION": return {
            ...state,
            premium: payload === "free" ? false : true
        }
        case "REMTAG": return {
            ...state,
            tags: payload
        }

        default: return state
    }
}

export default postReducer