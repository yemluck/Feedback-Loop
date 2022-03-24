import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { useEffect } from "react";
import logger from "redux-logger";


// Reducers
// feeling reducer
const feelingReducer = (state={}, action) => {
    switch (action.type) {
        case 'SUBMIT_FEELING':
            return action.payload;
        case 'EMPTY':
            state = {}
            return state;
    }
    return state
}

// understanding reducer
const understandingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_UNDERSTANDING':
            return action.payload;
        case 'EMPTY':
            state = {};
            return state;
    }
    return state
}

// support reducer
const supportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_SUPPORT':
            return action.payload;
        case 'EMPTY':
            state = {}
            return state;
    }
    return state
}
// comment reducer
const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_COMMENT':
            return action.payload;
        case 'EMPTY':
            state = {};
            return state;
    }
    return state
}

// global store
const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger) //informative console log about changing state
)

ReactDOM.render(
    // provider to give global access to redux store
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

registerServiceWorker();
