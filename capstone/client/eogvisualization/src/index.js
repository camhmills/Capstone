import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import jwt from 'jsonwebtoken'

import { authVerify } from './dataGrab'

const composedEnhancer = compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, composedEnhancer);

const token = localStorage.getItem('jsonwebtoken');

const authorization = () => {
  const verified = jwt.verify(token, 'dexter')
  console.log(verified)
  store.dispatch({type: 'SUCCESS', payload: verified})
}

if (token) {
  authorization()
}


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
