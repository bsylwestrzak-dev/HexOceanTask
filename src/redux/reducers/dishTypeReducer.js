const dishTypeState = {
    type: null,
    spiciness_scale: null
}

export const dishTypeReducer = (state = dishTypeState, action) => {
    switch(action.type){
        case "SET_DISH_TYPE": 
            return {...state, type: action.payload}
        case "SET_SPICINESS_OF_THE_SOUP":
            return {...state, spiciness_scale: action.payload}
        default:
            return state
    }
}
