import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// createStore will allow to create the store
// also store is created using reducer
const store = createStore(reducer);


// provider helps us to inject the global store
// passing store as prop to the Provider make it available to the entire app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

console.log("store", store)

