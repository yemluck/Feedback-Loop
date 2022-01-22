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






// global store
const store = createStore(
    combineReducers({

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
