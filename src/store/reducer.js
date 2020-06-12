// as we pass reducer as arg to the store in index.js, any value defined here become initial values in the store
// reducer then updates the value based on action ran
const initialState= {
    Age:21,
    history: []
}
const reducer= (state=initialState, action) => {
    console.log("action", action)

    switch(action.type){
        case "AGE_UP_ASYNC":
            return {
                ...state,
                Age: state.Age + action.payload, 
                history: state.history.concat({id:Math.random(),Age: state.Age + action.payload})
            }
            break;
        case "AGE_DOWN_ASYNC":
            return {
                ...state, 
                Age: state.Age - action.payload,
                history: state.history.concat({id: Math.random(),Age: state.Age - action.payload})

            }
            break;  
        
        case "AGE_DELETE_ASYNC":
            return {
                ...state, 
                history: state.history.filter((arr) => arr.id !== action.payload)
} 
    }
    return state;
}

export default reducer;