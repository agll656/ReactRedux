import {put, takeEvery, delay, takeLatest} from 'redux-saga/effects';
import {ageUp, ageDown, ageDelete} from '../Actions/child.actions';




function* ageUpAsync(props){
// put is used to dispatch another action
    // yield put({type: 'AGE_UP_ASYNC', payload: 1});
    console.log("sagas ran")
    yield put(ageUp(props.payload));
}

function* ageDownAsync(props){
    // put is used to dispatch another action
        yield put(ageDown(props.payload));
    }
function* ageDeleteAsyc(props){
    console.log("props in delete",props);
    try{
        yield put(ageDelete(props.payload));
    }
    catch(err){
        console.log("error",err);

    }

}
export function* watchAgeUp(props){
    // console.log("watching", props)
    // takeEvery watches for every action AGE_UP dispatched and run the ageUpAsync function
    // so here we are catching 'AGE_UP' function and it will never reach reducer, but another action dispatched by ageUpAsync will reach reducer now
    yield takeLatest('AGE_UP', ageUpAsync);
    yield takeLatest('AGE_DOWN', ageDownAsync);
    yield takeLatest('AGE_DEL' , ageDeleteAsyc);


}