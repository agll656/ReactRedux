import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchAgeUp} from './sagas/sagas';


const sagaMiddleware = createSagaMiddleware();


// createStore will allow to create the store
// also store is created using reducer
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// using run() will start saga and it will start catching the actions
// we pass out saga watcher funciton as an arguement
sagaMiddleware.run(watchAgeUp);


// provider helps us to inject the global store
// passing store as prop to the Provider make it available to the entire app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// React Redux's <Provider> component uses <ReactReduxContext.Provider> to put the Redux store and the current store state into context
// connect uses <ReactReduxContext.Consumer> to read those values and handle update


console.log("store", store)

