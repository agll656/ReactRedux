import {put, takeEvery, delay, takeLatest} from 'redux-saga/effects';

console.log("sagas ran")

function* ageUpAsync(){

    yield delay(5000);
// put is used to dispatch another action
    yield put({type: 'AGE_UP_ASYNC', payload: 1});
}

export function* watchAgeUp(){
    // takeEvery watches for every action AGE_UP dispatched and run the ageUpAsync function
    // so here we are catching 'AGE_UP' function and it will never reach reducer, but another action dispatched by ageUpAsync will reach reducer now
    yield takeLatest('AGE_UP', ageUpAsync);

}