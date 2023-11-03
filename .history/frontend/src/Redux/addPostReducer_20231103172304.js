

const initialState = {
    image: "",
    title: "",
    tags: ""
}

const postReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "IMAGE": return {
            ...state,
            image: payload
        }
        
        default : return state
    }
}

export default postReducer