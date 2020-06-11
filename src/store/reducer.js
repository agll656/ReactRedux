const initialState= {
    Age:21
}

const reducer= (state=initialState, action) => {
    const newState= {...state}

    switch(action.type){
        case "AGE_UP":
            newState.Age++;
            break;
        case "AGE_DOWN":
            newState.Age--;
            break;
            
    }
    return newState;

}


export default reducer;