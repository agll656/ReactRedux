// as we pass reducer as arg to the store in index.js, any value defined here become initial values in the store
// reducer then updates the value based on action ran
const initialState= {
    Age:21,
    ageArr: []
}
const reducer= (state=initialState, action) => {
    console.log("action", action)

    switch(action.type){
        case "AGE_UP_ASYNC":
            return {
                ...state,
                Age: state.Age + action.payload, 
                ageArr: state.ageArr.concat({id:Math.random(),Age: state.Age + action.payload})
            }
            break;
        case "AGE_DOWN_ASYNC":
            return {
                ...state, 
                Age: state.Age - action.payload,
                ageArr: state.ageArr.concat({id: Math.random(),Age: state.Age - action.payload})

            }
            break;  
        
        case "AGE_DELETE_ASYNC":
            return {
                ...state, 
                ageArr: state.ageArr.filter((arr) => arr.id !== action.payload)
} 
    }
    return state;
}

export default reducer;