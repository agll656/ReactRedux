// as we pass reducer as arg to the store in index.js, any value defined here become initial values in the store
// reducer then updates the value based on action ran
const initialState= {
    Age:21
}
const reducer= (state=initialState, action) => {
    console.log("action", action)
    const newState= {...state}

    switch(action.type){
        case "AGE_UP_ASYNC":
            return {
                ...state,
                Age: state.Age + action.payload
            }
            break;
        case "AGE_DOWN":
            return {
                ...state, Age: state.Age - action.payload
            }
            break;   
    }
    return state;
}

export default reducer;