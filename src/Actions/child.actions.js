export const AGE_UP_ASYNC = 'AGE_UP_ASYNC';
export const AGE_DOWN_ASYNC= 'AGE_DOWN_ASYNC';
export const AGE_DELETE_ASYNC = 'AGE_DELETE_ASYNC';


export const ageUp = (increment) => {
    return {type:  AGE_UP_ASYNC , payload: increment};
}

export const ageDown = (decrement) => {
    return {type: AGE_DOWN_ASYNC, payload: decrement};
}

export const ageDelete = (id) => {
    return {type: AGE_DELETE_ASYNC, payload: id};
}